import React from 'react';
import './App.css';

import Header from './components/Header';
import IntroSection from './components/IntroSection';
import SneakPeekContainer from './components/SneakPeekContainer';

function App() {
  return (
    <>
      <Header />
      <IntroSection />
      <SneakPeekContainer heading="Topics"/>
      <SneakPeekContainer heading="Paths" />
    </>
  );
}

export default App;
