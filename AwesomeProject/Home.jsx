import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';


const getFullName = (fName, sName, tName) => `${fName} ${sName} ${tName}`;

const Home = ({navigation}) => {
    const [bigInput, setBigInput] = useState('');

    const name = "Alex Miller"


    return (
        <View style={styles.container}>
            <Text>Hello, I am {name}</Text>
            <Text>Hello, I am your cat</Text>
            <Text>Hello {getFullName("George", "Kevin", "Sarah")}!</Text>
            <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} defaultValue="name me!" onChangeText={e => setBigInput(e)}/>
            <Text style={{color: 'green', fontSize: '75px'}}>{bigInput}</Text>
            <Button title='Click me to go to the next page' onPress={() => navigation.navigate('CatPictureNStuff')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 70
    }
})

export default Home