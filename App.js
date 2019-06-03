/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });



type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          key: 1,
          name: '俺のフレンチ',
          place: '銀座',
          description: 'フォアグラ最高',
          image_url: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
        }
      ]};
  }

  listItem({item}) {
    return (
      <View style={styles.item}>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: item.image_url}}
        />
        <Text>{ item.name }@{item.place}</Text>
        <Text>{ item.description }</Text>
      </View>
    );
  }
  render() {
    return (
      <View>
        <FlatList data={this.state.list} renderItem={this.listItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
