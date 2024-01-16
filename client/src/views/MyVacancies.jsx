import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { fetchVacancies, vacanciesSelector } from '../slices/vacanciesSlice';
import { cardViewSelector } from '../slices/cardViewSlice';
import { sessionSelector } from '../slices/sessionSlice';
import components from '../components/index';

export const MyVacancies = () => {
  const dispatch = useDispatch();
  const { vacancies, loading, hasErrors } = useSelector(vacanciesSelector);
  const { view } = useSelector(cardViewSelector);
  const { session } = useSelector(sessionSelector);

  useEffect(() => {
    dispatch(fetchVacancies());
  }, [dispatch]);


  const renderActiveVacancies = () => {
    if (loading) return <p>Loading vacancies...</p>;
    else if (hasErrors) return <p>Unable to display posts</p>;

    const myVacancies = session.vacancies
      .map((id) => vacancies.find((v) => v.id === id))
      .filter((vacancy) => vacancy);
      
    if (!myVacancies.length) return <p>No responded vacancies yet</p>;
    else {
      return myVacancies.map((vacancy) => {
        return <components.Card key={nanoid()} vacancy={vacancy} />;
      });
    }
  };

  return (
    <components.Layout
      content={renderActiveVacancies()}
      vacancy={view && <components.Vacancy key={nanoid()} />}
    />
  );
};
