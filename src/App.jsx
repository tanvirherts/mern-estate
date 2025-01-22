import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import SigIn from './pages/SigIn';

export default function App() {
  return (<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/sign-in" element={<SignIn />}></Route>
    <Route path="/" element={<Home />}></Route>
    <Route path="/" element={<Home />}></Route>
    <Route path="/" element={<Home />}></Route>
  </Routes>
  </BrowserRouter>);
}
