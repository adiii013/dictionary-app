import React, { useState } from "react";
import { View, Text, Button, StyleSheet,  ScrollView } from "react-native";
import Search_Bar from "./Search_Bar";
function Search_Result() {

    const [initialArray, finalArray] = useState({
        word: "",
        partOfSpeech: "",
        meaning: "",
        origin: "",

    });
    const [initialName, finalName] = useState('');

    async function getData() {
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${initialName}`
        let data = await fetch(url);
        let changeData = await data.json();
        finalArray({
            "word": changeData[0].word,
            "partOfSpeech": changeData[0].meanings[0].partOfSpeech,
            "meaning": changeData[0].meanings[0].definitions[0].definition,
            "origin": changeData[0].origin
        });
    }

    return (
        <ScrollView>
            <View>
                <Search_Bar
                    initialName={initialName}
                    newTermChange={newTerm => finalName(newTerm)}
                ></Search_Bar>

                <View style={{width:100,alignSelf:'center'}}>
                    <Button title="Search"  onPress={getData} ></Button>
                </View>

                <View style={styles.container}>
                    <View style={styles.contentInformation}>
                        <Text style={styles.keyValue}>Word</Text>
                        <Text style={styles.pairValue}>{initialArray.word}</Text>
                    </View>
                    <View style={styles.contentInformation}>
                        <Text style={styles.keyValue}>Part of Speech</Text>
                        <Text style={styles.pairValue}>{initialArray.partOfSpeech}</Text>
                    </View>
                    <View style={styles.contentInformation}>
                        <Text style={styles.keyValue}>Origin</Text>
                        <Text style={styles.pairValue}>{initialArray.origin}</Text>
                    </View>
                    <View style={styles.contentInformation}>
                        <Text style={styles.keyValue}>Definition</Text>
                        <Text style={styles.pairValue}>{initialArray.meaning}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginTop: 20
    },
    contentInformation: {
        alignItems: 'center',
        padding: 10,
        marginBottom:20
    },
    keyValue: {
        fontSize: 25,
        fontWeight:'bold'
    },
    pairValue: {
        fontSize: 19,    
    },
    
})

export default Search_Result;