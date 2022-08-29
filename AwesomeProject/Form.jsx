import React, {useState} from 'react'
import {View, StyleSheet, Button, Text} from 'react-native'
import Input from './components/Input';

const Form = ({navigation}) => {
    const [inputView, setInputView] = useState(false);
    const [input, setInput] = useState("");

    const newInput = (input) => setInput(input);

    const handleForm = () => inputView? setInputView(false): setInputView(true);
    return (
        <View style={styles.container}>
            <Button onPress={handleForm} title={inputView? 'Click to close': 'Click to start form'}/>
            {inputView?
            <Input submit={newInput}/>:""}

            <Text>{input}</Text>

            <Button title='back to home!' onPress={()=> navigation.navigate('Home')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 70
    }
})

export default Form