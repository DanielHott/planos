import React, { createContext, useState, useContext } from 'react';

const AddContext = createContext();

export function AddContextProvider({ children }) {
    const [ isModalOpen, setisModalOpen ] = useState(false);
return (
    <AddContext.Provider
      value={{
        isModalOpen,
        setisModalOpen
      }}
    >
      {children}
    </AddContext.Provider>
  );
}

export function useAddContext() {
  const context = useContext(AddContext);
  const { isModalOpen, setisModalOpen } = context;
  return { isModalOpen, setisModalOpen };
}