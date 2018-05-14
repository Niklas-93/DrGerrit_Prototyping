"use strict";

import React from 'react';

import { MainMenu } from '../components/MainMenu';


export class MainMenuView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
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
            <MainMenu/>
        );
    }
}
