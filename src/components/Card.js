import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const Card = ({onPress}) => {
    return(
        <View style={styles.Card}>
            <View style={styles.Header}>
                <View style={styles.Profile} />
                <Text>Rafael Augusto</Text>
            </View>

            <View style={styles.Content}>
                <Image 
                    source={{uri: 'http://hinova.com.br/wp-content/uploads/2018/04/104300870-steve_jobs.1910x1000.jpg'}}
                    resizeMode="contain"
                    style={styles.Image}
                />

                <Text style={styles.Text}>
                    Steven Paul Jobs (/dʒɒbz/; February 24, 1955 – October 5, 2011) was an American business magnate and investor. He was the chairman, chief executive officer (CEO), and co-founder of Apple Inc.; chairman and majority shareholder of Pixar; a member of The Walt Disney Company's board of directors following its acquisition of Pixar; and the founder, chairman, and CEO of NeXT.
                </Text>
            </View>

            <TouchableOpacity 
                onPress={() => onPress()}
                style={styles.Share}
            >
                <Text style={styles.TextColor}>Share</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Card: {
        backgroundColor: '#fff',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    Header: {
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10
    },  
    Profile: {
        width: 30,
        height: 30,
        backgroundColor: '#666',
        borderRadius: 50,
        marginRight: 10
    },
    Content: {},
    Image: {
        height: 200
    },
    Share: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#e1e1e1',
        marginTop: 10
    },
    TextColor: {
        fontWeight: '500',
        color: '#666'
    },
    Text: {
        padding: 10,
        fontSize: 13,
        color: '#333'
    }
})

export { Card } 