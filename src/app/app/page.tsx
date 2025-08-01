"use client";
import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  const [hasInvalidCode, setHasInvalidCode] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (!code) {
      setHasInvalidCode(true);
      return; // Early return for invalid code
    }

    localStorage.setItem("token42", code);
    window.location.href = "/app/wallet";
  }, []);

  if (hasInvalidCode) {
    return <div>Invalid code</div>;
  }

  return <div />;
};

export default App;