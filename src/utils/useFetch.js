import { useState, useEffect } from 'react';

export function useFetch(url, email, password) {

  const body= JSON.stringify({
    "email": email,
    "password": password
  });

  //console.log(body);

  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    //console.log(body)
    if (!url) return;
    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: body
        });
        const data = await response.json();
        //console.log(data)
        setData(data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [email, password, url])
  return { isLoading, data, error };
}