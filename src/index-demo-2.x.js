import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Demo 2.1
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Sara" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// Demo 2.2
// function Welcome(props) {
//   // props.name += '123';
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// Demo 2.3
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );

// Demo 2.4
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );

// Demo 2.5
class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '未投票',
      total: 0
    };
  }

  handleClick(color) {
    this.setState({
      color
    });
    this.setState((prevState) => ({
      total: prevState.total + 1
    }));
  }

  render() {
    return (
      <div>
        <h1>当前投票：{this.state.color}，投票总计：{this.state.total}</h1>
        <div>
          <button onClick={e => this.handleClick('红队')}>红队</button>
          <button onClick={this.handleClick.bind(this, '绿队')}>绿队</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Box />,
  document.getElementById('root')
);

registerServiceWorker();
