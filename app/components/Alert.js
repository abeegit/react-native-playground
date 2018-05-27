import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Animated,
    Image,
    TouchableOpacity
} from 'react-native';
import close from './../assets/icons/close.png';

export default class Alert extends React.Component {

    bottomOffset = 60;

    constructor() {
        super();

        this.bottom = new Animated.Value(-60);

        this.close = this.close.bind(this);
        this.onLayout = this.onLayout.bind(this);
        this.expand = this.expand.bind(this);
    }

    componentDidUpdate() {
        if ( this.props.display ) {
            this.open();
        } else {
            this.close();
        }
    }

    onLayout({ nativeEvent }) {
        let { layout } = nativeEvent;
        this.bottomOffset = layout.height;
    }

    expand() {

    }

    open() {
        Animated.spring(
            this.bottom,
            {
                toValue: 5,
                duration: 250
            }
        ).start(setTimeout.bind(this, this.close, 3000));
    }

    close() {
        Animated.spring(
            this.bottom,
            {
                toValue: -this.bottomOffset,
                duration: 250
            }
        ).start();
    }

    render() {
        return this.props.display ? (
            <Animated.View style={[ styles.container, { bottom: this.bottom } ]} onLayout={ this.onLayout }>
                <TouchableOpacity style={ styles.dismissContainer } onPress={ this.close }>
                    <Image source={ close } style={ styles.dismiss } />
                </TouchableOpacity>
                <View style={ styles.messageContainer }>
                    <Text style={ styles.message }>{ this.props.message }</Text>
                    {
                        this.props.info ? 
                            (
                                <TouchableOpacity onPress={ this.expand } style={ styles.infoContainer }>
                                    <Text style={ styles.info }>i</Text>
                                </TouchableOpacity>
                            ) : <Text></Text>
                    }
                </View>
            </Animated.View>
        ) : <View></View>;
    }
}

const styles = StyleSheet.create({
    container: {
        minHeight: 40,
        backgroundColor: "#f2f2f2",
        position: "absolute",
        left: 5,
        right: 5,
        flex: 1,
        flexDirection: "row",
        paddingLeft: 20,
        paddingRight: 20
    },
    messageContainer: {
        width: "90%",
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
        flexDirection: "row"
    },
    dismissContainer: {
        width: "10%",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    message: {
        color: "darkgrey",
        fontSize: 16,
        fontWeight: "700"
    },
    dismiss: {
        
    },
    infoContainer: {
        borderWidth: 1,
        borderRadius: 12.5,
        width: 25,
        height: 25,
        borderColor: "darkgrey",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10
    },
    info: {
        color: "darkgrey",
        fontSize: 18,
        fontWeight: "900",
    }
})