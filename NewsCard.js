import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const NewsCard = () => {
    return (
        <Pressable style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
                <Image source={{ uri: "https://picsum.photos/200/300?random=8" }} style={styles.cardImage} />
            </View>
            <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>This is a main headline</Text>
                <View style={styles.cardSubTitle}>
                    <Text style={styles.cardSubTitleText}>3h | Europe</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default NewsCard

const styles = StyleSheet.create({
    cardContainer: {
        width: '95%',
        height: 225,
        backgroundColor: 'white',
        marginVertical: '3%'
    },
    cardImageContainer: {
        width: '100%',
        height: '70%',
    },
    cardImage: {
        width: '100%',
        height: '100%',
    },
    cardTextContainer: {
        width: '95%',
        height: '30%',
        margin: '2%'
    },
    cardTitle: {
        fontWeight: 'bold'
    },
    cardSubTitle: {
        fontWeight: 'bold',
    },
    cardSubTitleText: {

    }
})