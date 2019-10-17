import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Objectives from './Objectives';

class Landing extends Component {
    render() {
        return (
            <div>
                <Header />
                <About />
                <Objectives />
            </div>
        );
    }
}

export default Landing;
