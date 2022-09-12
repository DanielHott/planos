import React, { createContext, useState, useContext } from 'react';

const AddContext = createContext();

export function AddContextProvider({ children }) {
    const [ isModalOpen, setisModalOpen ] = useState(false);
    const [ addFile, setAddFile ] = useState(false);
return (
    <AddContext.Provider
      value={{
        isModalOpen,
        setisModalOpen,
        addFile,
        setAddFile,
      }}
    >
      {children}
    </AddContext.Provider>
  );
}

export function useAddContext() {
  const context = useContext(AddContext);
  const { isModalOpen, setisModalOpen, addFile, setAddFile  } = context;
  return { isModalOpen, setisModalOpen, addFile, setAddFile  };
}