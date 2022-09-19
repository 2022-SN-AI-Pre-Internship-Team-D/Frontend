import 'tailwindcss/tailwind.css';
import userprofile from 'images/userprofile.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MyPage() {
  const [mailCount, setMailCount] = useState('0');
  useEffect(() => {
    (async () => {
      await axios
        .get(`letters/users/64a00ada-ffa3-4607-b282-dee397e93d57/events/75c5abfd-7b8f-448e-ba9c-caf780218f04/counts`)
        .then((res) => {
          setMailCount(res.data[0].count);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);

  return (
    <div className=" pt-20 bg-[#0E1733] flex justify-center h-screen items-center">
      <div className=" text-white border-solid border-2 rounded-lg w-4/6 h-4/5 flex flex-col items-center justify-center">
        <img
          style={{ position: 'absolute', top: '10px' }}
          className="scale-75 object-fit:cover text-white border-2 rounded-full"
          src={userprofile}
          alt="유저사진"
        />

        <div className="mb-10 pt-14 text-2xl font-mypage-font flex justify-center">EllieKim010707</div>

        <div className="flex flex-col justify-center items-center">
          <h2 className="font-press-start mb-5 text-3xl">Your Anniversary</h2>
          <ul className="list-disc">
            <li>Birthday [2001 - 07 - 07]</li>
            <li>Birthday [2001 - 03 - 02]</li>
          </ul>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h2 className="font-press-start mt-20 mb-5 text-3xl">Letters</h2>
          <ul className="list-disc flex flex-col justify-center items-center">
            <li>Birthday [{mailCount}]</li>
            <li className="mb-10">Christmas [{mailCount}]</li>
          </ul>
        </div>

        <button type="button" className="font-press-start mt-10">
          Account Settings
        </button>
      </div>
    </div>
  );
}

export default MyPage;
