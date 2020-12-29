/****************************************************************
 * Front page
*****************************************************************/

import React from 'react';
import { Link } from "react-router-dom";


function Page() {
    return (
        <ul>
            <li><Link to="/triangular-grids">Grids</Link></li>
            <li><Link to="/cipher">Ciphers</Link></li>
        </ul>
    );
}

export default Page;
