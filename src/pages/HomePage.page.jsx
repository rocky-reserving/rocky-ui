'use client';

import Sidebar from '@/components/Sidebar.component.jsx';
import Navbar from '@/components/Navbar.component.jsx';


// react hooks
import { useState } from 'react';

// components
import LandingPage from '../components/LandingPage.component.jsx';

const HomePage = () => {
  const [isNewModelLoading, setIsNewModelLoading] = useState(false);
  const [isLoadModelLoading, setIsLoadModelLoading] = useState(false);
  const [isReadDocsLoading, setIsReadDocsLoading] = useState(false);
  
  // click handlers
  const handleNewModelButtonClick = () => {
    // TODO - load workspace with a blank model
    console.log('clicked new model button');
    
    // add animate-spin to button before the text
    setIsNewModelLoading(!isNewModelLoading);
  };

  const handleLoadModelButtonClick = () => {
    // TODO - load saved model from file system and load workspace
    console.log('clicked load model button');

    // add animate-spin to button before the text
    setIsLoadModelLoading(!isLoadModelLoading);
  };

  const handleReadDocsButtonClick = () => {
    // TODO - open documentation in new tab
    console.log('clicked read docs button');
    
    // add animate-spin to button before the text
    setIsReadDocsLoading(!isReadDocsLoading);
  };


  return (
    <main id='main-home-page' className='bg-gradient-conic h-screen'>
      <Sidebar />
      <div id='home-page-divider' className='border-r-2 border-black'>
        <LandingPage 
          isNewModelLoading={isNewModelLoading}
          isLoadModelLoading={isLoadModelLoading}
          isReadDocsLoading={isReadDocsLoading}
          handleNewModelButtonClick={handleNewModelButtonClick}
          handleLoadModelButtonClick={handleLoadModelButtonClick}
          handleReadDocsButtonClick={handleReadDocsButtonClick}
        />
        <Navbar />
        <div id='workspace' className='bg-black'>

        </div>
      </div>
    </main>
  );
};

export default HomePage;