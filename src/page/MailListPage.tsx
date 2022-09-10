import EachMail from 'components/MailList/EachMail';
import 'tailwindcss/tailwind.css';
import ColorSystem from 'utils/ColorSystem';

function MailListPage() {
  return (
    <div
      className="flex justify-center items-center flex-col"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      <span className="text-white m-14 text-2xl">총 n개의 편지를 받았습니다.</span>
      <EachMail />
      <EachMail />
      <EachMail />
    </div>
  );
}
export default MailListPage;
