import React from 'react'
import { View, Text } from "react-native";

const Cat = (props) => {
    const {name, age, birth} = props;
    return (
        <View>
            <Text>I my name is {name}, I am {age} years old, I was born on {birth}</Text>
        </View>
    )
}

export default Cat