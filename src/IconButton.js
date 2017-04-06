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
                    borderRadius: '50%',
                    backgroundColor: this.props.backgroundColor,
                    color: this.props.color,
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                buttonIcon:{
                    width:'50%',
                    height:'50%',
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
                <Link to={'/'.concat(this.state.path).concat('/')} style={this.state.styles.button}>
                    <img style={this.state.styles.buttonIcon} src={this.state.icon}/>
                    <p>
                        {this.state.path}
                    </p>
                </Link>
            </div>
        );
  }
}
export default IconButton;