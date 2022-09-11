import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from 'page/LoginPage';
import MailListPage from 'page/MailListPage';
import MailWritePage from 'page/MailWritePage';
import SigninPage from 'page/SigninPage';
import MyPage from  'page/Mypage';
import MainPage from './page/MainPage';
import RemainingDaysPage from './page/RemainingDaysPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/remainingdayspage" element={<RemainingDaysPage />} />
        <Route path="/maillistpage" element={<MailListPage />} />
        <Route path="/mailwritepage" element={<MailWritePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/mypage" element={<MyPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
