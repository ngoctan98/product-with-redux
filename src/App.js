import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './Components/Homepage';
import TabPage from './Components/Tabpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />}/>
        <Route path="/tab" element={<TabPage />}/>
        
      </Routes>
        
    </BrowserRouter>
    
  );
}

export default App;
