import {View, Text, StyleSheet} from 'react-native'
export default function Index() {
    return(
        <View style = {estilo.container}>
            <Text style={estilo.titulo}>login</Text>
        </View>
    )
}
const estilo = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
    },
    titulo: {
        fontSize: 32,
        
    }
})