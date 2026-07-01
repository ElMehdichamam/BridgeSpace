import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Thread from './pages/Thread';
import Project from './pages/Project';
import Profile from './pages/Profile.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/threads" element={<Thread />} />
      <Route path="/Profile" element={<Profile/>}/>
    </Routes>
  );
}

export default App
