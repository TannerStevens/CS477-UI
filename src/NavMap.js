import React from 'react';
import {withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import _ from 'lodash';

class NavMap extends React.Component {
    render(){
        let markers;
        const GettingStartedGoogleMap = withGoogleMap(props => (
            <GoogleMap
                defaultZoom={17}
                defaultCenter={{ lat: 35.176206, lng: -111.657214 }}
            />
        ));

        return(
            <GettingStartedGoogleMap
                containerElement={
                    <div style={{ height:'100%',width:'100%' }} />
                }
                mapElement={
                    <div style={{ height:'100%',width:'100%' }} />
                }
            />
        );
    }
}
export default NavMap;