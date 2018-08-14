import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// Demo 1.1
// const name = 'Josh Perez';
// const element = <h1>Hello, {name}</h1>;

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// Demo 1.2
// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// Demo 1.3
// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };
// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }
// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }
// ReactDOM.render(
//   getGreeting(user),
//   document.getElementById('root')
// );

// Demo 1.4
// const element = <div tabIndex="0">0</div>;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// Demo 1.5
// const title = '123</br>456';
// // This is safe:
// const element = <h1>{title}</h1>;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// Demo 1.6
// const element = (
//   <h1 className="greeting hi">
//     Hello, world!
//   </h1>
// );
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// Demo 1.6
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

registerServiceWorker();
