import { useState, useEffect, useCallback } from 'react';

export const useJsonFetch = ({ url, init, processData }) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);

  // Turn objects into strings for useCallback & useEffect dependencies
  const [stringifiedUrl, stringifiedInit] = [
    JSON.stringify(url),
    JSON.stringify(init),
  ];

  // If no processing function is passed just return the data
  // The callback hook ensures that the function is only created once
  // and hence the effect hook below doesn't start an infinite loop
  const processJson = useCallback(processData || ((jsonBody) => jsonBody), []);

  useEffect(() => {
    const fetchProcess = async () => {
      console.log(url);
      setLoading(true);
      try {
        // Fetch data from REST API
        const response = await fetch(url, init);
        if (response.status === 200) {
          // Extract json
          const rawData = await response.json();
          const processedData = processJson(rawData);
          setData(processedData);
        } else {
          console.error(`Error ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        console.error(`Error ${error}`);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    // Call async function
    fetchProcess();
  }, [stringifiedUrl, stringifiedInit, processJson]);
  return [data, isLoading, hasError];
};
