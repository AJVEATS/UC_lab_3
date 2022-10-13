import { StyleSheet, Image, View, Text, Pressable } from 'react-native'
import React from 'react'

const NewsCardRow = () => {

    let randomNumber = Math.floor(Math.random() * 100) + 1;

    return (
        <Pressable style={styles.cardRowContainer}>
            <View style={styles.cardRowImageContainer}>
                <Image source={{ uri: `https://picsum.photos/200/300?random=${randomNumber}` }} style={styles.cardRowImage} />
            </View>
            <View style={styles.cardRowTextContainer}>
                <Text style={styles.cardRowTitle}>Even less important</Text>
                <View style={styles.cardRowSubTitle}>
                    <Text style={styles.cardRowSubTitleText}>3h | North America</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default NewsCardRow

const styles = StyleSheet.create({
    cardRowContainer: {
        width: '95%',
        height: 100,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom: '3%'
    },
    cardRowImageContainer: {
        width: '40%',
        height: '100%',
        backgroundColor: 'white'
    },
    cardRowImage: {
        width: '100%',
        height: '100%',
    },
    cardRowTextContainer: {
        width: '60%',
        marginHorizontal: '2%',
        marginTop: '1%'
    },
    cardRowTitle: {
        color: 'black',
        fontWeight: 'bold',
    }
})