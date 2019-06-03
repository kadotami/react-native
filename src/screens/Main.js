import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

type Props = {};
export default class Main extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          key: 1,
          name: '俺のフレンチ',
          date: '2019/06/01',
          place: '銀座',
          description: 'フォアグラ最高',
          image_url: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
        }, {
          key: 2,
          name: '海鮮丼',
          date: '2019/06/01',
          place: '築地',
          description: 'いくら最高',
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
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Photo Diary</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
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
