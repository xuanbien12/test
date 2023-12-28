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


function App() {

  return (
    <div className="App bg-[#f0f2f5] min-h-[100vh]  ">
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

            </Route>

          </Route>
        </Routes>

      </Suspense>
    </div>

  );
}

export default App;