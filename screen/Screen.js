import { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native";
import Input from "./components/Input";

export default function Screen(){
    const [isInput, setIsInput] = useState(true);
    const [fuelQuantity, setFuelQuantity] = useState(null);
    const[kilometersQuantity, setKilometersQuantity] = useState(null);
    const[answer, setAnswer] = useState(null);

    const calculateFlow = () => {
        setAnswer((parseInt(fuelQuantity)/parseInt(kilometersQuantity)).toFixed(1));
        setIsInput(false);
    }

    const reset = () => {
        setFuelQuantity(null);
        setKilometersQuantity(null);
        setIsInput(true);
    }

    return(
        <>
        {isInput ? 
            <>
                <Text style={styles.text}>Средний расход топлива</Text>
                <Input arg={{
                    title: 'Я заливаю топлива',
                    text: fuelQuantity,
                    placeholder: 'количество топлива', 
                    units: 'л.', setText: setFuelQuantity
                    }} />
                <Input arg={{
                    title: 'и проезжаю', 
                    text: kilometersQuantity,
                    placeholder: 'количество километров', 
                    units: 'км.', setText: setKilometersQuantity
                    }} />
                <TouchableOpacity style={styles.button} onPress={calculateFlow}>
                    <Text style={{color:'white'}}>Расчитать расход</Text>
                </TouchableOpacity>
            </> : 
            <>
                {isNaN(answer) ? 
                    <Text>Расход топлива не удался. 8(</Text> :
                    <Text>Расход топлива {answer} на киломерт</Text>
                }
                <TouchableOpacity style={styles.button} onPress={reset}>
                    <Text style={{color:'white'}}>Сбросить</Text>
                </TouchableOpacity>
            </>
        } 
            
        </>
    )
}

const styles = StyleSheet.create({
    flexRow:{
        padding:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        maxWidth:400,
        flexWrap:'wrap',
        marginTop:20
    },
    text:{
        marginTop:15,
        fontSize:16,
        fontWeight:'400'
    },
    button:{
        marginTop:30,
        backgroundColor:'#545454',
        borderRadius:20,
        height:40,
        width:120,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
  });