import { StyleSheet, Text, View, useColorScheme, StatusBar, SafeAreaView, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { BoxRelatedItem, Button, Gap, Header } from '../../components';
import { colors, fonts, IL_Grapes_PNG, IL_Pumpkin, IL_Cauliflawer_PNG, IL_RedOnion, IL_Brokoli, IL_Brinjal } from '../../res';
import { Counter } from '../../components';

const Details = ({ route, navigation }) => {
    const dataParams = route.params;
    const bgColor = route.params.bgColor;
    const isDarkMode = useColorScheme() === 'dark';
    const [totalItem, setTotalItem] = useState(1);


    const dataRelatedItems = [
        {
            name: 'Grapes',
            icons: IL_Grapes_PNG,
            bgColor: 'rgba(227, 206, 243, 0.5)',
            price: 1.53,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error vero possimus quis eligendi nam! Eligendi, excepturi. Iure, facilis? Nesciunt expedita quae obcaecati perferendis repellat dolore nam odit libero ex atque!"
        },
        {
            name: 'Pumpkin',
            icons: IL_Pumpkin,
            bgColor: 'rgba(255, 244,143, 0.5)',
            price: 1.53,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error vero possimus quis eligendi nam! Eligendi, excepturi. Iure, facilis? Nesciunt expedita quae obcaecati perferendis repellat dolore nam odit libero ex atque!"
        },
        {
            name: 'Brinjal',
            icons: IL_Brinjal,
            bgColor: 'rgba(238,224,248, 0.5)',
            price: 1.53,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error vero possimus quis eligendi nam! Eligendi, excepturi. Iure, facilis? Nesciunt expedita quae obcaecati perferendis repellat dolore nam odit libero ex atque!"
        },
        {
            name: 'Cauliflower',
            icons: IL_Cauliflawer_PNG,
            bgColor: 'rgba(14,250,145, 0.5)',
            price: 1.53,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error vero possimus quis eligendi nam! Eligendi, excepturi. Iure, facilis? Nesciunt expedita quae obcaecati perferendis repellat dolore nam odit libero ex atque!"
        },
        {
            name: 'Red Onion',
            icons: IL_RedOnion,
            bgColor: 'rgba(251,216,224, 0.5)',
            price: 1.53,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error vero possimus quis eligendi nam! Eligendi, excepturi. Iure, facilis? Nesciunt expedita quae obcaecati perferendis repellat dolore nam odit libero ex atque!"
        },
        {
            name: 'Brokoli',
            icons: IL_Brokoli,
            bgColor: 'rgba(140,250,145, 0.5)',
            price: 1.53,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error vero possimus quis eligendi nam! Eligendi, excepturi. Iure, facilis? Nesciunt expedita quae obcaecati perferendis repellat dolore nam odit libero ex atque!"
        }
    ]

    const onCounterChange = value => {
        setTotalItem(value);
    }

    return (
        <SafeAreaView style={styles.flex1(bgColor)}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View>
                {/* header */}
                <Header onPress={() => navigation.goBack()} />
                {/* image */}
                <View style={styles.wrapperImg}>
                    <Image source={dataParams.icons} style={styles.image} />
                </View>

                {/* content */}

                <View style={styles.content}>
                    <View style={styles.wrapperTopContent}>
                        <View style={styles.rowTopContent}>
                            <Text style={styles.name}>{dataParams.name}</Text>
                            <Counter onValueChange={onCounterChange} />
                        </View>

                        <Text style={styles.price}>
                            {dataParams.price} / kg
                        </Text>
                    </View>

                    {/* description */}
                    <Text style={styles.description}>{dataParams.description}</Text>
                    {/* related items */}

                    <View style={styles.wrapperRelatedItems}>
                        <Text style={styles.titleRelatedItems}>
                            Related Items
                        </Text>

                        {/* scroll view */}

                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.boxRelatedItems}>
                                {
                                    dataRelatedItems.map((item, index) => {
                                        return (
                                            <BoxRelatedItem
                                                key={index}
                                                image={item.icons}
                                                name={item.name}
                                                price={item.price}
                                                bgColor={item.bgColor}
                                            />
                                        )
                                    })
                                }
                            </View>
                        </ScrollView>
                    </View>

                    {/* cart button */}

                    <Gap height={50} />

                    <Button text="Add to cart" />

                </View>

            </View>
        </SafeAreaView>
    )
}

export default Details

const styles = StyleSheet.create({
    flex1: bgColor => ({
        flex: 1,
        backgroundColor: bgColor,
    }),
    wrapperImg: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 150,
        width: 150,
        resizeMode: 'contain'
    },
    content: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: 30,
        paddingTop: 34,
    },
    wrapperTopContent: {
        marginBottom: 28,
        paddingHorizontal: 20,
    },
    rowTopContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        fontFamily: fonts.SemiBold,
        fontSize: 20,
        color: 'black'
    },
    price: {
        fontFamily: fonts.Regular,
        fontSize: 14,
        color: colors.black
    },
    description: {
        paddingHorizontal: 20,
        color: colors.grey
    },
    wrapperRelatedItems: {
        marginTop: 25,
    },
    titleRelatedItems: {
        fontFamily: fonts.SemiBold,
        fontSize: 14,
        color: colors.primary,
        paddingHorizontal: 20,
    },
    boxRelatedItems: {
        flexDirection: 'row',
        marginTop: 20,
        paddingLeft: 20
    }
})