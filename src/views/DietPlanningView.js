"use strict";

import React from 'react';

import { DietPlanning } from '../components/DietPlanning';


export class DietPlanningView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            data: []
        };
    }

    componentWillMount(){
        this.setState({
            loading: false
        });
    }


    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <DietPlanning/>
        );
    }
}
