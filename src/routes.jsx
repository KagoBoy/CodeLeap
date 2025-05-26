import {Routes, Route} from 'react-router-dom';
import Signup from './pages/signup.jsx'
import MainScreen from './pages/mainScreen.jsx'

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/main" element={<MainScreen />} />
    </Routes>
  );
}

export default RoutesApp;