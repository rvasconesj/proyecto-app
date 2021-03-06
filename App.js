/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image, FlatList, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from './assets/colors';
import { categories } from './assets/data/categories'; 
import { popular } from './assets/data/popular';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  tittleWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  subtittle: {
    fontFamily: 'LatoLatin-Light',
    fontSize: 20,
    color: colors.textDatk,
  },
  tittle: {
    fontFamily: 'LatoLatin-Bold',
    fontSize: 50,
    color: colors.secondary,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginTop: 30,
  }, 
  search: {
    flex: 1,
    marginLeft: 10,
    borderColor: '#CDCDCD',
    borderBottomWidth: 1,
  },
  searchText: {
    fontFamily: 'LatoLatin-Light',
    fontSize: 16,
    marginBottom: 5,
  },
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
  fontFamily: 'LatoLatin-Bold',
  fontSize: 18,
  paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItemWrapper: {
    backgroundColor: '#E38574',
    marginRight: 20,
    borderRadius: 20,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontFamily: 'LatoLatin-Medium',
    fontSize: 18,
    marginTop: 20,
  },
  categorySelectWrapper:{
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginTop: 20,
    width: 30,
    height: 26,
    borderRadius: 30,
    marginBottom: 26,
  },
  categorySelectIcon: {
    alignSelf: 'center',
    borderRadius: 20,
  },
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontFamily: 'LatoLatin-Black',
    fontSize: 18,
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  popularTopText: {
    marginLeft: 10,
    fontFamily: 'LatoLatin-Medium',
    fontSize: 14,
  },
  popularCardWrapper: {
    backgroundColor: colors.textLight,
    borderRadius: 25,
    paddingTop: 20,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  popularTitleWrapper: {
    marginTop: 20,
    paddingLeft: 20,
  },
  popularTitlesTitle: {
    fontFamily: 'LatoLatin-Bold',
    fontSize: 15,
    color: colors.textDatk,
    },
  popularTitlesWeight: {
    fontFamily: 'LatoLatin-Medium',
    fontSize: 15,
    color: colors.primary,
  },
  popularCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  addProductBottom: {
    backgroundColor: colors.stars,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  rating: {
    fontSize: 14,
    fontFamily: 'LatoLatin-Medium',
    color: colors.textDatk,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 30,
  },
  popularCardImage: {
    width: 230,
    height: 148,
    resizeMode: 'contain',
   },
});


const App = () => {

  const renderCategoryItem = ({ item }) => (
    <View style={[
      styles.categoryItemWrapper, 
      {
      backgroundColor: item.selected ? colors.secondary : colors.white,
        marginLeft: item.id === 1 ? 20 : 0,
      },
    ]}>
      <Image style={styles.categoryItemImage} source={item.image} />
      <Text style={styles.categoryItemTitle}>{item.tittle}</Text>
      <View 
      style={[
        styles.categorySelectWrapper, 
        {
        backgroundColor: item.selected ? colors.white : colors.secondary, 
      }
      ]}>
      <Icon 
        name="heart" 
        size={15} 
        color={item.selected ? colors.secondary : colors.white} 
        style={styles.categorySelectIcon}
        />
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <ScrollView>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image 
          style={styles.profileImage} 
          source={require('./assets/images/profile01.jpg')} 
          />
          <Icon name="cloud" size={30} color={colors.textDatk} />
        </View>
      </SafeAreaView>
      <View style={styles.tittleWrapper}>
        <Text style={styles.subtittle}>Beauty</Text>
        <Text style={styles.tittle}>Phuyu Store</Text>
      </View>
      <View style={styles.searchWrapper}>
        <Icon name="search" size={25} color={colors.primary} />
        <View style={styles.search}>
          <Text style={styles.searchText}>Search</Text>
        </View>
      </View>
      <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}> Categories </Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList 
            data={categories} 
            renderItem={renderCategoryItem} 
            keyExtractor={item => item.id}
            horizontal={true} 
            />
          </View>
        </View>
        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>Popular</Text>
          {popular.map((item, index) => (
            <View 
            style={[styles.popularCardWrapper, 
              {
              marginTop: item.id === 1 ? 10 : 20,
            },
            ]}>
              <View>
                <View>
                  <View style={styles.popularTopWrapper}>
                  <Icon name="star" size={20} color={colors.stars} />
                  <Text style={styles.popularTopText}> Top de la Semana </Text>
                  </View>
                  <View style={styles.popularTitleWrapper}>
                    <Text style={styles.popularTitlesTitle}>Producto: {item.title}</Text>
                    <Text style={styles.popularTitlesWeight}>
                      Peso: {item.weight}
                      </Text>
                  </View>
                </View>
              <View style={styles.popularCardBottom}>
                <View style={styles.addProductBottom}>
                  <Icon name="plus" size={20} color={colors.textDatk} />
                </View>
                <View style={styles.ratingWrapper}>
                  <Icon name="star" size={15} color={colors.stars} />
                  <Text style={styles.rating}>{item.rating}</Text>
                </View>
              </View>
            </View>
            <View style={styles.popularCardRight}>
            <Image source={item.image} style={styles.popularCardImage}/> 
              </View>
          </View>  
          ))}
        </View>
        </ScrollView>
    </View>
  );
};


export default App;
