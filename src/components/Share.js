import React, { Component } from 'react'
import { View, Animated, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'

class Share extends Component {
    state = {
        opacity: new Animated.Value(0),
        top: new Animated.Value(1000),
        bottom: new Animated.Value(-250),
        obg: [
            { id: 1, title: 'Share Now (Friends)', sub: 'Instantly share this post', image: require('../images/retweet.png') },
            { id: 2, title: 'Write Post', sub: '', image: require('../images/edit.png') },
            { id: 3, title: 'Send in Messenger', sub: '', image: require('../images/messenger.png') },
            { id: 4, title: 'Copy Link', sub: '', image: require('../images/clipboard.png') },
        ]
    }

    componentWillReceiveProps(nextProps){
        this.showMe(nextProps.visible)
    }

    onLoad = () => {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start()
    }

    showMe = (visible) => {
        Animated.sequence([
            Animated.timing(this.state.top, {
                toValue: visible ? 0 : 1000,
                duration: 0
            }),
            Animated.timing(this.state.opacity, {
                toValue: visible ? 1 : 0,
                duration: 10
            }),
            Animated.timing(this.state.bottom, {
                toValue: 0,
                duration: 400
            })
        ]).start()
    }

    handleItem = (item) => {
        return(
            <View style={styles.Item}>
                <Image 
                    source={item.image}
                    resizeMode="contain"
                    style={{width: 30, marginRight: 10, height: 20}}
                />

                <View>
                    <Text style={styles.TitleShare}>{ item.title }</Text>
                    <Text style={styles.SubShare}>{ item.sub }</Text>
                </View>
            </View>
        )
    }

    _keyExtractor = (item, index) => `item_${item.id}`

    render(){
        return(
            <Animated.View 
                style={[styles.Share, 
                    {
                        marginTop: this.state.top,
                        opacity: this.state.opacity,
                        transform: [
                            {
                                scale: this.state.opacity.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0.85, 1]
                                })
                            }
                        ]
                    }
                ]}
            >
                <Animated.View 
                    style={[styles.ShareCard,
                        {
                            bottom: this.state.bottom
                        }
                    ]} 
                >
                    <FlatList
                        data={this.state.obg}
                        renderItem={({item}) => this.handleItem(item)}
                        keyExtractor={this._keyExtractor}
                    />
                </Animated.View>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    Share: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },  
    ShareCard: {
        height: 250,
        backgroundColor: '#fff',
        position: 'absolute',
        width: '100%',
        left: 0
    },
    Item: {
        height: 60,
        padding: 5,
        flexDirection: 'row'
    },
    TitleShare: {
        fontSize: 17
    },
    SubShare: {
        color: '#444'
    }
})

export { Share }