import React from "react";
import { View, Text } from "react-native";
import Search_Bar from "./Search_Bar";
import Search_Result from "./Search_Result";

function SearchScreen() {
    return (
        <View>
            <View>
                <Search_Bar></Search_Bar>
                 <Search_Result></Search_Result>
            </View>
        </View>
    );
}

export default SearchScreen;