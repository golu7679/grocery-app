import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { colors } from '../../../res';

const BoxRelatedItem = ({ image, name, price, bgColor }) => {
    return (
        <TouchableOpacity style={styles.container(bgColor)}>
            <View style={styles.wrapperImage}>
                <Image source={image} style={styles.image} />
            </View>

            <View style={styles.wrapperDetails}>
                <View style={styles.rowDetails}>
                    <Text>{name}</Text>
                    <Text style={styles.price}>${price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default BoxRelatedItem;

const styles = StyleSheet.create({
    container: bgColor => ({
        height: 120,
        width: 120,
        backgroundColor: bgColor,
        borderRadius: 12,
        padding: 5,
        marginRight: 15,
    }),
    image: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
    },
    wrapperImage: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    wrapperDetails: {
        justifyContent: 'flex-end'
    },
    rowDetails: {
        backgroundColor: colors.white,
        height: 25,
        width: '100%',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    price: {
        fontSize: 12
    }
});
