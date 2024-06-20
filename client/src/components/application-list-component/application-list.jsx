import React from 'react';
import ApplicationCard from '../application-card-component/application-card';

const ApplicationList = ({ applications }) => {
  return (
    <div className='application-list' id='application_list'>
      {applications.map((application, index) => (
        <ApplicationCard
          key={index}
          companyName={application.companyName}
          dateApplied={application.dateApplied}
          appStatus={application.appStatus}
          role={application.role}
          // notes={application.notes}
        />
      ))}
    </div>
  );
};

export default ApplicationList;
