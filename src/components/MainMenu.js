"use strict";

import React from 'react';
import { Link } from 'react-router-dom';

import Page from './Page'
import { Footer } from './Footer';
import { SimpleLink } from './SimpleLink';

var buttonMainMenu = {
  paddingRight: '20px'
};
var paddingTop = {
  paddingTop: '75px'
};

export class MainMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <Page>  
                    <div class="col-xs-12 col-md-8 col-md-offset-2" style={paddingTop}>			
                            <div class="panel panel-info">
                                <div class="panel-heading">
                                    <h2>Home</h2>
                                </div>
                                <div class="panel-body">
                                    <div class="col-md-4 col-md-offset-4 col-xs-10 col-xs-offset-1">
                                        <img class="img-responsive" src="http://res.cloudinary.com/djgvcqyow/image/upload/v1525368172/DrGerrit.png"></img>
                                    </div>
                                    <SimpleLink to={`/dietplanning`}>
                                        <button id="ButtonDietPlanning" value="Back" class="btn btn-primary btn-lg col-md-12 col-xs-12">
                                            <span class="glyphicon glyphicon-calendar" style={buttonMainMenu} aria-hidden="true"></span>
                                            Diet Planning
                                        </button>
                                    </SimpleLink>
                                    <SimpleLink to={`/statistics`}>
                                        <button id="ButtonStatistics" value="Back" class="btn btn-primary btn-lg col-md-12 col-xs-12">
                                            <span class="glyphicon glyphicon-stats" style={buttonMainMenu} aria-hidden="true"></span>
                                            Statistics
                                        </button>
                                    </SimpleLink>
                                    <SimpleLink to={`/personalsettings/1`}>
                                        <button id="ButtonPersonalSettings" value="Back" class="btn btn-primary btn-lg col-md-12 col-xs-12">
                                            <span class="glyphicon glyphicon-user" style={buttonMainMenu} aria-hidden="true"></span>
                                            Personal Settings
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
