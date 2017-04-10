import React from 'react';

import IconButton from './IconButton.js';
import MapIcon from '../public/map-5-xxl.png';
import MicIcon from '../public/microphone-3-xxl.png';
import GearIcon from '../public/gear-2-xxl.png';

class Main extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div style={styles.container}>
                <IconButton path='map' size='20vw' backgroundColor='#93c47d' color='#434343' icon={MapIcon}/>
                <IconButton path='search' size='30vw' backgroundColor='#ffd966' color='#434343' icon={MicIcon}/>
                <IconButton path='settings' size='20vw' backgroundColor='#6fa8dc' color='#434343' icon={GearIcon}/>
            </div>
        );
  }
}
const styles = {
    container:{
        display:'flex',
        flexDirection: 'row',
        flex: 1,
        width: '100vw',
        height: '100vh',
        backgroundColor: "#434343",
        alignItems: 'center',
        justifyContent: 'space-around',
    }
}
export default Main;