import { Route, Routes, Navigate } from 'react-router-dom';
import Auth from '../../pages/Auth'
import Menu from '../../pages/Menu'
import Omp from '../../pages/Omp'
import PrivateRoute from './PrivateRoute'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />}/>
      <Route
        path="/menu"
        element={(
          <PrivateRoute>
            <Menu />
          </PrivateRoute>
        )}
      />
      <Route
        path="/omp"
        element={(
          <PrivateRoute>
            <Omp />
          </PrivateRoute>
        )}
      />
    </Routes>
  );
};

export default AppRouter;
