import components from '../components/index';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchVacancies,
  vacanciesSelector,
  vacanciesFailure,
  updateVacancies,
  vacanciesSuccess,
} from '../slices/vacanciesSlice';
import { nanoid } from '@reduxjs/toolkit';
import { cardViewSelector } from '../slices/cardViewSlice';

export const MainPage = () => {
  const dispatch = useDispatch();
  const { vacancies, loading, hasErrors } = useSelector(vacanciesSelector);
  const { view } = useSelector(cardViewSelector);

  useEffect(() => {
    dispatch(fetchVacancies()).then((data) => {
      const response = data.payload;

      if (response.success) {
        dispatch(vacanciesSuccess(response.vacancies));
        dispatch(updateVacancies(response.vacancies));
      } else {
        dispatch(vacanciesFailure());
      }
    });
  }, [dispatch]);

  const renderVacancies = () => {
    if (loading) return <p>Loading vacancies...</p>;
    else if (hasErrors) return <p>Unable to display posts</p>;
    else if (!vacancies.length) return <p>No vacancies yet</p>;
    else
      return vacancies
        .filter((vacancy) => vacancy.isActive)
        .map((vacancy) => {
          return <components.Card key={nanoid()} vacancy={vacancy} />;
        });
  };

  return (
    <components.Layout
      content={renderVacancies()}
      vacancy={view && <components.Vacancy key={nanoid()} />}
    />
  );
};
