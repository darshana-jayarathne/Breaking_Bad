import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

//pages
import Home from './pages/Home';
import Character from './pages/Character';

function App() {
   
  return (
    <div className="container">
      <BrowserRouter>
         
        <div>
          <Routes>
             <Route
              path="/"
              element={ <Home/>}
            />
            <Route
              path="/character/:id"
              element={<Character/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
