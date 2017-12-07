import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { DrawerNavigation } from './../../navigation';
import styles from './AppStyle';




mapStateToProps = (state) => {
    return {
       
    }
}
mapDispatchToProps = (dispatch) => {
    return {
      
    }
}


class App extends Component {

    render() {
        const { Container } = styles;
        return (
            <View style={Container}>
                <DrawerNavigation />
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);