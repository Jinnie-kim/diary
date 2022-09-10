import { useReducer } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { appFireStore, timeStamp } from '../firebase/config';

const initState = {
  document: null, // 데이터를 객체의 형태로 저장하는 공간
  isPending: false, // 데이터 통신 여부
  error: null,
  success: false, // firestore와의 통신 성공 여부
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case 'isPending':
      return { isPending: true, document: null, success: false, error: null };
    case 'addDoc':
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case 'error':
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// transaction(collection): 저장할 컬렉션을 인자로 전달
export const useFireStore = (transaction) => {
  const [response, dispatch] = useReducer(storeReducer, initState);

  // colRef: 컬렉션의 참조를 firestore로부터 요청(요구)
  const colRef = collection(appFireStore, transaction);

  // 컬렉션에 문서를 추가
  const addDocument = async (doc) => {
    dispatch({ type: 'isPending' });
    try {
      const createdTime = timeStamp.fromDate(new Date());
      const docRef = await addDoc(colRef, { ...doc, createdTime });
      console.log(docRef);
      dispatch({ type: 'addDoc', payload: docRef });
    } catch (error) {
      dispatch({ type: 'error', payload: error.message });
    }
  };

  // 컬렉션에서 문서를 제거
  const deleteDocument = (id) => {};

  return { addDocument, deleteDocument, response };
};
