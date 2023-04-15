import React from "react";
import{View, Text, Button, Image, StyleSheet} from 'react-native'
import { ImageBackground } from "react-native-web";

const Home = ({navigation}) => {
    return(
        <View> 
            <Text style={estilo.titulo}> Meu curriculo</Text>
            

            <Image  style={estilo.Image} source={require('../imagens/download.jpg')}/>

           <Button  style={estilo.botaoum}
                title="Sobre"
                onPress={ () => navigation.navigate('Sobre') }
           />

            <Button
                title="Habilidade"
                onPress={ () => navigation.navigate('Habilidade') }
           />

          <Button
            title="Formação"
            onPress={ () => navigation.navigate('Formação') }
           />
        </View>
    
    );
}

const estilo = StyleSheet.create({

    botaoum:{
        fontSize:25,

    },

    titulo: {
        textAlign:"center",
        fontSize:"50px",
    },

    Image:{
        width:190,
        height:190,
        borderRadius:15,
        left:700,
    },

});

export default Home;