import React, { forwardRef, Fragment } from "react";
import { View, Text, TextInput } from 'react-native';
import { styles } from "./styles"

export const Input = forwardRef(()=>{
    return (
        <Fragment>
            <Text style={styles.titleInput}>ENDEREÇO DE E-MAIL</Text>
            <View style={styles.boxInput}>
                <TextInput 
                style={styles.input}/>
            </View>
        </Fragment>
    )
})