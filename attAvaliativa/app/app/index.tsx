import React from 'react';
import {Link} from 'expo-router';
import {View, Text, Image, StyleSheet, Button} from 'react-native';

export default function Index(){
    return (
        <View style = {estilo.container}>
            <Image source={require("@/assets/images/Skibidi_sigma.jpg")} style={estilo.texto}/>
            <Text style = {estilo.texto}>Bem vindo à Skibidi Sigma enterprises!</Text>
            <Link href= "/sobre" style= {estilo.botao}> sobre</Link>
        </View>
        
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        padding: 20,
        margin: 20
    },
    btnGroup:{
        flexDirection: "row",
        justifyContent: 'center',
        gap: 10,
        marginTop: 20
    },
    botao: {
        fontSize: 17,
        backgroundColor: '#0000FF',
        color: '#FFFFFF',
        borderRadius: 3,
        padding: 17,
    }
})