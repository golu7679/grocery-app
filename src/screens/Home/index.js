import { StyleSheet, Text, View, useColorScheme, SafeAreaView, StatusBar, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { IL_Grapes_PNG, IC_Search } from '../../res/images/Icons'
import Header from '../../components/molecules/Header';
import { colors, fonts } from '../../res';

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const dataTopProducts = [
    {
      name: 'Grapes',
      icons: IL_Grapes_PNG,
      bgColor: 'rgba(227, 206, 243,0.5)',
      price: 1.53,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error vero possimus quis eligendi nam! Eligendi, excepturi. Iure, facilis? Nesciunt expedita quae obcaecati perferendis repellat dolore nam odit libero ex atque!"
    },
    {
      name: 'Grapes',
      icons: IL_Grapes_PNG,
      bgColor: 'rgba(227, 206, 243,0.5)',
      price: 1.53,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error vero possimus quis eligendi nam! Eligendi, excepturi. Iure, facilis? Nesciunt expedita quae obcaecati perferendis repellat dolore nam odit libero ex atque!"
    },
    {
      name: 'Grapes',
      icons: IL_Grapes_PNG,
      bgColor: 'rgba(227, 206, 243,0.5)',
      price: 1.53,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error vero possimus quis eligendi nam! Eligendi, excepturi. Iure, facilis? Nesciunt expedita quae obcaecati perferendis repellat dolore nam odit libero ex atque!"
    },
    {
      name: 'Grapes',
      icons: IL_Grapes_PNG,
      bgColor: 'rgba(227, 206, 243,0.5)',
      price: 1.53,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error vero possimus quis eligendi nam! Eligendi, excepturi. Iure, facilis? Nesciunt expedita quae obcaecati perferendis repellat dolore nam odit libero ex atque!"
    },

  ]
  return (
    <SafeAreaView style={styles.flex1}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.flex1}>
        <Header drawer />
        <ScrollView>
          {/* Search Bar Start */}
          <View style={{ paddingHorizontal: 20 }}>
            <View style={styles.wrapperSearch}>
              <TextInput placeholder='Search' style={styles.textInputSearch} />
              <IC_Search />
            </View>
            {/* Search Bar End */}

            {/* Category Start */}

            <View>
              <Text style={styles.titleCategories}>
                Categories
              </Text>
            </View>

            {/* Category End */}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Home;

const styles = StyleSheet.create({
  flex1: {
    flex: 1
  },
  wrapperSearch: {
    height: 40,
    backgroundColor: colors.lightGrey,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25
  },
  titleCategories: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
    color: colors.primary,
    padding: 20,

  }
})