import React from "react";
import { GoogleLogin } from "@react-oauth/google";

function GoogleSheet() {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
}

export default GoogleSheet;
