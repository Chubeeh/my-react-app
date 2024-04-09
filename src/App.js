import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1 >
      Weather Forecast
     </h1>
     <Weather defaultCity="New zealand"/>
     <p>This was coded by <a href ="https://my-react-app-six-puce.vercel.app/" target='blank'>Ella Ameh</a>, open-sourced on <a href ="https://github.com/Chubeeh/my-react-app" 
     target='blank'>Github</a> and hosted on <a href='https://my-react-app-six-puce.vercel.app/' target='blank'>Vercel</a></p>
    </div>
    </div>
  
  );
}

export default App;
