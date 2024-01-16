import * as Styles from '../AuthForm.styles';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  registerFetch,
  sessionSelector,
  updateType,
} from '../../../slices/sessionSlice';

export const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { type } = useSelector(sessionSelector);

  const nameType = {
    user: 'Name',
    company: 'Company name',
  }[type];

  const typeHandle = (type) => {
    dispatch(updateType(type));
  };

  const submit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { login, password, name, repeat } = Object.fromEntries(formData);

    dispatch(registerFetch({ name, login, password, repeat }))
      .then((res) => {
        if (res.payload.success) navigate('/login');
        else {
          alert(res.payload.message);
          navigate(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Styles.Container>
      <Styles.Form id='signup' onSubmit={submit}>
        <Styles.ChooseBlock>
          How you want to register?
          <Styles.ChooseButtons>
            <Styles.TypeButton
              type='button'
              underline={type === 'user'}
              onClick={() => typeHandle('user')}
            >
              user
            </Styles.TypeButton>
            <Styles.TypeButton
              type='button'
              underline={type === 'company'}
              onClick={() => typeHandle('company')}
            >
              company
            </Styles.TypeButton>
          </Styles.ChooseButtons>
        </Styles.ChooseBlock>
        <Styles.Label htmlFor='name'>{nameType}</Styles.Label>
        <Styles.Input name='name' id='name' type='text' />
        <Styles.Label htmlFor='login'>Login</Styles.Label>
        <Styles.Input name='login' id='login' type='text' />
        <Styles.Label htmlFor='password'>Password</Styles.Label>
        <Styles.Input name='password' id='password' type='password' />
        <Styles.Label htmlFor='repeat'>Repeat password</Styles.Label>
        <Styles.Input name='repeat' id='repeat' type='password' />
        <Styles.AccountDiv>
          <p>
            Already have an account? <a href='/login'>Sign in</a>.
          </p>
        </Styles.AccountDiv>
        <Styles.ButtonFlex>
          <Styles.Button type='submit'>Sign up</Styles.Button>
        </Styles.ButtonFlex>
      </Styles.Form>
    </Styles.Container>
  );
};
