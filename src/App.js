import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/pages/Dashboard";
import Login from "./pages/Login";
import Analytics from "./pages/Analytics";
import Accounts from "./pages/Accounts";
import Settings from "./pages/Settings";
import './styles/global.css';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Router>
            <div className="app-container">
                {isAuthenticated && <Sidebar />}
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="/accounts" element={<Accounts />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
