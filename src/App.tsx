import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from 'page/LoginPage';
import MainPage from 'page/MainPage';
import RemainingDaysPage from 'page/RemainingDaysPage';
import MyPage from  'page/Mypage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/" element={<MainPage />} />
        <Route path="/remainingdayspage" element={<RemainingDaysPage />} />
        <Route path="/mypage" element={<MyPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
