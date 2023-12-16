import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Options = (props) => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{navigation.navigate('About')}}>
               <Text style={styles.options} >About</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.options}>More</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Options

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        width:100,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2,
        zIndex:3,
    },
    options:{
        padding:5,
        color:'red',
        fontSize:17
    }
})