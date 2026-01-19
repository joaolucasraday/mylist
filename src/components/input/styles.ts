import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const styles = StyleSheet.create({
    boxInput:{
        width:'100%',
        height:40,
        borderWidth:1,
        marginTop:10,
        borderRadius:40,
        paddingHorizontal:5,
        backgroundColor:themas.colors.lightGray,
        borderColor:themas.colors.lightGray
    },
    input:{
        height:'100%',
        width:'100%',
        borderRadius:40,
        paddingLeft:5
    },
    titleInput:{
        marginTop:20,
        marginLeft:5,
        color:themas.colors.gray
    },
})