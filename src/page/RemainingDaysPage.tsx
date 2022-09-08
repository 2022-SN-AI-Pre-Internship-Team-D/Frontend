import 'tailwindcss/tailwind.css';
import ColorSystem from 'utils/ColorSystem';
import FooterCookies from 'components/RemainingDays/FooterCookies';

function RemainingDaysPage() {
  return (
    <div
      className="flex justify-center font-press-start  h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      D-Day page
      <FooterCookies />
    </div>
  );
}

export default RemainingDaysPage;
