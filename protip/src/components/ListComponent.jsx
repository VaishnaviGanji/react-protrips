import React, { Component } from 'react';

export default class ListComponent extends Component {
    getList = () => {
        const mapRows = this.props.trips.map((trip, index) => (
            <tr key={index} className="table-content">
                <td>{trip.date}</td>
                <td>{trip.place}</td>
                <td>{trip.type}</td>
            </tr>
        ))
        return mapRows;
    }
    render() {
        if (this.props.trips) {
            return (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Place</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.getList()}
                        </tbody>
                    </table>
                </div>
            )
        } 
        else {
            return (
                <div>
                    <h1>No trips yet!!</h1>
                </div>
            )
        }
    }
}