import React from "react";
import { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { style } from "./styles"
import Logo from "../../assets/logo.png"
import { Input } from "../../components/input";
import { Button } from "../../components/button";

export default function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [showPassword] = useState(true);
    const [loading,setLoading] = useState(false);

    async function getLogin(){
        try {
            setLoading(true)

            if(!email || !password){
                return Alert.alert('Atenção', 'Informe os campos obrigatórios!')
            }
            setTimeout(()=>{
                if(email == 'lucasraday@gmail.com' && password == '123456') {
                    Alert.alert('Logado com sucesso')
                }else {
                    Alert.alert('Senha ou usuários incorretos')
                }
                setLoading(false)
            },2000)
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
                <Input
                    value={email}
                    onChangeText={setEmail}
                    title="ENDEREÇO DE E-MAIL"/>
                <Input
                    value={password}
                    onChangeText={setPassword}
                    title="SENHA"
                    secureTextEntry={showPassword}/>
            </View>
            <View style={style.boxbottom}>
                <Button
                    text="ENTRAR"
                    loading={loading}
                    onPress={()=>getLogin()}/>
                <Text style={style.textBottom}>Não tem conta? <Text style={style.textBottomCreate}>Crie agora!</Text></Text>
            </View>
        </View>
    )
}