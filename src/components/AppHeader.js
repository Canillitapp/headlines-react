import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Body, Right, Button, Icon, Title } from 'native-base';
export default function AppHeader() {
  return (
    <Header hasTabs>
      <Body>
        <Title>Canillitapp</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name="search" />
        </Button>
      </Right>
    </Header>
  );
}
