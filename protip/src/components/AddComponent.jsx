import React, { Component } from 'react';
export default class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: [],
            date: '',
            place: '',
            type: ''
        }
    }

    setDate = (e) => {
        this.setState({ ...this.state, date: e.target.value })
    }

    setPlace = (e) => {
        this.setState({ ...this.state, place: e.target.value })
    }

    setType = (e) => {
        this.setState({ ...this.state, type: e.target.value })
    }

    addTrip = (e) => {
        e.preventDefault();
        this.setState({
            trips: [...this.state.trips, {
                date: this.state.date,
                place: this.state.place,
                type: this.state.type
            }],
        });
    }

    render() {
        return (
            <div>
                <h1>Add Trip</h1>
                <form>
                    <h3>Date</h3>
                    <input type="date" onChange = {this.setDate}/>
                    <h3>Place</h3>
                    <input type="text" onChange = {this.setPlace}/>
                    <h3>Type</h3>
                    <select onChange = {this.setType}>
                        <option>Trek</option>
                        <option>Club</option>
                        <option>Tropic</option>
                    </select>
                    <br/>
                    <br/>
                    <button type="submit" onClick = {this.addTrip}>Submit</button>
                </form>
            </div>
        )
    }
}