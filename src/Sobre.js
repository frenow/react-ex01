import React from 'react';

import { HeaderComponent } from './HeaderComponent';
import { NavBarComponent } from './NavBarComponent';
import { ContainerComponent } from './ContainerComponent';
import { SideBarComponent } from './SideBarComponent';
import { SobreComponent } from './SobreComponent';
function Sobre() {
  return (
    <div>
      <HeaderComponent />
      <NavBarComponent  />
      <ContainerComponent /> 
      <SobreComponent />
      <SideBarComponent />
    </div>

  );
}

export default Sobre;