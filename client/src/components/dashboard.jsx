import React from 'react';
import { useState, useEffect } from 'react';
import ApplicationList from './application-list-component/application-list.jsx';
import Sidebar from './sidebar';

const dashboard = () => {
  const [applications, setApplications] = useState([
    {
      companyName: 'Google',
      dateApplied: '2024-06-25',
      appStatus: 'Applied',
      role: 'CEO',
    },
    {
      companyName: 'Microsoft',
      dateApplied: '2024-06-25',
      appStatus: 'Applied',
      role: 'Software Engineer',
    },
  ]);
  const [companyName, setCompanyName] = useState('');
  const [dateApplied, setDateApplied] = useState('');
  const [appStatus, setAppStatus] = useState('');
  const [role, setRole] = useState('');
  const [totalApp, setTotalApp] = useState(2);

  useEffect(() => {
    const fetchApp = async () => {
      try {
        const response = await fetch('http://localhost:3000/dashboard');
        const data = await response.json();
        setApplications(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchApp();
  }, []);

  const handleCompanyChange = async (e) => {
    setCompanyName(e.target.value);
  };

  const handleDateChange = async (e) => {
    setDateApplied(e.target.value);
  };

  const handleAppStatusChange = async (e) => {
    setAppStatus(e.target.value);
  };

  // const handleNotesChange = async (e) => {
  //   setNotes(e.target.value);
  // };

  const handleRoleChange = async (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/dashboard', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          companyName, //companyName,
          dateApplied, //dateApplied,
          role, //role,
          // notes: notes,
          appStatus, //appStatus,
        }),
      });

      const data = await response.json();
      console.log('this is fetch response', data);
      console.log('response', response);

      if (!response.ok) {
        console.log('response is not ok!');
      } else {
        console.log('RESPONSE IS OK');
        const newApp = {
          companyName,
          dateApplied,
          appStatus,
          // notes,
          role,
        };
        setApplications([...applications, newApp]);
        setCompanyName('');
        setDateApplied('');
        setAppStatus('');
        // setNotes('');
        setRole('');
        setTotalApp(totalApp + 1);
        //alert('Success submitted');
      }
    } catch (error) {
      //console.error('Error:', error);
      alert('Submission failed');
    }
  };

  return (
    <div className='main'>
      <h1 className='header'>JobHub</h1>
      <div className='dashboard-top-container'>
        <div className='form_box'>
          <form className='inputs' onSubmit={handleSubmit}>
            <p className='job-title'>Job Application Form:</p>
            <input
              type='text'
              value={companyName}
              className='company_name'
              placeholder='Company Name: '
              onChange={handleCompanyChange}
              required
            ></input>
            <input
              type='date'
              id='start'
              name='date_applied'
              value={dateApplied}
              min='2024-01-01'
              max='2028-12-31'
              onChange={handleDateChange}
            />
            <div className='status'>
              <select
                name='status'
                id='status'
                value={appStatus}
                onChange={handleAppStatusChange}
                required
              >
                <option value='' disabled selected hidden>
                  Select App Status...
                </option>
                <option value='Applied'>Applied</option>
                <option value='Intial Interview'>Inital Interview</option>
                <option value='Second Interview'>Second Interview</option>
                <option value='Rejected'>Rejected</option>
                <option value='Have not heard back'>Have not heard Back</option>
                <option value='Other'>Other</option>
              </select>
            </div>
            <input
              type='text'
              className='role'
              placeholder='Role: '
              value={role}
              onChange={handleRoleChange}
            ></input>
            <div className='submitbtn'>
              <button type='submit' className='btn'>
                Submit
              </button>
            </div>
          </form>
          <ApplicationList applications={applications} />
        </div>
        <Sidebar applications={applications} />
      </div>
    </div>
  );
};

export default dashboard;
