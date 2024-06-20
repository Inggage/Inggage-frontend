import React from "react";
import "./InstagramButton.css";
import axios from "axios";

function InstagramButton() {
  const handleButtonClick = () => {
    const width = 600;
    const height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    const authUrl = `http://localhost:5000/auth/instagram`;
    const newWindow = window.open(
      authUrl,
      "Instagram Auth",
      `width=${width},height=${height},top=${top},left=${left}`
    );

    const checkForCode = () => {
      try {
        // const params = new URLSearchParams(newWindow.location.search);
        // const code = params.get("code");

        if (true) {
        //  console.log(`Authorization code: ${code}`);
       //   newWindow.close();

          // Call your backend API here
          axios
            .get(`http://localhost:5000/auth/instagram/callback`)
            .then((response) => console.log("API Response:", response.data))
            .catch((error) => console.error("Error fetching data:", error));
        } else {
          setTimeout(checkForCode, 1000);
        }
      } catch (err) {
        setTimeout(checkForCode, 1000);
      }
    };

    setTimeout(checkForCode, 1000);
  };

  return (
    <div className="instagram-button">
      <button onClick={handleButtonClick}>Fetch Instagram Data</button>
    </div>
  );
}

export default InstagramButton;
