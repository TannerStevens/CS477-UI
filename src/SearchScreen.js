import React from 'react';

import Hamburger from './Hamburger.js'
import IconButton from './IconButton.js'

class SearchScreen extends React.Component {
    render(){
        return(
            <div style={styles.container}>
                <div style={styles.topContainer}>
                    <Hamburger/>
                    <div style={styles.searchBarContainer}>
                        <textarea style={styles.searchBar}/>
                        <IconButton path='search' size='9vw' fontSize='1.5vmin' backgroundColor='#ffd966' color='#434343' icon='http://www.iconsdb.com/icons/preview/white/microphone-3-xxl.png'/>
                    </div>
                </div>
                <div style={styles.searchResults}/>
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
        backgroundColor: "#ffd966"
    },
    topContainer:{
        display:'flex',
        flexDirection: 'row',
    },
    searchBarContainer:{
        display:'flex',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    searchResults:{
        height:'94%',
        width:'96%',
        margin: '3% 2% 3% 2%',
        backgroundColor:'#fff2cc'
    },
    searchBar:{
        fontSize:'2.5vmin',
        width:'60vw',
        height:'5vw',
        backgroundColor:'#ffffff'
    }
}

export default SearchScreen;