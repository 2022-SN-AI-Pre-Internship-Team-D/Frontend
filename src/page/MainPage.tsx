import 'tailwindcss/tailwind.css';
import ColorSystem from 'utils/ColorSystem';

function MainPage() {
  return (
    <div
      className="flex justify-center font-press-start  h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      {/* 2023 */}
      <button className="flex justify-center h-fit  w-60 md:w-80 lg:w-2/6" type="button">
        <img src="images/newyearimg.png" alt="a" className="" />
      </button>

      <div className="absolute top-5 left-10">
        <span className="flex justify-center text-white font-bold text-xl">ellie010707 님</span>
      </div>
      {/* 편지 */}
      <div className="flex flex-col absolute top-5 left-5 md:m-10 w-20 md:w-28 lg:w-1/12 ">
        <button type="button">
          <img src="images/letterimg.png" alt="a" className="" />
        </button>
      </div>
      {/* 추석 */}
      <button className="absolute bottom-0 left-0 w-60 md:w-80 lg:w-2/6" type="button">
        <img src="images/thankimg.png" alt="a" className=" " />
      </button>
      {/* 나무 */}
      <button className="" type="button">
        <img
          src="images/treeimg.png"
          alt="a"
          className="absolute bottom-0 right-0 m-1 md:m-3  w-60 md:w-80 lg:w-2/6 "
        />
      </button>
      {/* 호박 선물 */}
      <div className="flex flex-row absolute bottom-0 right-0 w-60 md:w-80 lg:w-2/5 ">
        <button className=" " type="button">
          <img src="images/halloweenimg.png" alt="a" className="" />
        </button>
        <button className="" type="button">
          <img src="images/valentineimg.png" alt="a" className="" />
        </button>
      </div>
    </div>
  );
}

export default MainPage;
