import 'tailwindcss/tailwind.css';
import userprofile from 'images/userprofile.png';

function MyPage() {
  return (
    <div className=" pt-20 bg-[#0E1733] flex justify-center h-[60rem] items-center">
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
            <li>Birthday [70]</li>
            <li className="mb-10">Christmas [327]</li>
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
