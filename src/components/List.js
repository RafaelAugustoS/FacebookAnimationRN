import React, { PureComponent } from 'react'
import { ScrollView } from 'react-native'
import { Card } from './'

class List extends PureComponent {
    render(){
        return (
            <ScrollView>
                <Card 
                    onPress={this.props.onPress}
                />
            </ScrollView>
        )
    }
}

export { List }