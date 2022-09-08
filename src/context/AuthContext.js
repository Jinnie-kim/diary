import { createContext, useReducer } from 'react';

// context 객체를 생성
const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// context를 구독할 컴포넌트의 묶음 범위를 설정
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };