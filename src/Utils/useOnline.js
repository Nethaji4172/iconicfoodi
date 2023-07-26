import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    const checkOnline = () => {
      setIsOnline(true);
    };
    const checkOffline = () => {
      setIsOnline(false);
    };
    window.addEventListener("online", checkOnline);

    window.addEventListener("offline", checkOffline);

    return () => {
      window.removeEventListener("online", checkOnline);

      window.removeEventListener("offline", checkOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
