import React from 'react';
import {Link} from 'react-router-dom';

class IconButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            styles:{}
        }
    }

    setStyle(props){
        this.setState({
            styles:{
                button:{
                    display:'flex',
                    flexDirection: 'column',
                    flex: 1,
                    width:this.props.size.toString(),
                    height:this.props.size.toString(),
                    borderRadius: this.props.size/2,
                    backgroundColor: this.props.backgroundColor,
                    color: this.props.color,
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                buttonIcon:{
                    width:'50%',
                    height:'50%',
                    padding: '5'
                }
            },
            icon:this.props.icon,
            path:this.props.path
        });
    }

    componentDidMount(){
        this.setStyle(this.props);
    }

    componentWillReceiveProps(nextProps){
        this.setStyle(nextProps);
    }

    render() {
        return (
            <div>
                <div style={this.state.styles.button}>
                    <img style={this.state.styles.buttonIcon} src={this.state.icon}/>
                    <Link to={'/'.concat(this.state.path).concat('/')}>
                        {this.state.path}
                    </Link>
                </div>
            </div>
        );
  }
}
export default IconButton;