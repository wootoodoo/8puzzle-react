import React from "react";

function Footer() {
    let date = new Date().getFullYear();
    return (
        <footer>
            <div className="footer alternative-background">
                <p>Copyright {date} Jonathan Lee</p>
            </div>
        </footer>
    );
}

export default Footer;