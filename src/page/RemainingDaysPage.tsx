import 'tailwindcss/tailwind.css';
import ColorSystem from 'utils/ColorSystem';
import FooterCookies from 'components/RemainingDays/FooterCookies';
import axios from 'axios';
import { useEffect, useState } from 'react';

function RemainingDaysPage() {
  const [dDay, setDDayCount] = useState('0');
  const [mailCount, setMailCount] = useState('0');


  useEffect(() => {
    (async () => {
        // 기본이벤트 남은 디데이
      await axios
        .get('/letters/events/357b7c5e-eaea-417e-8fa0-d4b2610fca07/check-date')
        .then((res) => {
          setDDayCount(res.data.days);
        })
        .catch((error) => {
          console.log(error);
        });
    })();

    (async () => {
      // 기본이벤트에 받은 편지 개수
    await axios
      .get('/letters/users/9f8633a7-4f7f-4540-b197-d6aae6982f53/events/357b7c5e-eaea-417e-8fa0-d4b2610fca07/counts')
      .then((res) => {
        setMailCount(res.data[0].count);
      })
      .catch((error) => {
        console.log(error);
      });
  })();


  }, []);

  return (
    <div className="flex justify-center h-screen" style={{ backgroundColor: ColorSystem.MainColor.Primary }}>
      <div className="flex justify-center flex-col items-center">
        <p className="text-white text-4xl mb-3">{dDay}days left</p>
        <p className="text-slate-300">{mailCount}개의 편지가 당신을 기다리고 있습니다.</p>
        <img src="images/back3.png" alt="a" className="w-60 md:w-80 lg:96" />
      </div>

      {/* 집 */}
      <img src="images/back2.png" alt="a" className="absolute bottom-0 left-0 w-60 md:w-80 lg:w-2/6" />

      {/* 나무 */}
      <img src="images/back1.png" alt="a" className="absolute bottom-0 right-0 w-80 md:w-96 lg:w-5/12" />
      <FooterCookies />
    </div>
  );
}

export default RemainingDaysPage;
function then(arg0: (res: any) => void) {
  throw new Error('Function not implemented.');
}

