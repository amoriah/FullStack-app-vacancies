import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import {
  fetchVacancies,
  vacanciesSelector,
  vacanciesFailure,
  updateVacancies,
  vacanciesSuccess,
} from '../slices/vacanciesSlice';
import { cardViewSelector } from '../slices/cardViewSlice';
import components from '../components/index';
import { sessionSelector } from '../slices/sessionSlice';

export const ActiveVacancies = () => {
  const dispatch = useDispatch();
  const { vacancies, loading, hasErrors } = useSelector(vacanciesSelector);
  const { session } = useSelector(sessionSelector);
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

  const renderActiveVacancies = () => {
    if (loading) return <p>Loading vacancies...</p>;
    else if (hasErrors) return <p>Unable to display posts</p>;
    else if (!vacancies.length) return <p>No active vacancies yet</p>;

    const companyVacancies = vacancies.filter((vacancy) =>
      session.vacancies.includes(vacancy.id)
    );

    const renderVacancies =
      companyVacancies &&
      companyVacancies.map((vacancy) => {
        return <components.Card key={nanoid()} vacancy={vacancy} />;
      });
    if (renderVacancies.length) return renderVacancies;
    else return <p>No active vacancies yet</p>;
  };

  return (
    <components.Layout
      content={renderActiveVacancies()}
      vacancy={view && <components.Vacancy key={nanoid()} />}
    />
  );
};
