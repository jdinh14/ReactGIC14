import React, { Component } from 'react';
import '../App.css';

export default class BasicInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [
            { name: 'Jerry Dinh', number: '70440x200x', dob: '09-02-1997' },
            { name: 'Alice Johnson', number: '70441x200x', dob: '10-12-1995' },
            { name: 'Michael Smith', number: '70442x300x', dob: '08-15-1990' },
            { name: 'Sofia Martinez', number: '70443x400x', dob: '06-22-1988' }]
        };
    }

    render() {
        return (
            <div>
                {this.state.people.map((person, index) => (
                    <div>
                       <h1><div>Name: {person.name}</div>
                        <div>Number: {person.number}</div>
                        <div>DOB: {person.dob}</div></h1> 
                    </div>
                ))}
            </div>
        );
    }
}

