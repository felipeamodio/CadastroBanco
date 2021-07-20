import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Switch, TouchableOpacity} from 'react-native';

import {Picker} from '@react-native-community/picker';
import Slider from '@react-native-community/slider';

export default function Cadastro(){
    const [selectGender, setSelectGender] = useState(0);
    const [gender, setGender] = useState([
        {key: 1, nome: 'Feminino'},
        {key: 2, nome: 'Masculino'},
        {key: 3, nome: 'Outro'},
    ]);
    const [value, setValue] = useState(100);
    const [student, setStudent] = useState(true)

    let genderItems = gender.map((value, key) => {
        return <Picker.Item key={key} value={key} label={value.nome} />
    })

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Faça seu cadastro abaixo 👇🏼 </Text>

            <View style={styles.containerInput}>
                <TextInput 
                    style={styles.input}
                    placeholder="Seu nome"
                />
                
                <TextInput 
                    style={[styles.input, {marginLeft: 10}]}
                    placeholder="Sua idade"
                    keyboardType="numeric"
                />
            </View>

        <View style={styles.genderContainer}>
         <Text style={styles.genderTxt}>Informe seu sexo</Text>
         <Picker
            selectedValue={selectGender}
            onValueChange={(itemValue, itemIndex) => setSelectGender(itemValue)}
            style={styles.picker}
         >
            {genderItems}
         </Picker>
        </View>

        <View style={styles.sliderContainer}>
            <Text style={styles.sliderTxt}>Informe seu limite de crédito</Text>
            <Slider 
                minimumValue={100}
                maximumValue={10000}
                value={value}
                onValueChange={(selectValue) => setValue(selectValue)}
                maximumTrackTintColor="#FFFFFF"
                minimumTrackTintColor="#32CD32"
            />
            <Text style={styles.valueTxt}>R$ {value.toFixed(2)}</Text>
        </View>

        <View style={styles.studentContainer}>
            <Text style={styles.studentTxt}>Estudante</Text>
            <Switch 
                style={styles.student}
                value={student}
                onValueChange={(valorSelecionado) => setStudent(valorSelecionado)}
                trackColor={{false: '#FFFFFF', true: '#00FF00'}}
            />
        </View>

{/** FALTA TERMINAR O BOTÃO */}
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTxt}>Cadastrar</Text>
        </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 15
    },
    containerInput: {
        marginTop: 27,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        backgroundColor: '#FFFFFF',
        padding: 8,
        width: 170,
        height: 45,
        textAlign: 'center',
        borderRadius: 5
    },
    genderContainer: {
        marginTop: 33
    },
    genderTxt: {
        fontSize: 18,
        fontWeight: '500',
    },
    picker: {
        marginTop: -28,
    },
    sliderTxt: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10
    },
    valueTxt: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
    },
    studentContainer: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    studentTxt: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center'
    },
    button: {
        marginTop: 67,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00FF00',
        height: 47,
        borderRadius: 5
    },
    buttonTxt: {
        fontSize: 22,
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
})