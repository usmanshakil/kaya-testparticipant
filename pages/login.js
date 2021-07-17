import MainComponent from '../components/pagesComponents/loginPageComponent';
import LayoutNonLogin from '../components/layoutNonLoggedIn';

const Login = () => {
  return (
    <LayoutNonLogin>
      <MainComponent />
    </LayoutNonLogin>
  );
};
export default Login;
