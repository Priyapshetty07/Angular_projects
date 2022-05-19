import logo from './logo.svg';
import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import UserPage from './pages/UserPage';

import HeaderLayout from './layout/HeaderLayout';
import FooterLayout from './layout/FooterLayout';
import MainLayout from './layout/MainLayout';

export default function App() {
  return (
    <div className="App">
      <HeaderLayout></HeaderLayout>
      <br></br>

      <MainLayout></MainLayout>
      <FooterLayout></FooterLayout>
    </div>
  );
}


