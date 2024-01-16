import { memo } from 'react';
import { Close } from '../../svg/CloseSvg';
import * as Styles from './Vacancy.styles';
import { useSelector, useDispatch } from 'react-redux';
import {
  closeViewCard,
  cardViewSelector,
  closeVacancyFetch,
  respondeVacancyFetch,
} from '../../slices/cardViewSlice';
import {
  sessionSelector,
  respondeVacancy,
  cancelResponde,
} from '../../slices/sessionSlice';
import { updateVacancies } from '../../slices/vacanciesSlice';

export const Vacancy = memo(function Vacancy() {
  const dispatch = useDispatch();
  const { vacancy } = useSelector(cardViewSelector);
  const { session, type } = useSelector(sessionSelector);

  const closeVacancy = () => {
    dispatch(closeVacancyFetch(vacancy)).then((data) => {
      const response = data.payload;
      if (response.success) {
        dispatch(updateVacancies(response.vacancies));
        closeCard();
      } else alert('Failed to close the vacancy.');
    });
  };

  const closeCard = () => {
    dispatch(closeViewCard());
  };

  const isOwnVacancy = session.vacancies.some((id) => id === vacancy.id);

  const setArrays = (operation) => {
    const newResponded =
      operation === 'cancel'
        ? vacancy.responded.filter((id) => id !== session.id)
        : [...vacancy.responded, session.id];
    const newVacancies =
      operation === 'cancel'
        ? session.vacancies.filter((id) => id !== vacancy.id)
        : [...session.vacancies, vacancy.id];

    return {
      newResponded: newResponded,
      newVacancies: newVacancies,
    };
  };

  const respondeActionHandle = (operation) => {
    const updatedArrays = setArrays(operation);
    dispatch(
      respondeVacancyFetch({
        userId: session.id,
        vacancyId: vacancy.id,
        newResponded: updatedArrays.newResponded,
        newVacancies: updatedArrays.newVacancies,
      })
    ).then((data) => {
      const response = data.payload;
      if (operation === 'cancel') dispatch(cancelResponde(response.vacancy.id));
      else dispatch(respondeVacancy(response.vacancy.id));
      closeCard();
    });
  };

  const isResponde = session.vacancies.some((id) => vacancy.id === id);

  const button = {
    user: isResponde ? (
      <Styles.VacancyButton onClick={() => respondeActionHandle('cancel')}>
        cancel responde
      </Styles.VacancyButton>
    ) : (
      <Styles.VacancyButton onClick={() => respondeActionHandle('responde')}>
        responde
      </Styles.VacancyButton>
    ),
    company: isOwnVacancy ? (
      <Styles.VacancyButton onClick={closeVacancy} disabled={!vacancy.isActive}>
        close
      </Styles.VacancyButton>
    ) : null,
  }[type];

  return (
    <Styles.Container>
      <Styles.Svg onClick={closeCard}>
        <Close />
      </Styles.Svg>

      <Styles.Head>
        <Styles.Title>
          <h2>{vacancy.title}</h2>
        </Styles.Title>
        <Styles.Grade>
          <p>{`English Lvl: ${vacancy.englishLvl}`}</p>
          <p>{`Grade: ${vacancy.grade}`}</p>
        </Styles.Grade>
      </Styles.Head>
      <Styles.Description>{vacancy.description}</Styles.Description>
      <Styles.Contacts>{vacancy.contacts}</Styles.Contacts>
      <Styles.Tags>{vacancy.tags.join(', ')}</Styles.Tags>
      {button}
    </Styles.Container>
  );
});
