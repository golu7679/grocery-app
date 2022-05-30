import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fonts, colors } from '../../../res'

const Button = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>Get Started</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary, height: 50, width: 259, borderRadius: 20, justifyContent: 'center', alignSelf: 'center'
    },
    text: { fontSize: 18, fontFamily: fonts.Medium, color: colors.white, textAlign: 'center' }
})