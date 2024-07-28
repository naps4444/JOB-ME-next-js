import { createContext, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const userId = "66a24c5418790e99e45e93e1";
  const jobId = "669e4918d6aa999f8522e3e8";

  return (
    <AppContext.Provider value={{ userId, jobId }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};