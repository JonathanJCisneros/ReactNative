import React, {useState} from 'react'
import { Text, TextInput, View, Button } from 'react-native';

const Input = (props) => {
    const [text, setText] = useState("");

    const handleInput = ()=>{
        props.submit(text);
    }
    return (
        <View style={{padding: 10}}>
            <Text>This is success</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Type here to start!"
                onChangeText={e => setText(e)}
            />
            <Button onPress={handleInput} title='Submit info'/>
        </View>
    )
}

export default Input