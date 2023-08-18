import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import yelp from "../api/yelp";


const ResultsShowScreen = ({ route }) => {
    const id = route.params.id;
    const [result, setResult] = useState(null);

    const getResult = async (id) => {
        const reponse = yelp.get('/${id}');
        setResult(reponse.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if(!result){
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
      },
});

export default ResultsShowScreen;