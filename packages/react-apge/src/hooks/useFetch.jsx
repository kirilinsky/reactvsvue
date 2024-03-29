import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
      
        res.data && setData(res.data);
    
      })
      .catch((err) => {
        setLoading(false);
        setError("An error occurred. Awkward..");
      });
  }, [url]);

  return { data,setData, loading, error };
}
export default useFetch;
