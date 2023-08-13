import React from "react";
import { View, Text, StyleSheet,Button } from "react-native";


const ResultsShowScreen = ({navigation}) => { 
    const id = navigation.getParam('id')
    return (
        <View >
           <Text>Page détails</Text>
            <Text>{id}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ResultsShowScreen;