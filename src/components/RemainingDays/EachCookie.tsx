import React, { useState, useEffect } from 'react';

function EachCookie({ setting = '' }) {
  const [updown, setUpdown] = useState(false);

  useEffect(() => {
    if (setting === 'up') {
      setUpdown(true);
    }
  }, []);

  return (
    <img
      src="images/cookieimg.png"
      alt="a"
      className={`${
        setting ? 'w-20 md:w-28 lg:w-2/6  mb-5 md:mb-7 lg:mb-10' : 'w-20 md:w-28 lg:w-2/6 mt-5 md:mt-7 lg:mt-10'
      }`}
    />
  );
}

export default EachCookie;
