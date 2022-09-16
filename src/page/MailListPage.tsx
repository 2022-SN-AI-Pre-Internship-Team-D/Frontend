import axios from 'axios';
import EachMail from 'components/MailList/EachMail';
import 'tailwindcss/tailwind.css';
import ColorSystem from 'utils/ColorSystem';
import { useState, useEffect } from 'react';

function MailListPage() {
  const [mailList, setMailList] = useState([]); // <any[]>
  const [page, setPage] = useState(1);
  const [mailCount, setMailCount] = useState('0');

  const changeBeforePage = () => {
    window.scrollTo(0, 0);
    return setPage(page - 1);
  };
  const changeFrontPage = () => {
    window.scrollTo(0, 0);
    return setPage(page + 1);
  };

  useEffect(() => {
    (async () => {
      await axios
        .get(`letters/users/ce23c44db01743d0bde411e8f3b4fbac/birth/all/pages/${page}`)
        .then((res) => {
          setMailList(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    })();

    (async () => {
      await axios
        .get(`letters/users/ce23c44db01743d0bde411e8f3b4fbac/birth/counts`)
        .then((res) => {
          setMailCount(res.data[0].count);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, [page]);

  return (
    <div
      className="flex justify-center items-center flex-col"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      <span className="text-white m-14 text-2xl">총 {mailCount}개의 편지를 받았습니다.</span>

      {Object.values(mailList)?.map((item: any) => (
        <EachMail content={item.text} key={item.id} />
      ))}
      <div className="flex flex-row mb-8">
        <button type="button" className="m-2 bg-white rounded-full p-1" onClick={changeBeforePage}>
          이전
        </button>

        <button type="button" className="m-2 bg-white rounded-full p-1" onClick={changeFrontPage}>
          다음
        </button>
      </div>
    </div>
  );
}
export default MailListPage;
