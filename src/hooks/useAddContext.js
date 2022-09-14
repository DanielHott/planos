import React, { createContext, useState, useContext } from 'react';

const AddContext = createContext();

export function AddContextProvider({ children }) {
    const [ isModalOpen, setisModalOpen ] = useState(false);
    const [ isModalEditOpen, setisModalEditOpen ] = useState(false);
    const [ addFile, setAddFile ] = useState(false);
    const [ info, setInfo ] = useState({});

return (
    <AddContext.Provider
      value={{
        isModalOpen,
        setisModalOpen,
        isModalEditOpen,
        setisModalEditOpen,
        addFile,
        setAddFile,
        info,
        setInfo,
      }}
    >
      {children}
    </AddContext.Provider>
  );
}

export function useAddContext() {
  const context = useContext(AddContext);
  const { isModalOpen, setisModalOpen, addFile, setAddFile, isModalEditOpen, setisModalEditOpen, info, setInfo   } = context;
  return { isModalOpen, setisModalOpen, addFile, setAddFile, isModalEditOpen, setisModalEditOpen, info, setInfo   };
}