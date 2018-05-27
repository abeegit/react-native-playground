import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Animated
} from 'react-native';

export default class Alert extends React.Component {
    constructor() {
        super();

        this.bottom = new Animated.Value(-60);
    }

    componentDidUpdate() {
        if ( this.props.display ) {
            Animated.timing(
                this.bottom,
                {
                    toValue: 0,
                    duration: 250
                }
            ).start();
        } else {
            Animated.timing(
                this.bottom,
                {
                    toValue: -60,
                    duration: 250
                }
            ).start();
        }
    }

    render() {
        return this.props.display ? (
            <Animated.View style={[ styles.container, { bottom: this.bottom } ]}>
                <View style={ styles.dismissContainer }>
                    <Text style={ styles.dismiss }>x</Text>
                </View>
                <View style={ styles.messageContainer }>
                    <Text style={ styles.message }>{ this.props.message }</Text>
                </View>
            </Animated.View>
        ) : <View></View>;
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        backgroundColor: "#f2f2f2",
        position: "absolute",
        left: 0,
        right: 0,
        flex: 1,
        flexDirection: "row",
        paddingLeft: 20,
        paddingRight: 20
    },
    messageContainer: {
        width: "80%",
        justifyContent: "center"
    },
    dismissContainer: {
        width: "20%",
        alignItems: "center",
        justifyContent: "center"
    },
    message: {
        color: "darkgrey",
        fontSize: 16,
        fontWeight: "700"
    }
})