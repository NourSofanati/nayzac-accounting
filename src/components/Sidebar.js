import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Dashboard from './Dashboard';
function Sidebar() {
    const [collapsed, setCollapsed] = useState("open");
    let collapseMenu = () => {
        setCollapsed(collapsed == "open" ? "collapsed" : "open");
        console.log("h");
    }
    return (    
        <div className="sidebar p-5 shadow text-center" >
            <Link to="/dashboard" className="btn btn-light w-100 mb-3">لوحة القيادة</Link>
            <Link to="/vendors" className="btn btn-light w-100 mb-3">الموردين</Link>
            <Link to="/dashboard" className="btn btn-light w-100 mb-3">Link</Link>
            <Link to="/dashboard" className="btn btn-light w-100 mb-3">Link</Link>
        </div>
    )
}

export default Sidebar
