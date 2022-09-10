import { useState } from 'react';
import { appAuth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  // 에러 정보를 저장
  const [error, setError] = useState(null);

  // 현제 서버와 통신 상태를 저장
  const [isPending, setIsPending] = useState(false);

  // user 정보 전역으로 관리
  const { dispatch } = useAuthContext();

  const login = (email, password) => {
    setError(null); // 아직 에러가 없음
    setIsPending(true); // 통신을 진행 중

    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: 'login', payload: user });
        setError(null);
        setIsPending(false);

        if (!user) {
          throw new Error('로그인에 실패했습니다.');
        }
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false); // 통신 완료
      });
  };
  return { error, isPending, login };
};
