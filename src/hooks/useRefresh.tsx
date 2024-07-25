import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRefresh = (url: string) => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      navigate(url);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [navigate, url]);
};

export default useRefresh;
