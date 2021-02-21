import React, { Component } from 'react'

export default class HomeComponent extends Component {
    findTropicCount = () => {
        const trips = this.props.trips;
        let tropicCount = trips.reduce((count, trip) => {
            return count + (trip.type.toLowerCase() === 'tropic')
        }, 0);
        return tropicCount;
    }

    findTrekCount = () => {
        const trips = this.props.trips;
        let trekCount = trips.reduce((count, trip) => {
            return count + (trip.type.toLowerCase() === 'trek')
        }, 0);
        return trekCount;
    }

    findClubCount = () => {
        const trips = this.props.trips;
        let clubCount = trips.reduce((count, trip) => {
            return count + (trip.type.toLowerCase() === 'club')
        }, 0);
        return clubCount;
    }
    render() {
        if (this.props.trips) {
            return (
                <div>
                    <div className = "main">
                        <h1 className = 'numberOfTrips'>{this.props.trips} trips</h1>
                    </div>
                    <div className = 'images'>
                        <img src="https://img.icons8.com/wired/50/000000/sun.png" alt="tropic-img" />
                        <img src="https://img.icons8.com/ios-filled/50/000000/mountain.png" alt="trek-img" />
                        <img src="https://img.icons8.com/ios-filled/50/000000/bavarian-beer-mug.png" alt="club-img" />
                    </div>
                    <div className = 'counts'>
                        <h3>{this.findTropicCount()}Tropics</h3>
                        <h3>{this.findTrekCount()}Treks</h3>
                        <h3>{this.findClubCount()}Clubs</h3>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                <div className = 'main'>
                    <h1 className = 'numberOfTrips'>0 trips</h1>
                </div>
            </div>
            )
        }
    }
}