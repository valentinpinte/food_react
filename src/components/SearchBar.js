import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Rechercher"
                style={styles.inputStyle}
                value={term}
                onChange={newTerm => onTermChange(newTerm.nativeEvent.text)}
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'lightblue',
        height: 50,
        borderRadius: 5,
        marginRight: 15,
        marginTop: 10,
        flexDirection: 'row',
        marginBottom:10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center'
    }
});

export default SearchBar;