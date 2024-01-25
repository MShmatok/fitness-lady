import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  const clearData = () => {
    setData({});
  };
  const updateData = newData => {
    setData({ ...data, ...newData });
  };

  return (
    <Context.Provider value={{ data, updateData, clearData }}>
      {children}
    </Context.Provider>
  );
};

export const useMyContext = () => useContext(Context);
