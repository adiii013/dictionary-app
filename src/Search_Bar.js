import React ,{useState} from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';


function Search_Bar({term,newTermChange}) {



    return (
            <View style={styles.searchContainer}>
                <Feather name="search" style={styles.searchIcon}></Feather>
                <TextInput
                    placeholder='Enter Word'
                    style={styles.searchInput}
                    onChangeText={newTerm=>newTermChange(newTerm)}
                    defaultValue={term}
                ></TextInput>
            </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        marginHorizontal: 30,
        marginTop: 15,
        borderRadius: 10,
        backgroundColor: '#F0EEEE',
        height: 45,
    },
    searchIcon: {
        alignSelf: 'center',
        fontSize: 25
    },
    searchInput: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 10,
        paddingLeft: 10,
        fontSize: 20
    }
})

export default Search_Bar;