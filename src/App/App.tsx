import React, { Suspense, useEffect } from 'react';
import './style.css'
import {
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { Spin, ConfigProvider } from 'antd';
import { routePortal } from '../routes/PortalRoute';
import LayoutPage from '../components/layout/LayoutPage';
import { routePortalAdmin } from '../routes/PortalRouteAdmin';
import { role, token } from '../configs/localStorage';
import { useSelector } from 'react-redux';

function App() {
  const roleA = useSelector((state: any) => state.global.role) || +role
  return (
    <div className="App bg-[#f0f2f5]   ">
      <Suspense fallback={<Spin className='w-full h-[80vh] flex items-center justify-center ' size="large" />} >


        <Routes>


          <Route path='/' element={<LayoutPage>
            <Outlet />
          </LayoutPage>
          }
          >

            <Route path='/'>

              {

                routePortal.map(route => (
                  <Route key={route.id} path={route.route} element={<route.component />}
                  >

                  </Route>

                ))
              }
              {
                +roleA === 2
                &&
                routePortalAdmin.map(route => (
                  <Route key={route.id} path={route.route} element={<route.component />}
                  >

                  </Route>

                ))
              }

            </Route>

          </Route>
        </Routes>

      </Suspense>
    </div>

  );
}

export default App;