import React, { Suspense } from 'react';
import './style.css'
import {
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { routePortal } from '../routes/PortalRoute';
import LayoutPage from '../components/layout/LayoutPage';
import Login from '../components/organisms/login/Login';
import Register from '../components/organisms/login/Register';
import SearchResults from '../components/organisms/searchResults/SearchResults';

function App() {
  return (
    <Suspense fallback={<></>} >
      <div className="App">

        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route
            path='/'
            element={
              <LayoutPage>
                <Outlet />
              </LayoutPage>
            }
          >
            <Route path='/'>
              {
                routePortal.map(route => (
                  <Route
                    key={route.id}
                    path={route.route}
                    element={<route.component />}
                  >

                  </Route>
                ))
              }
            </Route>

          </Route>
        </Routes >

      </div >
    </Suspense>
  );
}

export default App;
