import { useEffect, useState } from "react"

export default function useFetch<T>(url: string): T | undefined {
  const [data, setData] = useState<T>()

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, [url])

  return data
}
