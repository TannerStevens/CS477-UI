import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class ProxySlider extends React.Component {
    render(){
        return(
            <div style={styles.container}>
                <p style={styles.label}>{this.props.label}</p>
                <div style={styles.slider}>
                    <Slider /> 
                </div>
            </div>
        );
    }
}
const styles = {
    container:{
        display:'flex',
        flexDirection: 'row',
        flex:1,
        alignItems:'center',
        color:'#434343',
    },
    slider:{
        width:'12vw'
    },
    label:{
        margin:'0 12px 0 0'
    }
}

export default ProxySlider;