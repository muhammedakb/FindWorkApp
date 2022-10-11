import { useState, useEffect } from "react";
import axios from "axios";

export type FetchTypes<ResponseData> = {
  data: ResponseData;
  error: null | boolean;
  isLoading: boolean;
  fetchData: () => Promise<void>
};

const useGetHttp = (url: string) => {
  const [data, setData] = useState<any>();
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
  }, [url]);

  return { data, isLoading, error, fetchData };
};

export default useGetHttp;
