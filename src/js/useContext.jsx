import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState({});

  const updateData = newData => {
    setData({ ...data, ...newData });
  };

  return (
    <Context.Provider value={{ data, updateData }}>{children}</Context.Provider>
  );
};

export const useMyContext = () => useContext(Context);
