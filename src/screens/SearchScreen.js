import React, { useState } from "react";
import { View, Text, StyleSheet,ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from '../hooks/useResults';
import ResultsList from "../components/ResultsList";


const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi,results,errorMessage] = useResults();

    const filterResultByPrice = (price) => {
        //price == '$' ou '$$' ou '$$$'
        return results.filter(result=> {
            return result.price === price
        });
    }
    
    return (
        <View style={{paddingLeft: 15,flex:1}}>
            <SearchBar 
            term={term} 
            onTermChange={setTerm} 
            onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
            <ResultsList title="Pas cher" results={filterResultByPrice('€')} />
            <ResultsList title="Un peu plus cher" results={filterResultByPrice('€€')} />
            <ResultsList title="Cher" results={filterResultByPrice('€€€')} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;