import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const CategoryCard = () => {
  return (
    <View style={styles.card}>
      <TouchableNativeFeedback
        onPress={() => console.log('onPress')}
        delayPressIn={15}
      >
        <View style={styles.cardContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>前端</Text>
            <Text style={styles.subtitle}>(10)</Text>
          </View>
          <Text style={styles.subtitle}>Front End</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

export default class CategoryScene extends Component {
  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#eee',
  },
  container: {
    padding: 4,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  card: {
    flex: 1,
    width: Dimensions.get('window').width * 0.4
  },
  cardContainer: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 4,
    elevation: 2,
    margin: 4,

  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    color: '#000',
    margin: 4,
  },
  subtitle: {
    fontSize: 12,
    color: '#999',
    marginLeft: 4
  },
})
