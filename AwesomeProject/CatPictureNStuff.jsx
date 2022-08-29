import React, {useState} from 'react'
import {View, Button, StyleSheet } from 'react-native';
import Cat from './components/Cat'
import CatImage from './components/CatImage';

const CatPictureNStuff = ({navigation}) => {
    const [view, setView] = useState(false)

    const handleView = () => view? setView(false): setView(true);

    return (
        <View style={styles.container}>
            <Cat name='KaREN' age={22} birth={1999}/>
            <Button onPress={handleView} title={view? "Click me to close!": "Click me to view"}/>
            {view?<CatImage/>:""}
            <Button title='On to the next page!' onPress={() => navigation.navigate('Form')}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 70
    }
})

export default CatPictureNStuff