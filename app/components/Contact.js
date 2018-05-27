import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Animated,
    ScrollView,
    Keyboard
} from 'react-native';
import Alert from './Alert';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: "Contact Us"
    };

    state = {
        name: "",
        phone: "",
        email: "",
        message: "",
        counter: new Animated.Value(0)
    };

    constructor() {
        super();

        this.keyboardWillShow = this.keyboardWillShow.bind(this);
        this.keyboardWillHide = this.keyboardWillHide.bind(this);
    }

    keyboardWillShow(event) {
        Animated.timing(
            this.state.counter,
            {
                duration: event.duration,
                toValue: event.endCoordinates.height
            }
        ).start();
    }

    keyboardWillHide(event) {
        Animated.timing(
            this.state.counter,
            {
                duration: event.duration,
                toValue: 0
            }
        ).start();
    }

    componentDidMount() {
        this.keyboardWillShowSub = Keyboard.addListener("keyboardWillShow", this.keyboardWillShow);
        this.keyboardWillHideSub = Keyboard.addListener("keyboardWillHide", this.keyboardWillHide);
    }

    componentWillUnmount() {
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
    }

    render() {
        let { counter } = this.state;
        return (
            <Animated.ScrollView style={[ styles.container, { marginBottom: counter } ]}>
                <Alert message="This is a dummy alert"/>
                <View style={ styles.row }>
                    <Text style={ styles.label }>Name</Text>
                    <TextInput 
                        onChangeText={ text => this.setState({ name: text }) } 
                        value={ this.state.name } 
                        style={ styles.textInput } 
                        autoFocus={ true } />
                </View>
                <View style={ styles.row }>
                    <Text style={ styles.label }>Mobile Number</Text>
                    <TextInput 
                        onChangeText={ text => this.setState({ phone: text }) } 
                        value={ this.state.phone } 
                        style={ styles.textInput } 
                        />
                </View>
                <View style={ styles.row }>
                    <Text style={ styles.label }>Email</Text>
                    <TextInput 
                        onChangeText={ text => this.setState({ email: text }) } 
                        value={ this.state.email } 
                        style={ styles.textInput }
                        />
                </View>
                <View style={ styles.row }>
                    <Text style={ styles.label }>Message</Text>
                    <TextInput 
                        onChangeText={ text => this.setState({ message: text }) } 
                        value={ this.state.message } 
                        style={ styles.textInput } 
                        />
                </View>
                <View style={ styles.row }>
                    <Text style={ styles.label }>Email</Text>
                    <TextInput 
                        onChangeText={ text => this.setState({ email: text }) } 
                        value={ this.state.email } 
                        style={ styles.textInput }
                        />
                </View>
                <View style={ styles.row }>
                    <Text style={ styles.label }>Email</Text>
                    <TextInput 
                        onChangeText={ text => this.setState({ email: text }) } 
                        value={ this.state.email } 
                        style={ styles.textInput }
                        />
                </View>
                <View style={ styles.row }>
                    <Text style={ styles.label }>Email</Text>
                    <TextInput 
                        onChangeText={ text => this.setState({ email: text }) } 
                        value={ this.state.email } 
                        style={ styles.textInput }
                        />
                </View>
            </Animated.ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        flexDirection: "column"
    },
    row: {
        height: 100,
        flex: 1,
        flexDirection: "column"
    },
    label: {
        fontSize: 18,
        fontWeight: "500"
    },
    textInput: {
        width: "100%",
        fontSize: 25,
        backgroundColor: "#F2F2F2",
        borderBottomWidth: 1,
        borderBottomColor: "black",
        height: 60
    }
});