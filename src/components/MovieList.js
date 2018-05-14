"use strict";

import React from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, Button } from 'react-md';
import { Link } from 'react-router-dom';

import { MovieListRow } from './MovieListRow';
import Page from './Page'
import { SimpleLink } from './SimpleLink';

var buttonMainMenu = {
  paddingRight: '20px'
};

export const MovieList = ({data, onDelete}) => (
    
        <div class="col-xs-12 col-sm-8 col-sm-offset-2">			
				<div class="panel panel-info">
					<div class="panel-heading h2">
                        <SimpleLink to={`/`}>
                            <span class="glyphicon glyphicon-home" aria-hidden="true"></span>
                        </SimpleLink>
                        <span class="h2"> Home</span>
                    </div>
                    <div class="panel-body">
                        <div class="col-md-4 col-md-offset-4">
                            <img class="img-responsive" src="http://res.cloudinary.com/djgvcqyow/image/upload/v1525368172/DrGerrit.png"></img>
                        </div>
                        <SimpleLink to={`/dietplanning`}>
                            <button id="ButtonDietPlanning" value="Back" class="btn btn-default col-md-12">
                                <span class="glyphicon glyphicon-calendar" style={buttonMainMenu} aria-hidden="true"></span>
                                Diet Planning
                            </button>
                        </SimpleLink>
                        <SimpleLink to={`/`}>
                            <button id="ButtonStatistics" value="Back" class="btn btn-default col-md-12">
                                <span class="glyphicon glyphicon-stats" style={buttonMainMenu} aria-hidden="true"></span>
                                Statistics
                            </button>
                        </SimpleLink>
                        <SimpleLink to={`/personalsettings/1`}>
                            <button id="ButtonPersonalSettings" value="Back" class="btn btn-default col-md-12">
                                <span class="glyphicon glyphicon-user" style={buttonMainMenu} aria-hidden="true"></span>
                                Personal Settings
                            </button>
                        </SimpleLink>
                    </div>
                </div>
        </div>
    
);

