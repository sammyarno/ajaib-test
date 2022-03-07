import { createContext, useContext } from 'react';

const Context = createContext({
  data: [],
  loading: false,
  refetch: () => {},
  page: 1,
  limit: 10,
});

const Provider = props => {
  const { children, ...dataValue } = props;

  return (
    <Context.Provider value={{ ...dataValue }}>
      {children}
    </Context.Provider>
  );
};

export const useMyContext = () => useContext(Context);

export default Provider;
