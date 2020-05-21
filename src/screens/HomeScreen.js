import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import ActionButton from 'react-native-action-button';

import Item from '../components/Item';
import ViewContainer from './../components/ViewContainer';
import ChangeThemeButton from '../components/ChangeThemeButton';
import {FlatList} from 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {
  const theme = useContext(ThemeContext);

  const goToAddNoteScreen = () => {
    navigation.navigate('AddNoteScreen');
  };

  const items = [
    {
      id: 1,
      title: 'aaa',
      content: 'bbb',
    },
    {
      id: 2,
      title: 'ccc',
      content: 'ddd',
    },
    {
      id: 3,
      title: 'eee',
      content: 'fff',
    },
    {
      id: 4,
      title: 'eee',
      content: 'fff',
    },
    {
      id: 5,
      title: 'eee',
      content: 'fff',
    },
  ];

  return (
    <ViewContainer>
      <ChangeThemeButton />

      <ActionButton
        buttonColor={theme.button.background}
        onPress={goToAddNoteScreen}
        title="Add note"
      />

      <FlatList
        data={items}
        keyExtractor={item => item.id}
        numColumns="2"
        renderItem={({item}) => (
          <Item title={item.title} content={item.content} />
        )}
      />
    </ViewContainer>
  );
};

export default HomeScreen;
