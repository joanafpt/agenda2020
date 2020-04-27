import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Button } from 'react-native';
//import axios from 'axios';
import ScreenStyles from '../constants/ScreenStyles';
import Buttons from '../constants/Buttons';
import Container from '../constants/Container';
import functions from '../functions/functions';

export default function ApiResults({ navigation }) {
    const [dataToRender, setDataToRender] = useState([]);

    const goBack = () => {
        navigation.navigate('Home');
    }

    const goTranche = () => {
        navigation.navigate('Tranche');
    }
    //serve p chamar a api
    const completeCallApi = () => {
        const complete = functions.getCompleteDataFromApi
        complete(cbFunction);

    }
    //serve p guardar o state
    const cbFunction = (data) => {
        setDataToRender(dataToRender => [...data]);
    }

    return (
        <View style={ScreenStyles.screen}>
            <View style={Container.container}>
                <View style={styles.intro}>
                    <Text style={styles.textIntro}>
                        Clique em 'Total', caso pretenda aceder
                        à lista completa dos seus compromissos
                        agendados, ou em 'Parcial', caso queira
                        definir um intervalo de tempo.
                </Text>

                </View>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={Buttons.firstButton}
                        onPress={completeCallApi}
                    >
                        <Text style={Buttons.buttonText}>Total</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={Buttons.secondButton}
                        onPress={goTranche}
                    >
                        <Text style={Buttons.buttonText}>Parcial</Text>
                    </TouchableOpacity>
                </View>

                <FlatList style={styles.flatList}
                    keyExtractor={(item => item._id)}
                    data={dataToRender}
                    renderItem={item => (
                        <View /*style={styles.flatlist}*/>
                            <Text style={styles.flatText}>
                                ID: {item.item['_id']} {"\n"}
                                    Compromisso: {item.item['Registo']}{"\n"}
                                    Data: {item.item['Data']}{"\n"}
                                    Hora: {item.item['Hora']} {"\n"}
                            </Text>
                        </View>
                    )}>
                </FlatList>
            </View>

            <Button title="Voltar" onPress={goBack} />
        </View>

    )
}


const styles = StyleSheet.create({

    buttonsContainer: {
        width: 300,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 5
    },
    flatList: {
        height: 200,
        backgroundColor: 'white',
        width: 250,
        borderWidth: 1,
        borderColor: '#B7B7B7',
        marginBottom: 50,
    },
    intro: {
        textAlign: 'center',
        backgroundColor: 'white',
        marginTop: 50,
        marginLeft: 45,
        marginRight: 45
    },
    textIntro: {
        fontSize: 15,
        lineHeight: 30,
        textAlign: 'justify'
    }
});

