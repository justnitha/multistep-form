import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import MultiStepForm from './pages/MultiStepForm';


function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<MultiStepForm/>}/>
    </Routes>
  </Router>
  );
}

export default App;
