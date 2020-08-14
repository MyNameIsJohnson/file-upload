import React from 'react';
import FileUpload from './component/FileUpload'
import './App.css';

const App = () => (
    <div className="container mt-4">
      <h4 className="display-4 text-center mb-4">
        <img src="/frontdoor-logo.png" alt="Frontdoor-logo"className=""></img>

      </h4>
      <FileUpload/>
    </div>
  );

export default App;
