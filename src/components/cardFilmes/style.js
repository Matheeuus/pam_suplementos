import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({


    containerFilmes:{
        paddingTop:10,
        paddingBottom:16,
        paddingRight:16,
        paddingLeft:16,
        width:140,
        backgroundColor: '#900020',
        margin:5,
        alignItems:"center",
        borderRadius:10,

    },
    tituloFilmes:{
        color:'#fff',
        fontSize:17,
        paddingTop:8
    },
    notaFilmes:{
        fontSize:15,
        color:'#900020',
        backgroundColor:'#fff' ,
        borderRadius:7,
        alignItems:"center",
        fontWeight:'bold'
    },
    imagemFilmes:{
        width:'100%',
        height:170,
        borderRadius:8
    }
})

export default styles;