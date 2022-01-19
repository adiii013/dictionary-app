import React from "react";
import { View , Text } from "react-native";
import Search_Bar from "./Search_Bar";

function SearchScreen(){
    return (
        <View>
            <Search_Bar></Search_Bar>
            <Text>Search screen</Text>
        </View>
    );
}

export default SearchScreen;