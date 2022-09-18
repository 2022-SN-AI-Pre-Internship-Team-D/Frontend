import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { useState } from 'react';

interface jwtType {
  token_type: string;
  exp: number;
  iat: number;
  jti: string;
  user_id: number;
  user_uuid: string;
}

interface TokenInfo {
  token: string;
}

// 👉 액세스, 리프레쉬 토큰 체크 함수
const checkAccessToken = async (Token: string) => {
  const tokenForm: TokenInfo = {
    token: Token,
  };

  await axios
    .post(`/users/token/verify/`, tokenForm)
    .then((res) => {
      if (res.status === 200) {
        console.log('토큰 아직 유효함');
      }
    })
    .catch((error) => {
      if (error.response.status) {
        console.log('만료된거');
        localStorage.removeItem('access_token');
      } else {
        console.log(error);
      }
    });
};

// 👉 로그인 axios 과정에서 이거 사용하면 될 듯
const decodeAccessToken = (accessToken: string) => {
  const decoded = jwtDecode<jwtType>(accessToken);
  console.log(decoded.user_uuid, '체크ㄴ');
  // 여기서 uuid 전역관리 고고
};

// 로컬 스토리지에 있는 토큰을 확인
const getToken = () => {
  const access = localStorage.getItem('access_token');
  const refresh = localStorage.getItem('refresh_token');

  return { access, refresh };
};

const setToken = (accessToken: string, refreshToken: string) => {
  localStorage.setItem('access_token', accessToken);
  localStorage.setItem('refresh_token', refreshToken);
};
// // 로컬 스토리지에 있는 토큰을 clear
// const deleteToken = (clearToken: string) => {
//   localStorage.removeItem(clearToken);
//   window.location.replace("/mainpage");
// };

export { checkAccessToken, decodeAccessToken, getToken, setToken };
