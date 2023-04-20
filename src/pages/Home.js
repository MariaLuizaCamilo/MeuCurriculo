import React from "react";
import{View, Text, Button, Image, StyleSheet} from 'react-native'
import { ImageBackground } from "react-native-web";
import Botao from "../componentes/Botao";

const Home = ({navigation}) => {
    return(
        <View> 
            <Text style={estilo.titulo}> Meu curriculo</Text>
            

            <Image  style={estilo.Image} source={require('../imagens/download.jpg')}/>

        <View style={estilo.botoes}>
                <Botao titulo="Sobre" acao={ () => navigation.navigate('Sobre') } />  
        </View>

        <View style={estilo.botoes}>
                <Botao titulo="Habilidade" acao={ () => navigation.navigate('Habilidade') } />  
        </View>

        <View style={estilo.botoes}>
                <Botao titulo="Formação" acao={ () => navigation.navigate('Formacao') } />  
        </View>
       

       
    </View>     
    );
}

const estilo = StyleSheet.create({

    botoes:{
        textAlign:"center",
        fontSize:"30px",
        borderRadius:"5px",
        
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