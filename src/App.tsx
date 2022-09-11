import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from 'page/LoginPage';
import SigninPage from 'page/SigninPage';
import MainPage from './page/MainPage';
import MailListPage from 'page/MailListPage';
import RemainingDaysPage from './page/RemainingDaysPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/" element={<MainPage />} />
        <Route path="/remainingdayspage" element={<RemainingDaysPage />} />
        <Route path="/maillistpage" element={<MailListPage />} />
        <Route path="/signin" element={<SigninPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
