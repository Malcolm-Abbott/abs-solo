import { Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { NewHome } from './Pages/NewHome';
import { useState } from 'react';
import { Menu } from './Pages/Menu';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={<NavBar isOpen={isOpen} setIsOpen={setIsOpen} />}>
        <Route
          index
          element={
            isOpen ? (
              <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
            ) : (
              <NewHome />
            )
          }
        />
      </Route>
    </Routes>
  );
}
