import { useEffect, useState, useCallback, useMemo } from 'react';
import axios from 'axios';
import normalizer from '../utils/normalizer';

const BASE_URL = 'https://randomuser.me/api/';

const useGetUsers = () => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const defaultParams = useMemo(() => ({
    page: 1,
    results: 5,
    inc: 'gender,name,login,registered,email'
  }), []);

  const fetchData = useCallback(async (newParams = {}) => {
    const result = await axios.get(BASE_URL, {
      params: {
        ...defaultParams,
        ...newParams,
      }
    });

    if (result.status === 200) setResponse(normalizer(result.data));
    else setError(result.error);

    setloading(false);
  }, [defaultParams]);

  const refetch = async (newParams = {}) => {
    setloading(true);
    await fetchData(newParams);
    setloading(false);
  }

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, error, loading, refetch };
};

export default useGetUsers;
