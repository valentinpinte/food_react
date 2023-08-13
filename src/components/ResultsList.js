import React from "react";
import { View,Text,StyleSheet,FlatList,TouchableOpacity } from "react-native";
import ResultsDetails from "./ResultsDetails";
import { withNavigation } from "react-navigation";

const ResultsList = ({title,results,navigation}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
           <FlatList
            horizontal
            data={results}
            keyExtractor={(result) => {
                return result.id
            }}
            renderItem={({item})=>{
                return (
                <TouchableOpacity onPress={() => navigation.navigate('ResultsShow',{id: item.id})}>
                    <ResultsDetails result={item}/>
                </TouchableOpacity>
                )
            }}
            showsHorizontalScrollIndicator= {false}
           />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize:18,
        fontWeight: "bold",
        marginBottom:5
    },
    container:{
        marginVertical:10
    }
});

export default withNavigation(ResultsList);