"use strict";

import React from 'react';

import { PersonalSettings } from '../components/PersonalSettings';
import { Loader } from '../components/Loader';

import PersonalSettingsService from '../services/PersonalSettingsService';


var loader = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    zIndex: '1',
    width: '150px',
    height: '150px',
    margin: '-75px 0 0 -75px',
    border: '16px solid #f3f3f3',
    borderRadius: '50%',
    borderTop: '16px solid #3498db',
    width: '120px',
    height: '120px',
    WebkitAnimation: 'spin 2s linear infinite',
    animation: 'spin 2s linear infinite',
    keyFramsssesSpin: '100 % {transform: rotate(360deg)}'
};

export class PersonalSettingsView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(props){
        this.setState({
            loading: true
        });

        let id = this.props.match.params.id;

        PersonalSettingsService.getPersonalSetting(id).then((data) => {
            this.setState({
                personalsetting: data,
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    updateMovie(personalsetting) {
    }


    render() {
        if (this.state.loading) {
            return (<div style={loader}></div>);
        }

        return (
            <PersonalSettings personalsetting={this.state.personalsetting} onSubmit={(personalsetting) => this.updateMovie(personalsetting)} error={this.state.error}/>
        );
    }
}
