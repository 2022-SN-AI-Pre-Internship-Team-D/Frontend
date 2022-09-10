import MailInput from 'components/MailList/MailInput';
import 'tailwindcss/tailwind.css';
import cookie from '../../images/cookieimg.png';
import postcard from '../../images/postcard.png';

function EachMail() {
  return (
    <div
      className="m-20 rounded-xl items-center flex flex-col-reverse bg-white p-4 "
      style={{ height: '43rem', width: '38rem' }}
    >
      <MailInput />
      <img src={cookie} alt="sa" className="py-10" />
      <img src={postcard} alt="sa" className="top-0 mb-7 w-32" />
    </div>
  );
}
export default EachMail;
