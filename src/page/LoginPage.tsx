import 'tailwindcss/tailwind.css';
import pencilImg from '@images/pencilImage.svg';
import Enter from '@images/Enter.png';

function LoginPage() {
  return (
    <div className="h-screen bg-[#0E1733] flex justify-center flex-col items-center">
      <div style={{ marginLeft: '60px' }} className="flex">
        <h4 className=" text-[#9CA6C5] text-5xl font-press-start text-center pt-20 pb-35">LOGIN</h4>
        <img style={{ position: 'relative', right: '20px', top: '45px' }} src={pencilImg} alt="pencil" />
      </div>

      <div className="w-2/4 h-2/4 m-50 items-center flex-col flex justify-center center p-20 bg-grey rounded-lg">
        <div className=" justify-center flex flex-col w-80">
          <label className=" text-background flex flex-col" htmlFor="email">
            <p className="mb-2">이메일</p>
            <input
              className=" placeholder-[#9CA6C5]  border-4 border-[#677DC6] text-sm font-light drop-shadow-lg mb-3 px-3 py-2.5 rounded-2xl"
              id="email"
              placeholder="email address"
            />
          </label>
          <label className="text-background flex flex-col mt-5 pb-1" htmlFor="password">
            <p className="mb-2">비밀번호</p>
            <input
              className="placeholder-[#9CA6C5] border-4 border-[#677DC6] text-sm font-light drop-shadow-lg mb-3 px-3 py-2.5 rounded-2xl"
              id="password"
              placeholder="password"
            />
          </label>
        </div>

        <div className="flex-row flex relative mt-8  content-center">
          <img style={{ position: 'absolute', top: '-2px', left: '14px', zIndex: '1' }} src={Enter} alt="pencil" />
          <button
            type="button"
            className=" rounded-xl border-none bg-[#677DC6] w-36 mr-4 drop-shadow-lg px-14 pr-4 py-2.5  text-white font-semibold  bg-button-500"
          >
            Login
          </button>
          <img style={{ position: 'absolute', top: '-2px', right: '110px', zIndex: '1' }} src={Enter} alt="pencil" />
          <button
            type="button"
            className="rounded-xl border-none bg-[#677DC6]  w-36 ml-4 drop-shadow-lg px-14 pr-4 py-2.5 text-white font-semibold  bg-button-500"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
