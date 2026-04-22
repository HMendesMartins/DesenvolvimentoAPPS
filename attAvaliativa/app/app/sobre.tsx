import React from 'react'
import {Link} from 'expo-router'
import { View , Text, StyleSheet} from "react-native";

export default function Sobre() {
    return (
        <View style={estilo.container}>
            <Text style={estilo.titulo}>Quem Somos?</Text>
            <Text style={estilo.texto}>Por que ser sigma? Por que não? Foram essas as perguntas norteadoras de nosso projeto. Pois se sigma ser significa moggar, a todos melhor será a betisse, uma vez que, na troca de interesses, comum à sociedade, é necessário haver harmonia. Ser sigma é para poucos; para senhores de classe e respeito, que parecem moais e bebem vinho. Edit sigma de Patrick Bateman.</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        padding: 32,
    },
    titulo: {
        fontSize: 25,
        margin: 10,
        padding: 10
    },
    texto: {
        fontSize: 15,
        margin: 10,
    },
})