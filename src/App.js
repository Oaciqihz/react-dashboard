import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import { HomeLayout } from './components/HomeLayout';
import { ProtectedLayout } from './components/ProtectedLayout';
import HomePage from './views/Home';
import LoginPage from './views/Login';
import ProfilePage from './views/Profile';
import SettingsPage from './views/Settings';
import AuthGuard from './components/AuthGuard';
import TutorialsPage from './views/Tutorials';

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    
      <Route 
        path="/dashboard" 
        element={
          <AuthGuard>
            <ProtectedLayout/>
          </AuthGuard>
        }
      >
        <Route 
          path="profile" 
          element={<ProfilePage />} 
        />
        <Route 
          path="settings" 
          element={<SettingsPage />} 
        />
        <Route 
          path="tutorials" 
          element={<TutorialsPage />} 
        />
      </Route>
    </Routes>
  );
}

export default App;
