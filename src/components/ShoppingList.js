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

export class ShoppingList extends React.Component {

    constructor(props) {
        super(props);
    }
    printPage () {
        window.print();
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
                        <span class="h2"> Shopping List</span>
                    </div>
                    <div class="panel-body">
                        <table class="table table-hover">
                            <thead>
                                <th>Ingredient</th>
                                <th>Amount</th>
                                <th>Price per Unit</th>
                                <th>Total Price</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img width="25px" height="25px" src="http://res.cloudinary.com/djgvcqyow/image/upload/v1525795430/Tomato.jpg"></img>Tomato</td>
                                    <td>5</td>
                                    <td>0,50 €</td>
                                    <td>2,50 €</td>
                                </tr>
                                <tr>
                                    <td><img width="25px" height="25px" src="http://res.cloudinary.com/djgvcqyow/image/upload/v1525795431/Spaghetti.jpg"></img>Spaghetti (100g)</td>
                                    <td>5</td>
                                    <td>0,50 €</td>
                                    <td>2,50 €</td>
                                </tr>
                                <tr>
                                    <td><img width="25px" height="25px" src="http://res.cloudinary.com/djgvcqyow/image/upload/v1525795430/Apple.jpg"></img>Apple</td>
                                    <td>1</td>
                                    <td>1,50 €</td>
                                    <td>1,50 €</td>
                                </tr>
                                <tr>
                                    <td><img width="25px" height="25px" src="http://res.cloudinary.com/djgvcqyow/image/upload/v1525795430/Milk.jpg"></img>Milk (1l)</td>
                                    <td>2</td>
                                    <td>1,20 €</td>
                                    <td>2,40 €</td>
                                </tr>
                                <tr>
                                    <th>Total</th>
                                    <td></td>
                                    <td></td>
                                    <th>8,90 €</th>
                                </tr>
                            </tbody>
                        </table>
                        <button id="ButtonPrint" value="Print" onClick={this.printPage} class="btn btn-primary col-md-12">
                                Print Shopping List
                        </button>
                        <SimpleLink to={`/dietplanning`}>
                            <button id="ButtonDietPlanning" value="Dietplanning" class="btn btn-primary col-md-12">
                                Back to Diet Planning
                            </button>
                        </SimpleLink>
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