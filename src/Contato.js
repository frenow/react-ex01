import React from 'react';

import { HeaderComponent } from './HeaderComponent';
import { NavBarComponent } from './NavBarComponent';
import { ContainerComponent } from './ContainerComponent';
import { SideBarComponent } from './SideBarComponent';
import { ContatoComponent } from './ContatoComponent';
function Contato() {
  return (
    <div>
      <HeaderComponent />
      <NavBarComponent  />
      <ContainerComponent /> 
      <ContatoComponent />
      <SideBarComponent />
    </div>

  );
}

export default Contato;