"use strict";

import React from 'react';

import { ShoppingList } from '../components/ShoppingList';


export class ShoppingListView extends React.Component {

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
            <ShoppingList/>
        );
    }
}
