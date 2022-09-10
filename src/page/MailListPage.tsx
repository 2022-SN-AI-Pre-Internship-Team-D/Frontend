import MailInput from 'components/MailList/MailInput';
import 'tailwindcss/tailwind.css';
import ColorSystem from 'utils/ColorSystem';

function MailListPage() {
  return (
    <div className="flex justify-center h-screen" style={{ backgroundColor: ColorSystem.MainColor.Primary }}>
      <MailInput />
    </div>
  );
}
export default MailListPage;
