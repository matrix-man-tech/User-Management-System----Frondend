import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navigation/Navbar';
import Login from './components/Users/Login/Login';
import Register from './components/Users/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from './components/Error/Error';
import Profile from './components/Users/ProfileComponent/Profile';
import UpdateProfileForm from './components/Users/ProfileComponent/UpdateProfileForm';
import ProtectedRoute from './components/Navigation/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/profile/:id"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/update-profile/:id"
          element={
            <ProtectedRoute>
              <UpdateProfileForm />
            </ProtectedRoute>
          }
        />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
