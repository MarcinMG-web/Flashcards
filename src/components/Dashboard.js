import React,{useState, useEffect} from 'react';

import { Link } from 'react-router-dom';

const Dashboard = ({ numerElemetInFlashCard, setNumerElemetInFlashCard, setAnswers }) => {
  
  const startTimerClick = () => {
    console.log('click')
  }
  
  const onchangeEventChandlerAndCleanup = (e) => {
    setNumerElemetInFlashCard(e.target.value)
    setAnswers(0)
  }

  return (
    <div className='ContainerDashboard'>
      <div className='ContainerDashboard_header'>Settings:</div>

      <div className='ContainerDashboard_main'>
        <div
          className='ContainerDashboard_main-rangeSlider'
          data-min='1'
          data-max='20'
        >
          <label style={{ margin: '15px' }}>Choose size of flip card:</label>
          <input
            type='range'
            min='1'
            max='20'
            value={numerElemetInFlashCard}
            onChange={onchangeEventChandlerAndCleanup}
            style={{ marginTop: '10px' }}
          />
          <div className='ContainerDashboard_main-rangeSlider-result'>
            {numerElemetInFlashCard}
          </div>
        </div>
      </div>

      <div className='ContainerDashboard_button'>
        <Link to='./FlashCard' onClick ={startTimerClick} className='btn_toTheFlashCard'>
          Start
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;