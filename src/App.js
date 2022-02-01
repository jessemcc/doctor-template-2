import React from 'react';
import AppStyle from './App.module.scss';
import {NavBar} from "./components/navbar/navbar";
import {Hero} from './components/hero/hero';
import {About} from './components/about/about';
import {MeetStaff} from './components/meet_staff/meet_staff';
import {Services} from './components/services/services';
import {Contact} from './components/contact/contact';

function App() {
  return (
    <div className={AppStyle.mainContainer}>
      <NavBar />
      <Hero />
      <About />
      <MeetStaff />
      <Services />
      <Contact />
    </div>
  );
}

export default App;