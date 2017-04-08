import React from 'react';

import Hamburger from './Hamburger.js';

class MapScreen extends React.Component {
    render(){
        return(
            <div style={styles.container}>
                <Hamburger/>
                <div style={styles.newsReel}/>
                <div style={styles.speed}>
                    <div style={styles.tripTime}/>
                    <div style={styles.fuel}/>
                </div>
                <div style={styles.stop}/>
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
    stop:{
        position:'absolute',
        bottom:'1%',
        right:'1%',
        width:'10vw',
        height:'10vw',
        borderRadius: '10%',
        backgroundColor:'red'
    },
    newsReel:{
        width:'100%',
        height:'4vw',
        backgroundColor: "#93c47d"
    },
    speed:{
        position:'absolute',
        bottom:'0',
        width:'16vw',
        height:'16vw',
        borderRadius:'50%',
        backgroundColor: "#93c47d"
    },
    tripTime:{
        position:'absolute',
        top:'-62%',
        width:'10vw',
        height:'10vw',
        borderRadius:'50%',
        backgroundColor: "#93c47d"
    },
    fuel:{
        position:'absolute',
        bottom:0,
        left:'100%',
        width:'10vw',
        height:'10vw',
        borderRadius:'50%',
        backgroundColor: "#93c47d"  
    }
}

export default MapScreen;