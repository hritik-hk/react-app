import React from "react";

function Footer(){
    const date=new Date();
    const currYear=date.getFullYear();
    return (
        <footer>
        <p>
        Copyrightâ“’{currYear}
        </p>
       </footer>
    );
}

export default Footer;