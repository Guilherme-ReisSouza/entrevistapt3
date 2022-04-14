import React from "react";

function Header(){

    return (
    <header>
        <nav class="nav-bar">
            <span id="menu">
                <p>Menu</p>
            </span>
            <span id="user-name">
                <p>User Name</p>
            </span>
            <span id="sales-report">
                <p>Sales Report</p>
            </span>
        </nav>
    </header>
    );
}

export default Header;