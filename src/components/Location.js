import React, { Component } from 'react'
import data from '../data.json'

const GoogleMapsAPIKey = 'AIzaSyDwbatDc7VrHFQ6otlJ-ocwSmbs3hTWFg4'

class Location extends Component {

  render () {
    const location = data.locations.find(l => l.slug === this.props.params.slug)
    return (
      <div>
        <h2>{location.name}</h2>
        <div className='google-maps'>
          <iframe width='600' height='450' frameBorder='0' style={{border: 0}}
            src={`https://www.google.com/maps/embed/v1/place?q=place_id:${location.mapPlaceId}&key=${GoogleMapsAPIKey}`} allowFullScreen />
        </div>
        <p>{location.name}</p>
        <table>
          <tbody>
            {location.hours.map((period, j) => {
              return (
                <tr key={j}>
                  <th>{period.days}</th>
                  <td>{period.hours}</td>
                </tr>
                )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Location
