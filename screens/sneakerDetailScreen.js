import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';

export default function SneakerDetailScreen({ route, navigation }) {
    const { data } = route.params;

    const [sneakers, setSneakers] = useState([])
    const [searchValue, setSearchValue] = useState("");

    console.log(data)

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ padding: 10, }}>
                <View style={{ width: '100%', marginBottom: 10, }}>
                    <Image source={{ uri: data.thumbnail }} resizeMode="contain" style={{ width: '100%', aspectRatio: 1.5 }} />
                </View>
                <Text>"Part of a collection between the fashion house and Jordan Brand, the Dior x Air Jordan 1 High released in April 2020. The shoe's Italian leather upper appears in a mix of white and grey, with a Dior Oblique jacquard Swoosh contrasting the side wall. The tongue tag and 'Wings' logo sport co-branding, with further branding revealed by the icy translucent outsole.</Text>
            </ScrollView>
        </SafeAreaView>
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
        width: '90%',
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 100,
    },
    resultContainer: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
