import { useState, useEffect } from "react";
import axios from "axios";

const useGetHttp = () => {
  const [data, setData] = useState<any>();
  // const [data, setData] = useState<{ [key: string]: any }>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | boolean>(null);

  const fetchData = async (url: string) => {
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

  // useEffect(() => {
  //   fetchData(url);
  // }, []);

  return { data, isLoading, error, setData, fetchData };
};

export default useGetHttp;
