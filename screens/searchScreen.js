import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';

export default function SearchScreen({ navigation }) {
    const [sneakers, setSneakers] = useState([])
    const [searchValue, setSearchValue] = useState("");

    const searchSneaker = () => {
        let fetchData = async () => {
            fetch("https://1b6a-115-98-235-36.in.ngrok.io/search?sneaker=" + searchValue)
                .then(r => r.json())
                .then(r => {
                    setSneakers(r)
                })
        }
        fetchData();
    }
    return (
        <View style={styles.container}>
            <View style={{ width: '100%', padding: 10 }}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setSearchValue(text)}
                    placeholder="Search for a Sneaker"
                    value={searchValue}
                    onSubmitEditing={searchSneaker}
                />
            </View>
            <ScrollView style={{ width: '100%' }}>
                {
                    sneakers.map((data, index) => {
                        let price = "";
                        if ('lowestResellPrice' in data) price = "$" + Math.min(...Object.values(data.lowestResellPrice))

                        return <View key={index}>
                            <TouchableOpacity onPress={() => navigation.navigate('Sneaker', { data: data })}>
                                <View style={styles.resultContainer}>
                                    <Image source={{ uri: data.thumbnail }} resizeMode="contain" style={{ height: 100, width: 100, backgroundColor: 'transparent' }} />
                                    <View style={{ flex: 1, display: 'flex', marginLeft: 20 }}>
                                        <Text style={{ flexWrap: 'wrap', fontWeight: 'bold', marginBottom: 5 }}>{data.shoeName}</Text>
                                        <Text>{price}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: 1, backgroundColor: "#ddd" }} />
                        </View>
                    })
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#eee',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
    },
    resultContainer: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
