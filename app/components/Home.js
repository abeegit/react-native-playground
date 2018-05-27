import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import Alert from './Alert';

export default class HomeScreen extends React.Component {
    state = { showAlert: false };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ showAlert: true });
        }, 500);
    }

    render() {
        let { navigate } = this.props.navigation;
        return (
            <View style={ styles.container }>
                <Text>Home</Text>
                <Button title="About" onPress={ () => navigate("About") } />
                <Button title="Contact" onPress={ () => navigate("Contact") } />

                <Alert message="This is a dummy alert" display={ this.state.showAlert } />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})