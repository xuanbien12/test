import React, { Suspense } from 'react';
import './style.css'
import {

  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import { routePortal } from '../routes/PortalRoute';
import LayoutPage from '../components/layout/LayoutPage';
import Login from '../components/organisms/login/Login';
import Register from '../components/organisms/login/Register';

function App() {

  return (

    <div className="App bg-[#f0f2f5] ">

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

  );
}

export default App;
