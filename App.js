import React, {Component} from 'react';
import XulyLogin from "./component/XulyLogin";
import {StackActions, NavigationActions} from 'react-navigation';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <XulyLogin/>
        );
    }
}