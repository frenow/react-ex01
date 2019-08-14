import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderComponent } from './HeaderComponent';
import { NavBarComponent } from './NavBarComponent';
import { ContainerComponent } from './ContainerComponent';
import { PostComponent } from './PostComponent';
import { SideBarComponent } from './SideBarComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <NavBarComponent />
      <ContainerComponent />
      <PostComponent />
      <PostComponent />
      <PostComponent />
      <SideBarComponent />
    </div>
  
  );
}

export default App;
