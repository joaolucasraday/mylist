import React, { forwardRef, Fragment, LegacyRef } from "react";
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { styles } from "./styles";
import { themas } from "../../global/themes";
import MaterialIcons from "@react-native-vector-icons/material-icons";


type Props = TextInputProps & {
    title?: string
}

export const Input = forwardRef((Props:Props, ref: LegacyRef<TextInput> | null)=>{

const {title, ...rest} = Props

    return (
        <Fragment>
            <Text style={styles.titleInput}>{title}</Text>
            <View style={styles.boxInput}>
                <TextInput 
                style={styles.input}
                {...rest}
                />
            </View>
        </Fragment>
    )
})