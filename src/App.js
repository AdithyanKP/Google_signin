import React from "react";
import "./App.css";

import { GoogleOAuthProvider } from "@react-oauth/google";

import GoogleSheet from "./components/GoogleSheet";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GoogleOAuthProvider clientId="378966547617-lfge2a6inqoqa85h91d3dskalho34ttn.apps.googleusercontent.com">
          <GoogleSheet />
        </GoogleOAuthProvider>
      </header>
    </div>
  );
}

export default App;
