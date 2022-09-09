import React, { useState, useEffect } from 'react';
import 'utils/pageStyle.css';
import styled, { keyframes } from 'styled-components';

function EachCookie({ setting = '' }) {
  const [updown, setUpdown] = useState(false);

  useEffect(() => {
    if (setting === 'up') {
      setUpdown(true);
    }
  }, []);

  return (
    <Cookie
      src="images/cookieimg.png"
      alt="asdf"
      className={`${
        updown ? ' w-20 md:w-28 lg:w-2/6 mb-5 md:mb-7 lg:mb-10' : ' w-20 md:w-28 lg:w-2/6 mt-5 md:mt-7 lg:mt-10'
      }`}
    />
  );
}

const boxFade = keyframes`
  0% {
    opacity: 1;
    top: 20px;
 
  }
  50% {
    opacity: 0;
    top: 400px;
  }
  100% {
    opacity: 1;
    top: 20px;
  }
`;
const Cookie = styled.img`
  animation: ${boxFade} 3s 1s infinite linear alternate;
`;

export default EachCookie;