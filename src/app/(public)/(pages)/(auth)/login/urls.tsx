import { useEffect, useState } from "react";

export const useLinkedInLogin = () => {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const receiveMessage = (event: any) => {
      if (event.origin === window.location.origin) {
        const { authToken } = event.data;
        setAuthToken(authToken);
      }
    };

    window.addEventListener("message", receiveMessage);

    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  }, []);

  const handleLinkedInAuth = () => {
    window.open(
      "https://www.linkedin.com/oauth/v2/authorization?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=SCOPE",
      "_blank"
    );
  };
  
  return { authToken, handleLinkedInAuth };
};
