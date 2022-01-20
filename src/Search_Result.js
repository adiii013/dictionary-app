import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import Search_Bar from "./Search_Bar";
function Search_Result() {

    const [initialArray, finalArray] = useState({ origin: "" });
    const [initialName,finalName] = useState('');
   
    async function getData() {
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${initialName}`
        let data = await fetch(url);
        let changeData = await data.json();
        finalArray({ "origin": changeData[0].origin });
    }

    return (
        <View>
            <Search_Bar
              initialName = {initialName}
              newTermChange = {newTerm=>finalName(newTerm)}
            ></Search_Bar>

            <View>
                <Button title="Click" onPress={getData}></Button>
                <Text>{initialArray.origin}</Text>
            </View>
        </View>
    );
}

export default Search_Result;