import React from "react";
import{View, Text, Button, StyleSheet} from 'react-native'
import { ImageBackground } from "react-native-web";

const Home = () => {
    return(
        <View> 
            <Text style={estilo.titulo}> Meu curriculo</Text>

           <Button
            title="Sobre"
            onPress={ () => navigation.navigate('Sobre') }
           />
        </View>
    
    );
}

const estilo = StyleSheet.create({
    titulo: {
        textAlign:"center",
        fontSize:"50px",
    },

});

export default Home;