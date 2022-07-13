import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from '@material-ui/core';
import { divide } from 'lodash';

const Header = props => {
    const {title, introduction} = props
return(
    <div className="header-area">
        <h1>{title}</h1>
        <p>{introduction}</p>
    </div>
);
}

export default Header;
