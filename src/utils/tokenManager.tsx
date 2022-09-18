import jwtDecode from 'jwt-decode';
import axios from 'axios';

interface jwtType {
  token_type: string;
  exp: number;
  iat: number;
  jti: string;
  user_id: number;
  user_uuid: string;
}

// 👉 액세스, 리프레쉬 토큰 체크 함수
const checkAccessToken = async ({ Token = '' }) => {
  await axios
    .post(`/users/token/verify/`, { token: { Token } })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => console.log(error, 'error'));
};

// 👉 로그인 axios 과정에서 이거 사용하면 될 듯
const decodeAccessToken = ({ accessToken = '' }) => {
  const decoded = jwtDecode<jwtType>(accessToken);
  console.log(decoded.user_uuid);
  // 여기서 uuid 전역관리 고고
};

// 로컬 스토리지에 있는 토큰을 확인
const getToken = () => {
  const access = localStorage.getItem('access_token');
  const refresh = localStorage.getItem('refresh_token');

  return { access, refresh };
};

// // 로컬 스토리지에 있는 토큰을 clear
// const deleteToken = (clearToken: string) => {
//   localStorage.removeItem(clearToken);
//   window.location.replace("/mainpage");
// };

export { checkAccessToken, decodeAccessToken, getToken };
