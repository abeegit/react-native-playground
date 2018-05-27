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
        let info = `The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.`;
        return (
            <View style={ styles.container }>
                <Text>Home</Text>
                <Button title="About" onPress={ () => navigate("About") } />
                <Button title="Contact" onPress={ () => navigate("Contact") } />

                <Alert message="This is a dummy alert" display={ this.state.showAlert } info={ info } />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})