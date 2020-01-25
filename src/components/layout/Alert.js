import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type} p-1 ml-3`}>
        <FontAwesomeIcon icon='info-circle' />
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
