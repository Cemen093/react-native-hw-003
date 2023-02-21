import { TextInput, StyleSheet, Text, View } from "react-native"
export default function Input({arg}){
    return(
        <>
            <Text style={styles.title}>{arg.title}</Text>
            <View style={styles.flexRow}>
                <TextInput
                    style={styles.input}
                    placeholder={arg.placeholder}
                    onChangeText={arg.setText}
                />
                <Text style={styles.units}>{arg.units}</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    title:{
        marginTop:5,
    },
    flexRow:{
        padding:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        maxWidth:400,
        flexWrap:'wrap',
        marginTop:0,
    },
    input:{
        marginTop:0,
        height:40,
        width:250,
        backgroundColor:'#f9f9f9',
        padding:10,
        borderRadius:5,
        elevation:0.2
    }, units:{
        marginLeft:15,
    }
  });