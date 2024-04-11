import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
        <h1 className='heading'>
      Today's Weather Forecast
     </h1>
     <Weather defaultCity="Angola"/> 
    
    <footer>
     <p className='last-text'>This project was coded by <a href ="https://my-react-app-six-puce.vercel.app/" target='blank'>Ella Ameh</a>, open-sourced on <a href ="https://github.com/Chubeeh/my-react-app" 
     target='blank'>Github</a> and hosted on <a href='https://my-react-app-six-puce.vercel.app/' target='blank'>Vercel</a></p>
     </footer>
  </div>
  );
}

export default App;
