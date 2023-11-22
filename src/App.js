// import React, { useEffect } from 'react';

// const App = () => {

//   const getCookie = (cname) => {
//     const name = cname + '=';
//     const decodedCookie = decodeURIComponent(document.cookie);
//     const ca = decodedCookie.split(';');
//     for (let i = 0; i < ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) === ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) === 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return '';
//   };

//   useEffect(() => {

//     const generateUniqueId = () => {
//       return 'user_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
//     };


//     const setCookie = (cname, cvalue, exdays) => {
//       const d = new Date();
//       d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//       const expires = 'expires=' + d.toUTCString();
//       document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
//     };


//     const userId = getCookie('userId');

//     if (!userId) {

//       const newUserId = generateUniqueId();
//       setCookie('userId', newUserId, 365); // Store the identifier for 365 days
//     }

//     console.log('User ID:', userId);
//   }, []);

//   return (
//     <div>

//     </div>
//   );
// };

// export default App;


import React from 'react'
// import DeviceInfo from './components/User'
import SecurityComponent from './components/cripto'

const App = () => {
  return (
    <div>
      {/* <DeviceInfo /> */}
      {/* <SecurityComponent /> */}
      <SecurityComponent />
    </div>
  )
}

export default App

