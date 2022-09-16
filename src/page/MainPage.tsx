import 'tailwindcss/tailwind.css';
import ColorSystem from 'utils/ColorSystem';
import React, { useState } from 'react';
import 'utils/pageStyle.css';
import ResultModal from 'components/ResultModal';

function MainPage() {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.target);
  };

  // ⭕️
  const handleModal = () => {
    setModalOC(true);
  };

  const [modalOC, setModalOC] = useState(false);
  // ⭕️

  return (
    <div
      className="flex justify-center font-press-start  h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      {/* 2023 */}
      <button onClick={handleClick} className="scaleup flex justify-center h-fit w-60 md:w-80 lg:w-2/6" type="button">
        <a href="/maillistpage">
          <img src="images/newyearimg.png" alt="a" className="" />
        </a>
      </button>

      <div className="absolute top-5 left-10">
        <span className="flex justify-center text-white font-bold text-xl">ellie010707 님</span>
      </div>
      {/* 편지 */}
      <div className="flex flex-col absolute top-5 left-5 md:m-10 w-20 md:w-28 lg:w-1/12 ">
        <button type="button" className="scaleup">
          <a href="/mailwritepage">
            <img src="images/letterimg.png" alt="a" />
          </a>
        </button>
      </div>
      {/* 추석 */}
      <button onClick={handleClick} className="scaleup absolute bottom-0 left-0 w-60 md:w-80 lg:w-2/6" type="button">
        <img src="images/thankimg.png" alt="a" />
      </button>
      {/* 나무 */}
      <button onClick={handleClick} className="" type="button">
        <img
          src="images/treeimg.png"
          alt="a"
          className="scaleup absolute bottom-0 right-0 m-1 md:m-3  w-60 md:w-80 lg:w-2/6 "
        />
      </button>
      {/* 호박 선물 */}
      <div className="flex flex-row absolute bottom-0 right-0 w-60 md:w-80 lg:w-2/5 ">
        <button className="scaleup" type="button">
          <a href="/mailwritepage">
            <img src="images/halloweenimg.png" alt="a" className="origin-center hover:origin-top" />
          </a>
        </button>
        <button onClick={handleClick} className="scaleup" type="button">
          <a href="/remainingdayspage">
            <img src="images/valentineimg.png" alt="a" />
          </a>
        </button>
      </div>
      {/* ⭕️ */}
      <ResultModal openinit={modalOC} closeModal={() => setModalOC(false)} />
      {/* ⭕️ */}
    </div>
  );
}

export default MainPage;
