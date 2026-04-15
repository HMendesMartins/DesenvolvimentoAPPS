import {View, Text, StyleSheet, Image} from 'react-native';
import {Link} from 'expo-router'
export default function Index(){
    return (
        <View style = {estilo.container}>
            <Image source={require('@/assets/header_logo.svg')}></Image>
            <Text style = {estilo.titulo}>Perso Toques</Text>
            <Text style = {estilo.subtitulo}>bada! tsck!!</Text>
        <View style ={estilo.btnGroup}>
            <Text style={estilo.botao}>Skibidi</Text>
            <Text style={estilo.botao}>Sigma</Text>
        </View>
        </View>
    )
};
const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(0,0,0)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
    fontSize: 40,
    fontWeight: 700,
    color: 'white'
    },
    subtitulo: {
    fontSize: 25,
    fontWeight: 700,
    color: 'white'
    },
    botao: {
        fontSize: 17,
        backgroundColor: 'rgb(97, 219, 251)',
        color: 'black',
        borderRadius: 3,
        padding: 17,
    },
    btnGroup: {
        flexDirection: "row",
        justifyContent: 'center',
        gap: 10,
        marginTop: 20
    }
})