import React from 'react';

import Hamburger from './Hamburger.js';

class MapScreen extends React.Component {
    render(){
        return(
            <div style={styles.container}>
                <Hamburger/>
                <div style={styles.speed}/>
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
        backgroundColor: "#d9ead3"
    },
    speed:{
        position:'absolute',
        bottom:'0',
        width:'17vw',
        height:'17vw',
        borderRadius:'50%',
        backgroundColor: "#93c47d"
    }
}

export default MapScreen;