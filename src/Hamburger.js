import React from 'react';
import {Link} from 'react-router-dom';

class Hamburger extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Link to='/' style={styles.container}>
                <div style={styles.rec1}>
                </div>
                <div style={styles.rec2}>
                </div>
                <div style={styles.rec3}>
                </div>
            </Link>
        );
    }
}
const styles = {
    container:{
        display:'flex',
        flexDirection: 'column',
        width: '5vw',
        height: '5vw',
        backgroundColor: "#434343",
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    rec1:{
        width:'70%',
        height: '15%',
        backgroundColor: "#93c47d"
    },
    rec2:{
        width:'70%',
        height: '15%',
        backgroundColor: "#ffd966"
    },
    rec3:{
        width:'70%',
        height: '15%',
        backgroundColor: "#6fa8dc"
    },
}

export default Hamburger;