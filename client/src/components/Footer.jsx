import React from "react";

function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div class="container">
            <p class="text-center">Copyright fluffigvarg {year}</p>
        </div>
    )
}

export default Footer;