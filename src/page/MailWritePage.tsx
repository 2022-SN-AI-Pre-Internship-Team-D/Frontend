import 'tailwindcss/tailwind.css';
import React, { useState } from 'react';
import ColorSystem from 'utils/ColorSystem';
import MailInput from 'components/MailList/MailInput';
import postcard from '../images/postcard.png';

function MailWritePage() {
  const onChangeImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      console.log(event);
    } catch (err) {
      console.log(err);
    }
  };

  const hiddenFileInput = React.useRef<any | null>(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event: any) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file

  return (
    <div
      className="flex justify-center items-center h-screen py-20 flex-col"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      <div
        className="rounded-xl flex flex-col items-center bg-white p-4 md:w-1/6"
        style={{ height: '43rem', width: '38rem' }}
      >
        <div>
          <button type="button" onClick={handleClick} className="m-10 mt-5 w-96 h-48 rounded-xl bg-subBackground">
            +<input ref={hiddenFileInput} type="file" hidden onChange={(e) => onChangeImage(e)} className="" />
          </button>
        </div>
        <div className=" text-center bg-[url('images/letterbg.png')] rounded-lg h-fit " style={{ width: '580px' }}>
          <textarea
            placeholder="To.."
            cols={45}
            rows={9}
            maxLength={300}
            className="p-4 rounded-lg bg-transparent text-xl leading-9 focus:outline-none "
          />
        </div>
      </div>
      <button type="button" className=" bg-white px-10 py-2 mt-5 rounded-full border-4 border-subBackground">
        {' '}
        전송
      </button>
    </div>
  );
}
export default MailWritePage;
