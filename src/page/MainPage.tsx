import 'tailwindcss/tailwind.css';
import ColorSystem from 'utils/ColorSystem';

function MainPage() {
  return (
    <div
      className="flex justify-center font-press-start  h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      <button className="flex justify-center h-fit  w-60 md:w-80 lg:w-2/6" type="button">
        <img src="images/newyearimg.png" alt="a" className="" />
      </button>

      <div className="flex flex-col absolute bottom-0 left-0">
        <button className=" static" type="button">
          <img src="images/letterimg.png" alt="a" className="w-36" />
        </button>

        <button className="static" type="button">
          <img src="images/thankimg.png" alt="a" className="w-36" />
        </button>
      </div>

      <button className="" type="button">
        <img
          src="images/treeimg.png"
          alt="a"
          className="absolute bottom-0 right-0 m-1 md:m-3  w-60 md:w-80 lg:w-2/6 "
        />
      </button>

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
