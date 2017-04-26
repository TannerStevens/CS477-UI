import React from 'react';

import Hamburger from './Hamburger.js';
import NavMap from './NavMap.js';

class MapScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            styles:{
                container:{
                    display:'flex',
                    flexDirection: 'row',
                    flex: 1,
                    width: '100vw',
                    height: '100vh',
                    position:'absolute'
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
        }
    }

    render(){
        return(
            <div style={this.state.styles.container}>
                <div style={this.state.styles.container}>
                    <NavMap/>
                </div>
                <div style={this.state.styles.container}>
                    <Hamburger/>
                    <div style={this.state.styles.newsReel}/>
                    <div style={this.state.styles.speed}>
                        <div style={this.state.styles.tripTime}/>
                        <div style={this.state.styles.fuel}/>
                    </div>
                    <button style={this.state.styles.stop} onClick={()=>{
                        this.state.styles.container.backgroundColor = 'red';
                        this.setState(this.state);
                    }}/>
                </div>
            </div>
        );
    }
}

export default MapScreen;