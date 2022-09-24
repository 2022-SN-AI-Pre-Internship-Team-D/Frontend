import MailInput from 'components/MailList/MailInput';
import 'tailwindcss/tailwind.css';
import cookie from 'images/cookieimg.png';
import postcard from 'images/postcard.png';
import shareimg from 'images/shareimg.png';

function EachMail({ content = '' , imgfile = cookie}) {
  return (
    <div
      className="relative m-20 rounded-xl items-center flex flex-col-reverse bg-white p-4 "
      style={{ height: '43rem', width: '38rem' }}
    >
      <div className="absolute top-0 right-0 w-10 m-5">
        <button type="button" onClick={() => alert('공유버튼')}>
          <img src={shareimg} alt="share" />
        </button>
      </div>
      <MailInput content={content} />
      {/* 편지 작성 할 때 이미지 미 삽입 시 쿠키 이미지 들어감 */}
      <img src={imgfile} alt="sa" className="object-cover w-96 h-48 mb-10 rounded-xl" />
      <img src={postcard} alt="sa" className="top-0 mb-7 w-32" />
    </div>
  );
}
export default EachMail;
