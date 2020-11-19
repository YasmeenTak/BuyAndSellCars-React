import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/HomePage/Home';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App;
