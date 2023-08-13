import React from "react";
import { View, Image,Text,StyleSheet } from "react-native";

const ResultsDetails = ({result}) => {
    return <View style={styles.container}>
        <Image style={styles.image} source={{uri: result.image_url}}/>
        <Text style={styles.name}>
            {result.name}
        </Text>
        <Text>
            {result.rating} Etoiles, {result.review_count} Avis
        </Text>
    </View>
};

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultsDetails;