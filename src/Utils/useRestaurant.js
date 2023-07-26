import { useEffect, useState } from "react";

const useRestuarant = (url, pageID = "") => {
  const [isRestuarant, setIsRestuarant] = useState(null || []);
  //   console.log("hello");

  useEffect(() => {
    getRestuarantInfo();
  }, []);

  const getRestuarantInfo = async () => {
    try {
      const res = await fetch(url + pageID);
      if (!res) throw Error("data not came");
      const result = await res.json();
      setIsRestuarant(result);
    } catch (err) {
      console.log(err.message);
    }
  };

  return isRestuarant;
};

export default useRestuarant;
