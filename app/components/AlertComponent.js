// import { Alert } from 'react-bootstrap';
// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

// const AlertComponent = ({ quote, variant }) => {
//   const [show, setShow] = useState(false);

//   // On componentDidMount set the timer
//   useEffect(() => {
//     const timeId = setTimeout(() => {
//       // After 3 seconds set the show value to false
//       setShow(false);
//     }, 5000);

//     return () => {
//       clearTimeout(timeId);
//     };
//   }, []);

//   // If show is false the component will return null and stop here
//   if (!show) {
//     return null;
//   }

//   // If show is true this will be returned
//   return <Alert variant={variant}>{quote} added to list!</Alert>;
// };

// AlertComponent.defaultPros = {
//   variant: 'info',
// };

// AlertComponent.propTypes = {
//   quote: PropTypes.string,
//   variant: PropTypes.string,
// };

// export default AlertComponent;
