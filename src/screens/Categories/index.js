import { StyleSheet, Text, View, useColorScheme, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { fonts, IL_Grapes_PNG, colors, IL_Pumpkin, IL_Brinjal, IL_Cauliflawer_PNG, IL_RedOnion, IL_Brokoli } from '../../res';
import { BoxItemTopProduct, Gap, Header } from '../../components'

const Categories = ({ route, navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const dataCategories = [
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
    ];
    return (
        <SafeAreaView style={styles.flex1}>
            <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
            <View style={styles.flex1}>
                {/* header section */}
                <Header back cart onPress={() => navigation.goBack()} />
                <View style={styles.wrapperTittle}>
                    <Text style={styles.tittle}>
                        {route.params}
                    </Text>
                </View>
                <Gap height={10} />
                {/* content */}

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.sectionBoxTopProduct}>
                        {
                            dataCategories.map((item, index) => {
                                return (
                                    <BoxItemTopProduct
                                        key={index}
                                        bgColor={item.bgColor}
                                        icon={item.icons}
                                        text={item.name}
                                        price={item.price}
                                        onPress={() => navigation.navigate('Details', item)}
                                    />
                                )
                            })
                        }
                    </View>
                </ScrollView>

            </View>
        </SafeAreaView>
    )
}

export default Categories

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    wrapperTittle: {
        paddingHorizontal: 20,
    },
    tittle: {
        fontSize: 29,
        fontFamily: fonts.SemiBold,
        color: colors.primary
    },
    sectionBoxTopProduct: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
})