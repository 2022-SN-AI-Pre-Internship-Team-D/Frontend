import MailInput from 'components/MailList/MailInput';
import 'tailwindcss/tailwind.css';
import html2canvas from 'html2canvas';

import postcard from 'images/postcard.png';
import shareimg from 'images/shareimg.png';
import AudioPlayer from 'components/Audio/audioPlayer';

function EachMail({ content = '', imgfile = '', audiofile = '' }) {
  const opts = {
    // logging: true,
    // allowTaint: true,
    useCORS: true
  };
  const onCapture = () => {
    console.log('onCapture');
    html2canvas(document.getElementById('div') as HTMLElement, opts)
      .then(canvas=> {
        onSavaAs(canvas.toDataURL('image/png'), 'image-download.png')
      });
  }

  const onSavaAs = (url: string, filename: string) => {
    console.log('onSaveAs');
    const link = document.createElement('a');
    document.body.appendChild(link);
    link.href = url;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  }

  const img = imgfile;

  // const timestamp = new Date().getTime();
  // const imageWithTimestamp = imgfile.includes('?') ? `${imgfile}&v=${timestamp}` : `${imgfile}?v=${timestamp}`;

  return (
    <div id='div'>
      <div
        className="relative m-20 rounded-xl items-center flex flex-col-reverse bg-white p-4 "
        style={{ height: '43rem', width: '38rem' }}
      >
        <div className="absolute top-0 right-0 w-10 m-5">
          <button type="button" 
          onClick={onCapture}
          // onClick={() => alert('공유버튼')}
          >
            <img src={shareimg} alt="share" />
          </button>
        </div>
        <MailInput content={content} />
        <AudioPlayer recordUrl={audiofile} />
        {/* 편지 작성 할 때 이미지 미 삽입 시 쿠키 이미지 들어감 */}
        <img 
        src={img} 
        alt="sa" 
        // crossOrigin="anonymous"
        className="object-cover w-84 h-48 mb-5 rounded-xl" 
        />

        <img src={postcard} alt="sa" className="top-0 mb-5 w-24" />
      </div>
    </div>
  );
}
export default EachMail;
