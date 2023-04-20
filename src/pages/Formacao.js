import React from "react";
import{View, Text, Button} from 'react-native'

const Formacao = ({navigation}) => {
    return(
        <View> 
            <Text> Nesse momento, Nezuko é uma ameaça, não só para sua inimiga, mas para todos ao seu redor. Nesse estágio a garota atinge o nível de poder equivalente ao de uma Lua Superior entre as posições 4 e 5, então quando fora de controle, ela realmente é uma ameaça assustadora.</Text>

            <Button 
                title="Home"
                onPress={ () => navigation.navigate('Home') }
            />
        </View>
    );
}

export default Formacao;