import { useEffect } from "react";

function AMLRedirect() {
  useEffect(() => {
    window.location.href = "/Anti-Money-Laundering-Policy.pdf";
  }, []);

  return null; // No need to render anything
}

export default AMLRedirect;