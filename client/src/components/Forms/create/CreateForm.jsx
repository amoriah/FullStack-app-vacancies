import { useState } from 'react';
import * as Styles from './CreateForm.styles';
import { useDispatch, useSelector } from 'react-redux';
import { postVacancy } from '../../../slices/vacanciesSlice';
import { nanoid } from '@reduxjs/toolkit';
import { respondeVacancy, sessionSelector } from '../../../slices/sessionSlice';

export const CreateForm = () => {
  const dispatch = useDispatch();
  const { session } = useSelector(sessionSelector);
  const [form, setForm] = useState({
    title: '',
    description: '',
    level: '',
    grade: '',
    tags: [],
    contacts: '',
  });

  const formFilled = (key, value) => {
    if (key === 'title' && value.length > 50) {
      alert('Too long title. Try again.');
      clear();
    } else if (key === 'tags') {
      const newTags = form.tags.length ? [...form.tags, value] : [value];
      setForm({ ...form, [key]: newTags });
    } else setForm({ ...form, [key]: value });
  };

  const tags = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'];
  const lvls = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const grades = ['Junior', 'Middle', 'Senior'];

  const tagsOptions = tags.map((e) => {
    return <option key={nanoid()}>{e}</option>;
  });
  const lvlsOptions = lvls.map((e) => {
    return <option key={nanoid()}>{e}</option>;
  });
  const gradesOptions = grades.map((e) => {
    return <option key={nanoid()}>{e}</option>;
  });

  const clear = () => {
    setForm({
      title: '',
      description: '',
      englishLvl: '',
      grade: '',
      tags: '',
      contacts: '',
    });
  };

  const submit = (event) => {
    event.preventDefault();

    dispatch(postVacancy({ ...form, companyId: session.id })).then((data) => {
      const response = data.payload;
      if (!response.success) alert('Error. Try again.');
      else {
        dispatch(respondeVacancy(response.vacancy.id));
        alert('New vacancy created.');
      }
      clear();
    });
  };

  return (
    <Styles.Container>
      <Styles.Form onSubmit={submit}>
        <Styles.Label htmlFor='title'>Vacancy title</Styles.Label>
        <Styles.Input
          id='title'
          name='title'
          value={form.title}
          required
          onChange={(e) => formFilled(e.target.name, e.target.value)}
        />
        <Styles.Label id='description'>Vacancy description</Styles.Label>
        <Styles.Textarea
          id='description'
          name='description'
          value={form.description}
          required
          onChange={(e) => formFilled(e.target.name, e.target.value)}
        />
        <Styles.Label htmlFor='englishLvl'>English level</Styles.Label>
        <Styles.Select
          id='englishLvl'
          name='englishLvl'
          value={form.englishLvl}
          required
          onChange={(e) => formFilled(e.target.name, e.target.value)}
        >
          {lvlsOptions}
        </Styles.Select>
        <Styles.Label htmlFor='grade'>Grade</Styles.Label>
        <Styles.Select
          id='grade'
          name='grade'
          value={form.grade}
          required
          onChange={(e) => formFilled(e.target.name, e.target.value)}
        >
          {gradesOptions}
        </Styles.Select>
        <Styles.Label htmlFor='tags'>Tags</Styles.Label>
        <Styles.MultipleSelect
          id='tags'
          name='tags'
          value={form.tags}
          required
          multiple
          onChange={(e) => formFilled(e.target.name, e.target.value)}
        >
          {tagsOptions}
        </Styles.MultipleSelect>
        <Styles.Label htmlFor='title'>Contacts</Styles.Label>
        <Styles.Input
          id='contacts'
          name='contacts'
          value={form.contacts}
          required
          onChange={(e) => formFilled(e.target.name, e.target.value)}
        />
        <Styles.ButtonContainer>
          <Styles.Button type='reset' onClick={clear}>
            Cancel
          </Styles.Button>
          <Styles.Button type='submit'>Save</Styles.Button>
        </Styles.ButtonContainer>
      </Styles.Form>
    </Styles.Container>
  );
};
