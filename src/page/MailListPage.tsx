import EachMail from 'components/MailList/EachMail';
import 'tailwindcss/tailwind.css';
import ColorSystem from 'utils/ColorSystem';

function MailListPage() {
  return (
    <div
      className="flex justify-center items-center flex-col"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      <EachMail />
      <EachMail />
      <EachMail />
    </div>
  );
}
export default MailListPage;
