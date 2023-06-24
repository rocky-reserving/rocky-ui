'use-client'

import {useEffect, useState} from 'react';

import SidebarHeader from "./sidebar/SidebarHeader.component";
import SidebarList from "./sidebar/SidebarList.component";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isCountingDown, setIsCountingDown] = useState(true);
  const [isMouseOverSidebar, setIsMouseOverSidebar] = useState(false);
    
  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsCountingDown(false);
    }
  }

  const handleMouseOverSidebar = () => {
    setIsMouseOverSidebar(true);
    setIsCountingDown(false);
  }

  const handleMouseLeavesSidebar = () => {
    setIsMouseOverSidebar(false);
    setIsCountingDown(true);
  }

  // close sidebar after 2 seconds
  useEffect(() => {
    if (isCountingDown) {
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    }
  }, [isCountingDown]);

  return (
    <div id="sidebar" className={`h-[100vh] bg-slate-300 align-center absolute transition-all duration-100 ${isOpen ? "w-15vh" : "w-[50px]" }`} onMouseEnter={handleMouseOverSidebar} onMouseLeave={handleMouseLeavesSidebar}>
      <SidebarHeader isOpen={isOpen} handleHamburgerClick={handleHamburgerClick}/>
      <SidebarList isOpen={isOpen} />
    </div>
  )
}

export default Sidebar;