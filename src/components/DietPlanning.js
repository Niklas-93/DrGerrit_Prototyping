"use strict";

import React from 'react';
import { Link } from 'react-router-dom';

import { Carousel } from 'react-bootstrap';

import { SimpleLink } from './SimpleLink';

import Page from './Page'
import { Footer } from './Footer';

const style = { maxWidth: 500 };
var paddingTop = {
  paddingTop: '75px'
};

export class DietPlanning extends React.Component {

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
                        <span class="h2"> Diet Planning</span>
                    </div>
                    <div class="panel-body">
                        <ul class="nav nav-tabs nav-justified" role="tablist" id="myTabs">
                            <li role="presentation">
                            <a href="#firstday" aria-controls="1" role="tab" data-toggle="tab">Monday</a>
                            </li>
                            <li role="presentation">
                            <a href="#secondday" aria-controls="2" role="tab" data-toggle="tab">Tuesday</a>
                            </li>
                            <li role="presentation">
                            <a href="#thirdday" aria-controls="3" role="tab" data-toggle="tab">Wednesday</a>
                            </li>
                            <li role="presentation">
                            <a href="#thirdday" aria-controls="3" role="tab" data-toggle="tab">Thursday</a>
                            </li>
                            <li role="presentation">
                            <a href="#thirdday" aria-controls="3" role="tab" data-toggle="tab">Friday</a>
                            </li>
                            <li role="presentation">
                            <a href="#thirdday" aria-controls="3" role="tab" data-toggle="tab">Saturday</a>
                            </li>
                            <li role="presentation">
                            <a href="#thirdday" aria-controls="3" role="tab" data-toggle="tab">Sunday</a>
                            </li>
                        </ul>
                         <div class="tab-content">
                            <div role="tabpanel" class="tab-pane fade in active" id="firstday">
                                <div id="accordion">
                                    <div class="card">
                                        <div class="card-header" id="headingOne">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed col-md-12" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Breakfast: Muesli
                                            </button>
                                        </h5>
                                        </div>

                                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div class="card-body">                
                                            <img class="img-responsive col-md-4" src="http://res.cloudinary.com/djgvcqyow/image/upload/v1525367078/muesli.jpg"></img>
                                            <div class="col-md-5">Ingredients:
                                            <ul>
                                                <li>apple</li>
                                                <li>cornflakes</li>
                                                <li>strawberry</li>
                                            </ul>
                                            </div>
                                            <img class="img-responsive col-md-3" src="http://res.cloudinary.com/djgvcqyow/image/upload/v1525367600/pie_chart.png"></img>     
                                        </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingTwo">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed col-md-12" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Lunch: Salad
                                            </button>
                                        </h5>
                                        </div>
                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div class="card-body">
                                            Anim pariatur cliche 
                                        </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingThree">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed col-md-12" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Dinner: Spaghetti Bolognese
                                            </button>
                                        </h5>
                                        </div>
                                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div class="card-body">
                                            Anim pariatur cliche 
                                        </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingFour">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed col-md-12" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Additional Snacks
                                            </button>
                                        </h5>
                                        </div>
                                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                        <div class="card-body">
                                            Anim pariatur cliche 
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpane2" class="tab-pane" id="secondday">
                                
                            </div>
                            <div role="tabpane3" class="tab-pane" id="thirdday">
                                <div id="accordion3">
                                    <div class="card">
                                        <Carousel>
                                            <Carousel.Item>
                                                <div class="card-header" id="headingOne31">
                                                    <h5 class="mb-0">
                                                        <button class="btn btn-link collapsed col-md-12" data-toggle="collapse" data-target="#collapseOne31" aria-expanded="true" aria-controls="collapseOne31">
                                                            <h3>Muesli</h3>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <Carousel.Caption>
                                                    <h3>Muesli</h3>
                                                    <p>Typical German Food</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <div class="card-header" id="headingOne32">
                                                    <h5 class="mb-0">
                                                        <button class="btn btn-link collapsed col-md-12" data-toggle="collapse" data-target="#collapseOne32" aria-expanded="true" aria-controls="collapseOne32">
                                                            <h3>Pizza</h3>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <Carousel.Caption>
                                                    <h3>Pizza</h3>
                                                    <p>Typical Italian Food</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <h3>Pasta</h3>
                                                <Carousel.Caption>
                                                    <h3>Pasta</h3>
                                                    <p>Typical Italian Food</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
                                    

                                        <div id="collapseOne31" class="collapse" aria-labelledby="headingOne31" data-parent="#accordion3">
                                            <div class="card-body">                
                                                <img class="img-responsive col-md-4" src="http://res.cloudinary.com/djgvcqyow/image/upload/v1525367078/muesli.jpg"></img>
                                                <div class="col-md-5">Ingredients:
                                                    <ul>
                                                        <li>apple</li>
                                                        <li>cornflakes</li>
                                                        <li>strawberry</li>
                                                    </ul>
                                                </div>
                                                <img class="img-responsive col-md-3" src="http://res.cloudinary.com/djgvcqyow/image/upload/v1525367600/pie_chart.png"></img>     
                                            </div>
                                        </div>
                                        <div id="collapseOne32" class="collapse" aria-labelledby="headingOne32" data-parent="#accordion3">
                                            <div class="card-body">                
                                                <img class="img-responsive col-md-4" src="http://res.cloudinary.com/djgvcqyow/image/upload/v1525367078/muesli.jpg"></img>
                                                <div class="col-md-5">Ingredients:
                                                    <ul>
                                                        <li>Tomato</li>
                                                        <li>Cheese</li>
                                                        <li>Salami</li>
                                                    </ul>
                                                </div>
                                                <img class="img-responsive col-md-3" src="http://res.cloudinary.com/djgvcqyow/image/upload/v1525367600/pie_chart.png"></img>     
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingTwo3">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link collapsed col-md-12" data-toggle="collapse" data-target="#collapseTwo3" aria-expanded="false" aria-controls="collapseTwo3">
                                                    Lunch: Salad
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo3" class="collapse" aria-labelledby="headingTwo3" data-parent="#accordion3">
                                            <div class="card-body">
                                                Anim pariatur cliche 
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingThree3">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed col-md-12" data-toggle="collapse" data-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
                                            Dinner: Spaghetti Bolognese
                                            </button>
                                        </h5>
                                        </div>
                                        <div id="collapseThree3" class="collapse" aria-labelledby="headingThree3" data-parent="#accordion3">
                                        <div class="card-body">
                                            Anim pariatur cliche 
                                        </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingFour3">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed col-md-12" data-toggle="collapse" data-target="#collapseFour3" aria-expanded="false" aria-controls="collapseFour3">
                                            Additional Snacks
                                            </button>
                                        </h5>
                                        </div>
                                        <div id="collapseFour3" class="collapse" aria-labelledby="headingFour3" data-parent="#accordion3">
                                        <div class="card-body">
                                            Anim pariatur cliche 
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SimpleLink to={`/`}>
                            <button id="ButtonBack" value="Back" class="btn btn-primary col-md-12">
                                Back to Main Menu
                            </button>
                        </SimpleLink>
                        <SimpleLink to={`/shoppinglist`}>
                            <button id="ButtonShoppingList" value="Create Shopping List" class="btn btn-primary col-md-12">
                                Create Shopping List
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