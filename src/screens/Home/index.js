import { StyleSheet, Text, View, useColorScheme, SafeAreaView, StatusBar, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { IL_Grapes_PNG, IC_Search, IC_Drinks, IC_Fruits, IC_Vegetables, IC_Bakery, IC_Bakery2, IL_Tomato_PNG, IL_Greentea_PNG, IL_Cauliflawer_PNG } from '../../res'
import Header from '../../components/molecules/Header';
import { colors, fonts } from '../../res';
import BoxItemCategories from '../../components/molecules/BoxItemCategories';
import { BoxItemTopProduct, Gap } from '../../components';

const Home = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dataTopProducts = [
    {
      name: 'Grapes',
      icons: IL_Grapes_PNG,
      bgColor: 'rgba(227, 206, 243, 0.5)',
      price: 1.53,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error vero possimus quis eligendi nam! Eligendi, excepturi. Iure, facilis? Nesciunt expedita quae obcaecati perferendis repellat dolore nam odit libero ex atque!"
    },
    {
      name: 'Tomato',
      icons: IL_Tomato_PNG,
      bgColor: 'rgba(255, 234, 232, 0.5)',
      price: 1.53,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error vero possimus quis eligendi nam! Eligendi, excepturi. Iure, facilis? Nesciunt expedita quae obcaecati perferendis repellat dolore nam odit libero ex atque!"
    },
    {
      name: 'Drinks',
      icons: IL_Greentea_PNG,
      bgColor: 'rgba(187, 208, 136, 0.5)',
      price: 1.53,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error vero possimus quis eligendi nam! Eligendi, excepturi. Iure, facilis? Nesciunt expedita quae obcaecati perferendis repellat dolore nam odit libero ex atque!"
    },
    {
      name: 'Cauliflower',
      icons: IL_Cauliflawer_PNG,
      bgColor: 'rgba(140, 250, 145, 0.5)',
      price: 1.53,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error vero possimus quis eligendi nam! Eligendi, excepturi. Iure, facilis? Nesciunt expedita quae obcaecati perferendis repellat dolore nam odit libero ex atque!"
    },
    {
      name: 'Grapes',
      icons: IL_Grapes_PNG,
      bgColor: 'rgba(227, 206, 243, 0.5)',
      price: 1.53,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error vero possimus quis eligendi nam! Eligendi, excepturi. Iure, facilis? Nesciunt expedita quae obcaecati perferendis repellat dolore nam odit libero ex atque!"
    },
    {
      name: 'Tomato',
      icons: IL_Tomato_PNG,
      bgColor: 'rgba(255, 234, 232, 0.5)',
      price: 1.53,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error vero possimus quis eligendi nam! Eligendi, excepturi. Iure, facilis? Nesciunt expedita quae obcaecati perferendis repellat dolore nam odit libero ex atque!"
    },
    {
      name: 'Drinks',
      icons: IL_Greentea_PNG,
      bgColor: 'rgba(187, 208, 136, 0.5)',
      price: 1.53,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error vero possimus quis eligendi nam! Eligendi, excepturi. Iure, facilis? Nesciunt expedita quae obcaecati perferendis repellat dolore nam odit libero ex atque!"
    },
    {
      name: 'Cauliflower',
      icons: IL_Cauliflawer_PNG,
      bgColor: 'rgba(140, 250, 145, 0.5)',
      price: 1.53,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error vero possimus quis eligendi nam! Eligendi, excepturi. Iure, facilis? Nesciunt expedita quae obcaecati perferendis repellat dolore nam odit libero ex atque!"
    },

  ]
  return (
    <SafeAreaView style={styles.flex1}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.flex1}>
        <Header drawer />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Search Bar Start */}
          <View style={{ paddingHorizontal: 10 }}>
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

              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollViewCategories}>
                <BoxItemCategories icon={<IC_Fruits />}
                  color="rgba(169,178,169,0.5)"
                  text="Fruits"
                  onPress={() => navigation.navigate('Categories', 'Fruits')}
                />
                <BoxItemCategories icon={<IC_Vegetables />}
                  color="rgba(233,255,210,0.5)"
                  text="Vagetables"
                  onPress={() => navigation.navigate('Categories', 'Vagetables')}
                />
                <BoxItemCategories icon={<IC_Drinks />}
                  color="rgba(140,175,53,0.5)"
                  text="Drinks"
                  onPress={() => navigation.navigate('Categories', 'Drinks')}
                />
                <BoxItemCategories icon={<IC_Bakery />}
                  color="rgba(214,255,218,0.5)"
                  text="Bakery"
                  onPress={() => navigation.navigate('Categories', 'Bakery')}
                />
                <BoxItemCategories icon={<IC_Bakery2 />}
                  color="rgba(255,250,204,0.5)"
                  text="Bakery"
                  onPress={() => navigation.navigate('Categories', 'Bakery')}
                />
              </ScrollView>
            </View>
            {/* Category End */}
            <Gap height={24} />

            <View style={styles.wrapperHeadToTopProducts}>
              <Text style={styles.tittleTopProducts}> Top Products</Text>
              <TouchableOpacity>
                <Text style={styles.textSeeAll}>See All</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sectionBoxTopProducts}>
              {
                dataTopProducts.map((item, index) => {
                  return (
                    <BoxItemTopProduct key={index}
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
    padding: 20
  },
  wrapperHeadToTopProducts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  tittleTopProducts: {
    color: colors.primary,
    fontFamily: fonts.SemiBold,
    fontSize: 20
  },
  textSeeAll: {
    color: colors.black,
    fontFamily: fonts.Medium,
    fontSize: 12
  },
  scrollViewCategories: {
    paddingLeft: 20
  },
  sectionBoxTopProducts: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
})