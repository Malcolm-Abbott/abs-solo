import { Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { NewHome } from './Pages/NewHome';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<NewHome />} />
      </Route>
    </Routes>
  );
}
