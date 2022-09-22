import 'tailwindcss/tailwind.css';
import userprofile from 'images/userprofile.png';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import profile from 'images/profile.png';
import { getUUID } from 'utils/getUUID';
import { getToken, setToken, decodeAccessToken } from 'utils/tokenManager';
import { setUUID } from 'redux/userID';
import { useDispatch } from 'react-redux';

function MyPage() {
  // getUUID.uuid 이렇게 하니까 오류
  const [mailCount, setMailCount] = useState('0');

  useEffect(() => {
    (async () => {
      await axios
        .get(`letters/users/e2eeebd7-9870-485b-a3af-668404854653/events/7c97bce0-27d5-413e-b30c-a37ee9216f87/counts`)
        .then((res) => {
          setMailCount(res.data[0].count);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);

  const [birth, setBirth] = useState('');
  const [image, setImage] = useState(profile);

  useEffect(() => {
    (async () => {
      await axios
        .get('/users/b011a978-5f13-4112-bad5-73ffb687f62d/get-profile/')
        .then((res) => {
          setBirth(res.data.birth);
          setImage(res.data.image);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
    
  }, []);
  
  // 이미지 url 변환
  const [imageUrl, setImageUrl] = useState(profile) 
  const imgRef: any = useRef();
  const reader: any = new FileReader();
  const file = imgRef.image;
  // reader.readAsDataURL(file);
  // reader.onloadend = () => {
  //   setImageUrl(reader.result);
  //   console.log("이미지주소", reader.result);
  // }

  

  return (
    <div className=" pt-20 bg-[#0E1733] flex justify-center h-screen items-center">
      <div className=" text-white border-solid border-2 rounded-lg w-4/6 h-4/5 flex flex-col items-center justify-center">
        <img
          style={{ position: 'absolute', top: '10px' }}
          className="scale-75 object-fit:cover text-white border-2 rounded-full"
          src={image}
          alt="유저사진"
        />

        <div className="mb-10 pt-14 text-2xl font-mypage-font flex justify-center">EllieKim010707</div>

        <div className="flex flex-col justify-center items-center">
          <h2 className="font-press-start mb-5 text-3xl">Your Anniversary</h2>
          <ul className="list-disc">
            <li>Birthday [{birth}]</li>
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
