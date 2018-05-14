"use strict";

import React from 'react';
import Styled from 'styled-components';

var footer = {
    color: "#31708f",
    backgroundColor: "#d9edf7",
    borderColor: "#bce8f1"
};
var footerheader = {
    color: "#31708f",
    float: "right"
};

export class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer class="footer" style={footer}>
                <div class="container">
                    <span class="text-muted" style={footerheader}>
                        <a>Privacy Policy</a>
                        <a> Terms of Use</a>
                        <a href="mailto:support@DrGerrit.com"> Support</a>
                    </span>
                </div>
            </footer>
        );
    }
};