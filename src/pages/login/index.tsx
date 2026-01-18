import React from "react";
import { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { style } from "./styles"
import Logo from "../../assets/logo.png"

export default function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    async function getLogin(){
        try {

            if(!email || !password){
                return Alert.alert('Atenção', 'Informe os campos obrigatórios!')
            }
            if(email == 'lucasraday@gmail.com' && password == '123456') {
                Alert.alert('Logado com sucesso')
            }else {
                Alert.alert('Senha ou usuários incorretos')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxtop}>
                <Image source={Logo} style={style.logo} resizeMode="contain"/>
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>
            <View style={style.boxmid}>
                <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
                <View style={style.boxInput}>
                    <TextInput 
                    style={style.input}
                    value={email}
                    onChangeText={setEmail}/>
                </View>
                <Text style={style.titleInput}>SENHA</Text>
                <View style={style.boxInput}>
                    <TextInput 
                    style={style.input}
                    value={password}
                    onChangeText={setPassword}/>
                </View>
            </View>
            <View style={style.boxbottom}>
                <TouchableOpacity style={style.button} onPress={()=>getLogin()}>
                    <Text style={style.textButton}>Entrar</Text>
                </TouchableOpacity>
                <Text style={style.textBottom}>Não tem conta? <Text style={style.textBottomCreate}>Crie agora!</Text></Text>
            </View>
        </View>
    )
}