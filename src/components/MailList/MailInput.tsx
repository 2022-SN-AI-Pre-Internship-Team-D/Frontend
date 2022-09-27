import 'tailwindcss/tailwind.css';
import { useState } from 'react';

function MailInput({ content = '' }) {
  const [test, setTest] = useState('');
  console.log(test);

  return (
    <div id='div'>
    <div className=" text-center bg-[url('images/letterbg.png')] rounded-lg h-fit " style={{ width: '580px' }}>
      <textarea
        placeholder=""
        disabled
        cols={45}
        rows={9}
        maxLength={300}
        style={{ resize: 'none' }}
        value={content}
        className="p-4 rounded-lg bg-transparent text-xl leading-9 focus:outline-none "
        onChange={(e) => console.log(e.target.value)}
       />
    </div>
    </div>
  );
}
export default MailInput;
