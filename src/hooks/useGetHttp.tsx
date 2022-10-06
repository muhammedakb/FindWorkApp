import { useState, useEffect } from "react";
import axios from "axios";

const useGetHttp = (url: string) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | boolean>(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const { data: responseData } = await axios.get(url);
      setData(responseData);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useGetHttp;
