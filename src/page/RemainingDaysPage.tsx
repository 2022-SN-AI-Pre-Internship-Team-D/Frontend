import 'tailwindcss/tailwind.css';
import ColorSystem from 'utils/ColorSystem';
import FooterCookies from 'components/RemainingDays/FooterCookies';

function RemainingDaysPage() {
  return (
    <div className="flex justify-center h-screen" style={{ backgroundColor: ColorSystem.MainColor.Primary }}>
      <div className="flex justify-center flex-col items-center">
        <p className="text-white text-4xl mb-3">30 days left</p>
        <p className="text-slate-300">n개의 편지가 당신을 기다리고 있습니다.</p>
        <img src="images/back3.png" alt="a" className="w-60 md:w-80 lg:96" />
      </div>

      {/* 집 */}
      <img src="images/back2.png" alt="a" className="absolute bottom-0 left-0 w-60 md:w-80 lg:w-2/6" />
      {/* 유령 */}

      {/* 나무 */}
      <img src="images/back1.png" alt="a" className="absolute bottom-0 right-0 w-80 md:w-96 lg:w-5/12" />
      <FooterCookies />
    </div>
  );
}

export default RemainingDaysPage;
