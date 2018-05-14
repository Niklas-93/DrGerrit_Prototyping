"use strict";

import React from 'react';
import { Link } from 'react-router-dom';

import { SimpleLink } from './SimpleLink';

import Page from './Page'
import { Footer } from './Footer';
const style = { maxWidth: 500 };
var paddingTop = {
  paddingTop: '75px'
};

export class Statistics extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <Page>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2" style={paddingTop}>			
				<div class="panel panel-info">
					<div class="panel-heading h2">
                        <SimpleLink to={`/`}>
                            <span class="glyphicon glyphicon-home" aria-hidden="true"></span>
                        </SimpleLink>
                        <span class="h2"> Statistics</span>
                    </div>
                    <div class="panel-body">
                        <div class="col-md-12">
                        <h3>My Weight over Time</h3>
                        <img class="img-responsive" src="http://res.cloudinary.com/djgvcqyow/image/upload/v1525706944/chart2.png"></img>
                        </div>
                        <SimpleLink to={`/`}>
                            <button id="ButtonBack" value="Back" class="btn btn-primary col-md-12">
                                Back to Main Menu
                            </button>
                        </SimpleLink>
                    </div>
                </div>
            </div>
            </Page>
           <div class="container"></div><Footer></Footer>
            </div>
        );
    }
}