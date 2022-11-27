import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const history = useNavigate();

  const isAuth = true;
  return isAuth ? children : history('/auth');
};

export default PrivateRoute;
