import React from "react";
import{View, Text, Button} from 'react-native'
import Botao from '../componentes/Botao';

const Sobre = ({navigation}) => {
    return(
        <View> 
            <Text>  é uma das principais personagens de Demon Slayer: Kimetsu no Yaiba. Quando a conhecemos, ela é apenas uma humana vivendo com sua mãe e irmãos, mas já no primeiro episódio sua vida muda completamente… A irmã mais nova de Tanjiro agora é um oni cheia de mistérios sobre seu próprio poder e sobrevivência</Text>

            <Button 
                title="Home"
                onPress={ () => navigation.navigate('Home') }
            />
        </View>
    );
}

export default Sobre;