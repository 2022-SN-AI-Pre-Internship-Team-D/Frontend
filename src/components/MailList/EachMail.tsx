import MailInput from 'components/MailList/MailInput';
import 'tailwindcss/tailwind.css';

import postcard from 'images/postcard.png';
import shareimg from 'images/shareimg.png';
import AudioPlayer from 'components/Audio/audioPlayer';

function EachMail({ content = '', imgfile = '', audiofile = '' }) {
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
      <AudioPlayer recordUrl={audiofile} />
      {/* 편지 작성 할 때 이미지 미 삽입 시 쿠키 이미지 들어감 */}
      <img src={imgfile} alt="sa" className="object-cover w-84 h-48 mb-5 rounded-xl" />

      <img src={postcard} alt="sa" className="top-0 mb-5 w-24" />
    </div>
  );
}
export default EachMail;
