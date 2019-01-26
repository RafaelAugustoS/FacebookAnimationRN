import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { List, Header, Share } from './components'

class App extends Component {
    state = {
        isVisible: false
    }

    _share = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }


    render(){
        return(
            <View style={styles.Container}>
                <Header />
                
                <List 
                    onPress={this._share}
                />

                <Share 
                    visible={this.state.isVisible}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#C4CDE0'
    }
})

export default App