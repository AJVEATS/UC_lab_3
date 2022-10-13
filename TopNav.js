import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TopNav = () => {
    return (
        <View style={styles.topNavContainer}>
            <Text style={styles.topNavTitle}>BBC NEWS</Text>
            <View style={styles.topNav}>
                <Text style={styles.topNavItem}>Top Stories</Text>
                <Text style={styles.topNavItem}>My News</Text>
                <Text style={styles.topNavItem}>Popular</Text>
                <Text style={styles.topNavItem}>Video</Text>
            </View>
        </View>
    )
}

export default TopNav

const styles = StyleSheet.create({
    topNavContainer: {
        backgroundColor: '#b80000',
        width: '100%',
        paddingBottom: '4%',
        paddingTop: '2%'
    },
    topNavTitle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '4%',
        fontSize: 20,
    },
    topNav: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    topNavItem: {
        color: 'white',
        fontWeight: 'bold'
    }
})