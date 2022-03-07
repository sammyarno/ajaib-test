import { useEffect, useState, useCallback, useMemo } from 'react';
import axios from 'axios';
import { normalizeResponse } from '../utils/normalizer';

const BASE_URL = 'https://randomuser.me/api/';

const useGetUsers = (newParams = {}) => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const defaultParams = useMemo(() => ({
    page: 1,
    results: 5,
    inc: 'gender,name,login,registered,email'
  }), []);

  const fetchData = useCallback(async () => {
    const result = await axios.get(BASE_URL, {
      params: {
        ...defaultParams,
        ...newParams,
      }
    });

    if (result.status === 200) setResponse(normalizeResponse(result.data));
    else setError(result.error);

    setloading(false);
  }, [defaultParams, newParams]);

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, error, loading };
};

export default useGetUsers;
