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
import background from "./../assets/img/bg.png"
import ForgotPassword from '../components/organisms/ForgotPassword/ForgotPassword';

const Login = React.lazy(() => import('../components/organisms/login/Login'))



function App() {

  return (
    <div style={{ backgroundImage: `url(${background})` }} className="App bg-[#f0f2f5] min-h-[100vh]  ">
      <Suspense fallback={<Spin className='w-full h-[80vh] flex items-center justify-center ' size="large" />} >
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#349E49F0",
              colorLink: "#4285F4",
              colorLinkHover: "#4285F4",
            },
          }}
        // locale={locale}
        >
          <Routes>

            <Route path='/login' element={<Login />} />
            <Route path='/forgot-password' element={<Login />} />
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
        </ConfigProvider>
      </Suspense>
    </div>

  );
}

export default App;