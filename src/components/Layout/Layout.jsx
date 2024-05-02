import React from 'react'
import Style from './Layout.module.css';


import { Outlet } from 'react-router-dom';
export default function Layout() {
  return<>
  
  <Outlet></Outlet>
  </>
}
