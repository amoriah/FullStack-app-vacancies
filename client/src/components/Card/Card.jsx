import { memo, useState } from 'react';
import { ManSvg } from '../../svg/ManSvg';
import { MarkSvg } from '../../svg/MarkSvg';
import * as Styles from './Card.styles';
import { useDispatch, useSelector } from 'react-redux';
import { closeViewCard, openViewCard } from '../../slices/cardViewSlice';
import { sessionSelector } from '../../slices/sessionSlice';

export const Card = memo(function Card({ vacancy }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { session, type } = useSelector(sessionSelector);

  const currentVacancy = session.vacancies.some((id) => id === vacancy.id);
  const renderIcon = {
    user: currentVacancy ? (
      <Styles.IconBlock>
        <MarkSvg /> You responded
      </Styles.IconBlock>
    ) : null,
    company: currentVacancy ? (
      <Styles.IconBlock>
        <ManSvg /> {vacancy.responded.length}
      </Styles.IconBlock>
    ) : null,
  }[type];

  const openCard = () => {
    if (!open) {
      setOpen(true);
      dispatch(openViewCard(vacancy));
    } else {
      dispatch(closeViewCard());
      setOpen(false);
    }
  };

  return (
    <Styles.Container onClick={openCard}>
      {renderIcon}

      <Styles.Title>{vacancy.title}</Styles.Title>
      <Styles.Description>{vacancy.description}</Styles.Description>
    </Styles.Container>
  );
});
