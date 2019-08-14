import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderComponent } from './HeaderComponent';
import { NavBarComponent } from './NavBarComponent';
import { ContainerComponent } from './ContainerComponent';
import { PostComponent } from './PostComponent';
import { SideBarComponent } from './SideBarComponent';

function App() {
  const post1 = 'Lorem 1 ipsum dolor sit amet, consectetur adipiscing elit. Cras ante mi, fermentum sed justo a, fringilla aliquam libero. Aliquam a bibendum purus. Aenean tincidunt varius scelerisque. Phasellus at lacinia augue. Curabitur vitae leo consequat elit gravida semper vitae at purus. Sed tempor quam nec gravida posuere. Aliquam fermentum tellus non quam elementum feugiat. Aenean ac libero vitae est tristique semper. Sed feugiat velit mi. Integer et mauris pulvinar, lacinia lectus sit amet, tempus quam. Cras vitae purus elementum, rutrum erat eu, pellentesque tellus. Maecenas efficitur porta erat, vitae tincidunt nunc ultricies at.';
  const post2 = 'Lorem 2 ipsum dolor sit amet, consectetur adipiscing elit. Cras ante mi, fermentum sed justo a, fringilla aliquam libero. Aliquam a bibendum purus. Aenean tincidunt varius scelerisque. Phasellus at lacinia augue. Curabitur vitae leo consequat elit gravida semper vitae at purus. Sed tempor quam nec gravida posuere. Aliquam fermentum tellus non quam elementum feugiat. Aenean ac libero vitae est tristique semper. Sed feugiat velit mi. Integer et mauris pulvinar, lacinia lectus sit amet, tempus quam. Cras vitae purus elementum, rutrum erat eu, pellentesque tellus. Maecenas efficitur porta erat, vitae tincidunt nunc ultricies at.';
  const post3 = 'Lorem 3 ipsum dolor sit amet, consectetur adipiscing elit. Cras ante mi, fermentum sed justo a, fringilla aliquam libero. Aliquam a bibendum purus. Aenean tincidunt varius scelerisque. Phasellus at lacinia augue. Curabitur vitae leo consequat elit gravida semper vitae at purus. Sed tempor quam nec gravida posuere. Aliquam fermentum tellus non quam elementum feugiat. Aenean ac libero vitae est tristique semper. Sed feugiat velit mi. Integer et mauris pulvinar, lacinia lectus sit amet, tempus quam. Cras vitae purus elementum, rutrum erat eu, pellentesque tellus. Maecenas efficitur porta erat, vitae tincidunt nunc ultricies at.';
  return (
    <div>
      <HeaderComponent />
      <NavBarComponent  />
      <ContainerComponent /> 
      <PostComponent postagem = {post1}/>
      <PostComponent postagem = {post2}/>
      <PostComponent postagem = {post3}/>
      <SideBarComponent />
    </div>

  );
}

export default App;
