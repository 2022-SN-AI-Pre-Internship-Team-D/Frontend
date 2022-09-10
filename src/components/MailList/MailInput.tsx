import 'tailwindcss/tailwind.css';
import { useState } from 'react';

function MailInput() {
  const [test, setTest] = useState('');
  console.log(test);

  return (
    <div className=" text-center bg-[url('images/letterbg.png')] rounded-lg h-fit " style={{ width: '580px' }}>
      <textarea
        placeholder="To..."
        cols={45}
        rows={9}
        maxLength={300}
        className="p-4 rounded-lg bg-transparent text-xl leading-9 focus:outline-none "
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
}
export default MailInput;
