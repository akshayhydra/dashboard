import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";  // Ensure Sidebar.js exists in /src/components
import Dashboard from "./pages/Dashboard";  // Ensure Dashboard.js exists in /src/pages
import Login from "./pages/Login";
import Analytics from "./pages/Analytics";
import Accounts from "./pages/Accounts";
import Settings from "./pages/Settings";


function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
console.log("ak");
    return (
         
        
            <div className="app-container">
                {isAuthenticated && <Sidebar />}
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
                        <Route path="/analytics" element={isAuthenticated ? <Analytics /> : <Navigate to="/" />} />
                        <Route path="/accounts" element={isAuthenticated ? <Accounts /> : <Navigate to="/" />} />
                        <Route path="/settings" element={isAuthenticated ? <Settings /> : <Navigate to="/" />} />
                    </Routes>
                </div>
            </div>
    
    );
}

export default App;
