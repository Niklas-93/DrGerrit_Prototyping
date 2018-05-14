"use strict";

import React from 'react';

import { SimpleLink } from './SimpleLink';

var navbar = {
    color: "#31708f",
    backgroundColor: "#d9edf7",
    borderColor: "#bce8f1"
};
var navbarheader = {
    color: "#31708f",
};
var navbarheaderright = {
    color: "#31708f",
    paddingLeft: "900px"
};

export class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav class="navbar navbar-default navbar-expand-md navbar-fixed-top" style={navbar}>
			            <div class="navbar-header">
          	                <a class="navbar-brand" href="#" style={navbarheader}>Dr.Gerrit</a>
                            <a class="navbar-brand" href="#" style={navbarheaderright}>Niklas Bremen
                                <span> </span><span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
                            </a>
        	            </div>
			            <div id="navbar" class="navbar-collapse collapse" style={navbar}>
                        
                        </div>
            </nav>
        );
    }
};