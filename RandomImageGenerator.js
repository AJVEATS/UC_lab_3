import { StyleSheet, Button, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'


const RandomImageGenerator = (props) => {
    let RandomNumber = Math.floor(Math.random() * 100) + 1;

    const [refreshImage, setRefreshImage] = useState("https://picsum.photos/200/300")



    return (
        <View>
            <Pressable onPress={() => { setRefreshImage(`https://picsum.photos/200/300?random=${RandomNumber}`); }} title={'New image'} style={styles.container}>
                <Image source={{ uri: refreshImage }} style={{ width: '100%', height: undefined, aspectRatio: 1, borderRadius: 10, borderColor: 'white' }} />
            </Pressable>
        </View >
    )
}

export default RandomImageGenerator

const styles = StyleSheet.create({
    container: {
        width: '80%',
        elevation: 5
    }
})