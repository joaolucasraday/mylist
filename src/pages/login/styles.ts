import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    boxtop:{
        height:Dimensions.get("window").height/3,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    boxmid:{
        height:Dimensions.get("window").height/4,
        width:'100%',
        paddingHorizontal:37
    },
    boxbottom:{
        height:Dimensions.get("window").height/3,
        width:'100%',
        alignItems:'center',
    },
    logo:{
        width:80,
        height:80
    },
    text:{
        fontWeight:'bold',
        marginTop:40,
        fontSize:18
    },
    button:{
        width:250,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:themas.colors.primary,
        borderRadius:40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    textButton:{
        fontSize:16,
        color:'#FFF',
        fontWeight:'bold'
    },
    textBottom:{
        marginTop:150,
        fontSize:16,
        color:themas.colors.gray
    },
    textBottomCreate:{
        fontSize:16,
        color:themas.colors.primary
    }
})