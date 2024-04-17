import React from 'react';
import './App.css';
import ZustandLibraty from 'src/zustand/ZustandLibraty';
import { Route, Routes } from 'react-router';
import ReactRouterLibrary, { ReactRouterPage1, ReactRouterPage2 } from './react-router/ReactRouterLibrary';

function App() {
  return (
    <Routes>
       {/* <Route index element={<ReactRouterLibrary/>}/>
       <Route path='/page1' element={<ReactRouterPage1/>}/>
       <Route path='/page2' element={<ReactRouterPage2/>}/>
       <Route path='/zustand' element={ <ZustandLibraty />}/> */}
       <Route path='/router'>
          <Route index element={<ReactRouterLibrary/>}/>
          <Route path='page1' element={<ReactRouterPage1/>}/>
          <Route path='page2' element={<ReactRouterPage2/>}/>
       </Route>
       <Route path='zustand' element={ <ZustandLibraty />}/>
       {/* <ZustandLibraty/> */}
    </Routes>
    //<ZustandLibraty/>
  );
}

export default App;
// 복습완료!!!
