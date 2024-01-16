import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Styles from '../AuthForm.styles';
import {
  loginFetch,
  sessionSelector,
  updateType,
} from '../../../slices/sessionSlice';

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { type } = useSelector(sessionSelector);

  const typeHandle = (type) => {
    dispatch(updateType(type));
  };

  const submit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { login, password } = Object.fromEntries(formData.entries());

    dispatch(loginFetch({ type, login, password }))
      .then((data) => {
        const response = data.payload;
        if (response.success) navigate('/vacancies');
        else {
          alert(response.message);
          navigate(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Styles.Container>
        <Styles.Form id='login' onSubmit={submit}>
          <Styles.ChooseBlock>
            How you want to login?
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
          <Styles.Label htmlFor='login'>Login</Styles.Label>
          <Styles.Input id='login' name='login' type='text' />
          <Styles.Label htmlFor='password'>Password</Styles.Label>
          <Styles.Input type='password' name='password' id='password' />
          <Styles.AccountDiv>
            <p>
              Sign in or <a href='/signup'>Create an account</a>
            </p>
          </Styles.AccountDiv>
          <Styles.ButtonFlex>
            <Styles.Button type='submit'>Sign in</Styles.Button>
          </Styles.ButtonFlex>
        </Styles.Form>
      </Styles.Container>
    </>
  );
};
