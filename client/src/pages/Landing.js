import React, { Component } from 'react'
import Header from '../components/home/Header';
import About from '../components/home/About';
import Objectives from '../components/home/Objectives';

class Landing extends Component {
    render() {
        return (
            <div>
                <Header />
                <About />
                <Objectives />
            </div>
        )
    }
}


export default Landing;