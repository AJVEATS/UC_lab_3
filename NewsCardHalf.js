import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const NewsCardHalf = () => {
    return (
        <View style={styles.cardHalfContainer}>
            <View style={styles.cardHalfLeft}>
                <View style={styles.cardHalfImageContainer}>
                    <Image source={{ uri: "https://picsum.photos/200/300?random=1" }} style={styles.cardHalfImage} />
                </View>
                <View style={styles.cardHalfTextContainer}>
                    <Text style={styles.cardHalfTitle}>This is not as imporant</Text>
                    <View style={styles.cardHalfSubTitle}>
                        <Text style={styles.cardHalfSubTitleText}>3h | Asuia</Text>
                    </View>
                </View>
            </View>
            <View style={styles.cardHalfRight}>
                <View style={styles.cardHalfImageContainer}>
                    <Image source={{ uri: "https://picsum.photos/200/300?random=5" }} style={styles.cardHalfImage} />
                </View>
                <View style={styles.cardHalfTextContainer}>
                    <Text style={styles.cardHalfTitle}>This is not as imporant</Text>
                    <View style={styles.cardHalfSubTitle}>
                        <Text style={styles.cardHalfSubTitleText}>3h | Asuia</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default NewsCardHalf

const styles = StyleSheet.create({
    cardHalfContainer: {
        width: '95%',
        height: '25%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardHalfLeft: {
        width: '49%',
        height: '100%',
        backgroundColor: 'white',
    },
    cardHalfRight: {
        width: '49%',
        height: '100%',
        backgroundColor: 'white',
    },
    cardHalfImageContainer: {
        width: '100%',
        height: '70%'
    },
    cardHalfImage: {
        width: '100%',
        height: '100%',
    },
    cardHalfTextContainer: {
        width: '95%',
        height: '30%',
        margin: '2%'
    },
    cardHalfTitle: {
        fontWeight: 'bold'
    },
    cardHalfSubTitle: {
        fontVariant: 'small-caps'
    }
})