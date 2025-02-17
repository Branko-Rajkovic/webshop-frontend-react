import { useEffect, useState } from "react";
import axios from "axios";
// Custom hook to fetch product data
export default function useFetchData(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        console.error("err", err);
        setError(err);
      } finally {
        console.log("end of fetching");
      }
    }
    fetchData();
  }, []);

  return { data, error };
}
