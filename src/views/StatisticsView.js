"use strict";

import React from 'react';

import { Statistics } from '../components/Statistics';


export class StatisticsView extends React.Component {

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
            <Statistics/>
        );
    }
}
