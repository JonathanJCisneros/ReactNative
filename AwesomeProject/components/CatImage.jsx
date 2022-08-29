import React, {useState} from 'react'
import {View, Image, Text, Button} from 'react-native'
import Cat from './Cat';

const CatImage = () => {
    const [details, setDetails] = useState(false);

    const handleDetails = () => details? setDetails(false): setDetails(true);

    return (
        <View>
            <Image source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}} style={{width: 200, height: 200}}/>
            <Text>Hello, this is your cat!</Text>
            <Button onPress={handleDetails} title={details? "Click to close":"Click to view details!"}/>
            {details?
                <Cat name="Fred" age={12} birth={22}/>:""
            }
        </View>
    )
}

export default CatImage;