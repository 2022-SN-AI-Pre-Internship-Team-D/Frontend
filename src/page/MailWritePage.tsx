import 'tailwindcss/tailwind.css';
import React, { useState } from 'react';
import ColorSystem from 'utils/ColorSystem';
import postcard from 'images/postcard.png';

interface WriteInfo {
  text: FormDataEntryValue | null;
  file: FormDataEntryValue | null;
  // media: FormDataEntryValue | null;
}

function MailWritePage() {
  const handleWrite = (e: React.FormEvent<HTMLFormElement>) => {
    const data = new FormData(e.currentTarget);
    const MailInfo: WriteInfo = {
      text: data.get('file'),
      file: data.get('text'),
      //  media: data.get(''),
    };
    console.log(MailInfo);
  };

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
      <form
        className="rounded-xl flex flex-col items-center bg-white p-4 md:w-1/6"
        onSubmit={handleWrite}
        style={{ height: '40rem', width: '38rem' }}
      >
        <img src={postcard} alt="postcard" className="w-24" />
        <div>
          <button type="button" onClick={handleClick} className="m-10 mt-5 w-96 h-48 rounded-xl bg-subBackground">
            +
            <input
              name="file"
              ref={hiddenFileInput}
              type="file"
              hidden
              onChange={(e) => onChangeImage(e)}
              className=""
            />
          </button>
        </div>
        <div
          className=" text-center bg-[url('images/letterbg.png')] rounded-lg h-fit "
          style={{ width: '580px', height: '20rem' }}
        >
          <textarea
            name="text"
            placeholder="To.."
            cols={45}
            rows={6}
            maxLength={300}
            className="p-4 h-56 rounded-lg bg-transparent text-xl leading-9 focus:outline-none "
            style={{ width: '530px', resize: 'none' }}
          />
        </div>
        <button type="submit" className=" bg-white px-10 py-2 mt-5 rounded-full border-4 border-subBackground">
          {' '}
          전송
        </button>
      </form>
    </div>
  );
}
export default MailWritePage;
