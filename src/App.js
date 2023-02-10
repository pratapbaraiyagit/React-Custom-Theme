import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Sidebar from './Components/Sidebar/Sidebar';
import Content from './Components/Content/Content';
import { Suspense } from "react";
import { Spinner } from "reactstrap";

function App() {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <>
      <Router>
        <Suspense fallback={<Spinner />}>
          <div className="App">
            <Sidebar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
            <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
          </div>
        </Suspense>
      </Router>
    </>
  );
}

export default App;