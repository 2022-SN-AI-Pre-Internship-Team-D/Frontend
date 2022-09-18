import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { checkAccessToken, getToken } from 'utils/tokenManager';

export function AuthRouter() {
  useEffect(() => {
    (async () => {
      checkAccessToken(getToken().access!);
      const token = getToken().access;

      if (!token) {
        window.location.replace('/');
        alert('로그인이 필요합니다.');
      }
      console.log('여기 왔나?');
    })();
  }, []);
  return <Outlet />;
}
