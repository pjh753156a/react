import React from 'react';
import './App.css';
import ZustandLibraty from 'src/zustand/ZustandLibraty';
import { Route, Routes } from 'react-router';
import ReactRouterLibrary, { ReactRouterPage1, ReactRouterPage2 } from './react-router/ReactRouterLibrary';
import Layout from './react-router/Layout';
import AxiosLibrary from './axios/AxiosLibrary';
import ReactCookieLibrary from './react-cookie/ReactCookieLibrary';

function App() {
  return (
    <Routes>
       {/* <Route index element={<ReactRouterLibrary/>}/>
       <Route path='/page1' element={<ReactRouterPage1/>}/>
       <Route path='/page2' element={<ReactRouterPage2/>}/>
       <Route path='/zustand' element={ <ZustandLibraty />}/> */}

       <Route path='/router' element={<Layout/>}>
          <Route index element={<ReactRouterLibrary/>}/>
          <Route path='page1/:value' element={<ReactRouterPage1/>}/>
          <Route path='page2/' element={<ReactRouterPage2/>}/>
       </Route>
       <Route path='zustand' element={ <ZustandLibraty />}/>
       <Route path='/axios' element={<AxiosLibrary/>}/>
       <Route path='/cookie' element={<ReactCookieLibrary/>}/>
       <Route path='*' element={<h3>404 Error</h3>} />
    </Routes>
    //<ZustandLibraty/>
  );
}

export default App;
//!!!복습완료