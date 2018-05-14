"use strict";

import React from 'react';
import { TextField } from 'react-md';
import { withRouter } from 'react-router-dom'

import { FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

import { AlertMessage } from './AlertMessage';
import Page from './Page';
import { Footer } from './Footer';
import { SimpleLink } from './SimpleLink';

const style = { maxWidth: 500 };
var buttonFoodInfo = {
  WebkitAppearance: 'searchfield-cancel-button'
};
var paddingTop = {
  paddingTop: '15px'
};
var paddingTopnav = {
  paddingTop: '75px'
};
export class PersonalSettings extends React.Component {

    constructor(props) {
        super(props);

        if(this.props.personalsetting != undefined) {
            this.state = {
                name : props.personalsetting.name,
                surname : props.personalsetting.surname,
                height : props.personalsetting.height,
                weight : props.personalsetting.weight
            };
        } else {
            this.state = {
                name : '',
                surname : '',
                height : '',
                weight : ''
            };
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeSurname = this.handleChangeSurname.bind(this);
        this.handleChangeHeight = this.handleChangeHeight.bind(this);
        this.handleChangeWeight = this.handleChangeWeight.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(e) {
        this.setState({ name: e.target.value });
    }
    handleChangeSurname(e) {
        this.setState({ surname: e.target.value });
    }
    handleChangeHeight(e) {
        this.setState({ height: e.target.value });
    }
    handleChangeWeight(e) {
        this.setState({ weight: e.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        let personalsetting = this.props.personalsetting;
        if(personalsetting == undefined) {
            personalsetting = {};
        }

        personalsetting.name = this.state.name;
        personalsetting.surname = this.state.surname;
        personalsetting.height = this.state.height;
        personalsetting.weight = this.state.weight;

        this.props.onSubmit(personalsetting);
    }

    render() {
        return (
            <div>
            <Page>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2" style={paddingTopnav}>
            <div>{this.state.name}{this.state.surname}{this.state.height}{this.state.weight}</div>			
				<div class="panel panel-info">
					<div class="panel-heading h2">
                        <SimpleLink to={`/`}>
                            <span class="glyphicon glyphicon-home" aria-hidden="true"></span>
                        </SimpleLink>
                        <span class="h2"> Personal Settings</span>
                    </div>
                    <div class="panel-body">
                        <ul class="nav nav-tabs nav-justified" role="tablist" id="myTabs">
                            <li role="presentation">
                            <a href="#GeneralInformation" aria-controls="1" role="tab" data-toggle="tab">General Information</a>
                            </li>
                            <li role="presentation">
                            <a href="#NutritionInformation" aria-controls="2" role="tab" data-toggle="tab">Nutrition Information</a>
                            </li>
                            <li role="presentation">
                            <a href="#AdditionalInformation" aria-controls="2" role="tab" data-toggle="tab">Additional Information</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane fade in active" id="GeneralInformation">
                                <form onSubmit={this.handleSubmit}>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label htmlFor="name" class="control-label">Name</label>
                                            <input id="name" class="form-control" type="text" required={true} value={this.state.name} onChange={this.handleChangeName} errorText="Name is required"></input>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label htmlFor="surname" class="control-label">Surname</label>
                                            <input id="surname" class="form-control" type="text" required={true} value={this.state.surname} onChange={this.handleChangeSurname} errorText="Surname is required"></input>
                                        </div> {/*
                                         <TextField
                                            label="Title"
                                            id="TitleField"
                                            type="text"
                                            className="md-row"
                                            required={true}
                                            value={this.state.height}
                                            onChange={this.handleChangeHeight}
                                            errorText="Title is required"/>
                                            <FormGroup controlId="parameterDescription">
                                                <ControlLabel>Description</ControlLabel>
                                                <FormControl  value={this.state.height} onChange={this.handleChangeHeight} placeholder="Description of parameter function">
                                                </FormControl>
                                            </FormGroup>*/}
                                        <div class="form-group col-md-6">
                                            <label htmlFor="height" class="control-label">Height</label>
                                            <input id="height" class="form-control" type="number" required={true} value={this.state.height} onChange={this.handleChangeHeight} errorText="Height is required"></input>
                                        </div>
                                        
                                        <div class="form-group col-md-6">
                                            <label htmlFor="weight" class="control-label">Weight</label>
                                            <input id="weight" class="form-control" type="number" value={this.state.weight} onChange={this.handleChangeWeight} errorText="Weight is required"></input>
                                        </div>{/*
                                        <div class="form-group col-md-6">
                                            <label htmlfor="desiredweight" class="control-label">My desired Weight</label>
                                            <input id="desiredweight" class="form-control" type="number" value="" readOnly placeholder="your desired weight"></input>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label htmlfor="inweeks" class="control-label">in</label>
                                            <input id="inweeks" class="form-control" type="number" value="" readOnly placeholder="number of weeks"></input>                  
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label htmlfor="budget" class="control-label">My weekly Budget</label>
                                            <input id="budget" class="form-control" type="number" value="" readOnly placeholder="your weekly budget in Euros"></input>
                                        </div>
                                        */}
                                        <div class="form-group col-md-12">
                                                <button id="ButtonSave" type="submit" value="Save" class="btn btn-default col-md-12">Save Personal Settings</button>
                                        </div>
                                        <div class="form-group col-md-12">
                                                <SimpleLink to={`/`}><button id="ButtonBack" value="Back" class="btn btn-default col-md-12">Back to Main Menu</button></SimpleLink>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="NutritionInformation">
                                <form>
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label class="control-label col-md-12">Nutrition Style</label>
                                            <div class="form-check form-check-inline col-md-3">
                                                <input class="form-check-input" type="checkbox" id="Norestriction" value="Norestriction"></input>
                                                <label class="form-check-label" htmlfor="Norestriction">No restriction</label>
                                            </div>
                                            <div class="form-check form-check-inline col-md-3">
                                                <input class="form-check-input" type="checkbox" id="Vegetarian" value="Vegetarian"></input>
                                                <label class="form-check-label" htmlfor="Vegetarian">Vegetarian</label>
                                            </div>
                                            <div class="form-check form-check-inline col-md-3">
                                                <input class="form-check-input" type="checkbox" id="Vegan" value="Vegan"></input>
                                                <label class="form-check-label" htmlfor="Vegan">Vegan</label>
                                            </div>
                                            <div class="form-check form-check-inline col-md-3">
                                                <input class="form-check-input" type="checkbox" id="Pescetarian" value="Pescetarian"></input>
                                                <label class="form-check-label" htmlfor="Pescetarian">Pescetarian</label>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-12" style={paddingTop}>Preferred Food</label>
                                            <div class="form-check form-check-inline col-md-3">
                                                <input class="form-check-input" type="checkbox" id="German" value="German"></input>
                                                <label class="form-check-label" htmlfor="German">German</label>
                                            </div>
                                            <div class="form-check form-check-inline col-md-3">
                                                <input class="form-check-input" type="checkbox" id="French" value="French"></input>
                                                <label class="form-check-label" htmlfor="French">French</label>
                                            </div>
                                            <div class="form-check form-check-inline col-md-3">
                                                <input class="form-check-input" type="checkbox" id="Spanish" value="Spanish"></input>
                                                <label class="form-check-label" htmlfor="Spanish">Spanish</label>
                                            </div>
                                            <div class="form-check form-check-inline col-md-3">
                                                <input class="form-check-input" type="checkbox" id="English" value="English"></input>
                                                <label class="form-check-label" htmlfor="English">English</label>
                                            </div>
                                            <div class="form-check form-check-inline col-md-3">
                                                <input class="form-check-input" type="checkbox" id="Chinese" value="Chinese"></input>
                                                <label class="form-check-label" htmlfor="Chinese">Chinese</label>
                                            </div>
                                            <div class="form-check form-check-inline col-md-3">
                                                <input class="form-check-input" type="checkbox" id="Japanese" value="Japanese"></input>
                                                <label class="form-check-label" htmlfor="Japanese">Japanese</label>
                                            </div>
                                            <div class="form-check form-check-inline col-md-3">
                                                <input class="form-check-input" type="checkbox" id="Arabic" value="Arabic"></input>
                                                <label class="form-check-label" htmlfor="Arabic">Arabic</label>
                                            </div>
                                             <div class="form-check form-check-inline col-md-3">
                                                <input class="form-check-input" type="checkbox" id="Italian" value="Italian"></input>
                                                <label class="form-check-label" htmlfor="Italian">Italian
                                                    <button type="button"style={buttonFoodInfo} class="control-label" data-toggle="modal" data-target="#exampleModal">
                                                        ?
                                                    </button>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-12" style={paddingTop}>Allergies</label>
                                            <div class="form-check form-check-inline col-md-3">
                                                <input class="form-check-input" type="checkbox" id="Nuts" value="Nuts"></input>
                                                <label class="form-check-label" htmlfor="Nuts">Nuts</label>
                                            </div>
                                            <div class="form-check form-check-inline col-md-3">
                                                <input class="form-check-input" type="checkbox" id="Eggs" value="Eggs"></input>
                                                <label class="form-check-label" htmlfor="Eggs">Eggs</label>
                                            </div>
                                            <div class="form-check form-check-inline col-md-3">
                                                <input class="form-check-input" type="checkbox" id="Milk" value="Milk"></input>
                                                <label class="form-check-label" htmlfor="Milk">Milk</label>
                                            </div>
                                            <div class="form-check form-check-inline col-md-3">
                                                <input class="form-check-input" type="checkbox" id="Soy" value="Soy"></input>
                                                <label class="form-check-label" htmlfor="Soy">Soy</label>
                                            </div>
                                        </div>
                                         <div class="form-group col-md-12">
                                            <label htmlfor="otherallergies" class="control-label" style={paddingTop}>Other Allergies</label>
                                            <textarea id="otherallergies" class="form-control" type="text" value="" placeholder="Please inform us about any other allergies"></textarea>
                                        </div>
                                        <div class="form-group col-md-12">
                                                <button id="ButtonSave" value="Save" class="btn btn-default col-md-12">Save Personal Settings</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="AdditionalInformation">
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label htmlfor="name" class="control-label">Name</label>
                                            <input id="name" class="form-control" type="text" value="Hans"></input>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label htmlfor="surname" class="control-label">Surname</label>
                                            <input id="surname" class="form-control" type="text" value="Heißhunger"></input>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label htmlfor="height" class="control-label">Height</label>
                                            <input id="height" class="form-control" type="number" value="190"></input>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label htmlfor="weight" class="control-label">Weight</label>
                                            <input id="weight" class="form-control" type="number" value="90"></input>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label htmlfor="budget" class="control-label">My weekly Budget</label>
                                            <input id="budget" class="form-control" type="number" value="" placeholder="your weekly budget in Euros"></input>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-12">Nutrition Style</label>
                                            <div class="form-check form-check-inline col-md-3">
                                                <input class="form-check-input" type="checkbox" id="Norestriction" value="Norestriction"></input>
                                                <label class="form-check-label" htmlfor="Norestriction">No restriction</label>
                                            </div>
                                            <div class="form-check form-check-inline col-md-3">
                                                <input class="form-check-input" type="checkbox" id="Vegetarian" value="Vegetarian"></input>
                                                <label class="form-check-label" htmlfor="Vegetarian">Vegetarian</label>
                                            </div>
                                            <div class="form-check form-check-inline col-md-3">
                                                <input class="form-check-input" type="checkbox" id="Vegan" value="Vegan"></input>
                                                <label class="form-check-label" htmlfor="Vegan">Vegan</label>
                                            </div>
                                            <div class="form-check form-check-inline col-md-3">
                                                <input class="form-check-input" type="checkbox" id="Pescetarian" value="Pescetarian"></input>
                                                <label class="form-check-label" htmlfor="Pescetarian">Pescetarian</label>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-12">Allergies</label>
                                            <div class="form-check form-check-inline col-md-3">
                                                <input class="form-check-input" type="checkbox" id="Nuts" value="Nuts"></input>
                                                <label class="form-check-label" htmlfor="Nuts">Nuts</label>
                                            </div>
                                            <div class="form-check form-check-inline col-md-3">
                                                <input class="form-check-input" type="checkbox" id="Eggs" value="Eggs"></input>
                                                <label class="form-check-label" htmlfor="Eggs">Eggs</label>
                                            </div>
                                            <div class="form-check form-check-inline col-md-3">
                                                <input class="form-check-input" type="checkbox" id="Milk" value="Milk"></input>
                                                <label class="form-check-label" htmlfor="Milk">Milk</label>
                                            </div>
                                            <div class="form-check form-check-inline col-md-3">
                                                <input class="form-check-input" type="checkbox" id="Soy" value="Soy"></input>
                                                <label class="form-check-label" htmlfor="Soy">Soy</label>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-12">
                                                <button id="ButtonSave" value="Save" class="btn btn-default col-md-12">Save Personal Settings</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>                      
                        
                    </div>
                </div>
                {/* <h1>{this.props.personalsetting.title}</h1> */}
                <div class="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title col-md-10" id="exampleModalLabel">Italian food</h1><img class="img-responsive col-md-2" src="http://res.cloudinary.com/djgvcqyow/image/upload/v1525381599/italy.png"></img>
                            </div>
                            <div class="modal-body">
                                <div class="col-md-12">Italian food is well known for its highcarbohydrate diet. Popular meals are Pasta and Pizza, which both include a lot of sugar and thereby calories.</div>
                                <img class="img-responsive col-md-4" style={paddingTop} src="http://res.cloudinary.com/djgvcqyow/image/upload/v1525382291/pizza.png"></img>
                                <img class="img-responsive col-md-4" style={paddingTop} src="http://res.cloudinary.com/djgvcqyow/image/upload/v1525382502/Pasta.jpg"></img>
                                <img class="img-responsive col-md-4" style={paddingTop} src="http://res.cloudinary.com/djgvcqyow/image/upload/v1525382298/eis.jpg"></img>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-dismiss="modal">Got it!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</Page>
           <div class="container"></div><Footer></Footer>
            </div>
            
                
        );
    }
}