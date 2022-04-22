import React,{useState,createContext} from 'react';

export const ModalContext = createContext();

export const ModalProvider = (props) => {
    const [state,setState] = useState(false);
  return (
    <ModalContext.Provider value={[state,setState]}>
        {props.children}
    </ModalContext.Provider>
  )
}

