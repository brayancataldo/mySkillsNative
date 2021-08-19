import React, {useState} from 'react'
import { View, Text, TextInput,SafeAreaView } from 'react-native'
import { styles } from './styles.js'

export const Login = () => {

    const [text, setText] = useState()

    function onChangeText(e){
        setText(e.target.value);

    }

    return (
        <>
        <View style={styles.container}>
            <View style={styles.block}>
        <Text style={styles.text}> 
            Login
        </Text>
        <TextInput 
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Usuário">
        </TextInput>
        <TextInput 
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Senha">
        </TextInput>
        <Text style={styles.cadastro} >Cadastre-se agora</Text>
        </View>
        </View>
        </>
    )
}