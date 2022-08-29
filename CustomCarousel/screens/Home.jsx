import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Carousel from '../components/Carousel'

const Home = () => {
    return (
        <View style={styles.container}>
            <Carousel/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})