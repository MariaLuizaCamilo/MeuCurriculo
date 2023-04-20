import React from "react";
import{View, Text, Button} from 'react-native'

const Habilidade = ({navigation}) => {
    return(
        <View> 
            <Text> Nezuko pode inflamar seu sangue, transformando-os em chamas envolventes. Ela é capaz de controlar suas chamas para ser letal ou não letal à vontade.</Text>

            <Button 
                title="Home"
                onPress={ () => navigation.navigate('Home') }
            />
        </View>
    );
}

export default Habilidade;