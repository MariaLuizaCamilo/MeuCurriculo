import React from "react";
import{View, Text, Button} from 'react-native'

const Sobre = ([Navigation]) => {
    return(
        <View> 
            <Text> Sobre mim</Text>

            <Button 
                title="Home"
                onPress={ () => navigation.navigate('Home') }
            />
        </View>
    );
}

export default Sobre;