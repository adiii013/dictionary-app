import React,{useState} from "react";
import { View, Text , Button } from "react-native";

function Search_Result(props) {
    const [initialArray,finalArray] = useState({origin:""});
    console.log(props.dataToPass);
    async function getData(){
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/hen`
        let data = await fetch(url);
        let changeData = await data.json();
        finalArray({"origin":changeData[0].origin});  
    }
    
    return (
        <View>
            <View>
                <Button title="Click" onPress={getData}></Button>
                <Text>{initialArray.origin}</Text>
            </View>
        </View>
    );
}

export default Search_Result;