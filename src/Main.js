import React from 'react';

import IconButton from './IconButton.js'

class Main extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div style={styles.container}>
                <IconButton path='map' size={150} backgroundColor='#93c47d' color='#434343' icon='http://www.iconsdb.com/icons/preview/white/map-5-xxl.png'/>
                <IconButton path='search' size={265} backgroundColor='#ffd966' color='#434343' icon='http://www.iconsdb.com/icons/preview/white/microphone-3-xxl.png'/>
                <IconButton path='settings' size={150} backgroundColor='#6fa8dc' color='#434343' icon='http://www.iconsdb.com/icons/preview/white/gear-2-xxl.png'/>
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