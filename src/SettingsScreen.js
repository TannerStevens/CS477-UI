import React from 'react';

import Hamburger from './Hamburger.js';
import ProxySlider from './ProxySlider.js'

class SettingsScreen extends React.Component {
    render(){
        return(
            <div style={styles.container}>
                <div style={styles.topContainer}>
                    <Hamburger />
                    <div style={styles.login}>
                        <h2>Admin Login</h2>
                    </div>
                </div>
                <div style={styles.settingsContainer}>
                    <ProxySlider label='Brightness'/>
                    <ProxySlider label='Volume'/>
                </div>
            </div>
        );
    }
}
const styles = {
    container:{
        display:'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        backgroundColor: "#6fa8dc"
    },
    settingsContainer:{
        display:'flex',
        flexDirection: 'column',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    topContainer:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
    },
    login:{
        position:'relative',
        left:'75vw',
        backgroundColor:'#ffffff',
        alignItems:'center',
    }
}

export default SettingsScreen;