import React, { useState } from 'react';

import { Alert, FlatList } from 'react-native';

import { ThemeProvider } from 'styled-components';



import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import CategoryList from '../../components/CategoryList';
import StreamList from '../../components/StreamList';
import ChannelList from '../../components/ChannelList';
import Globais from '../../../src/Global';



import { Wrapper, Container, Main } from './styles';
import light from '../../styles/light';
import dark from '../../styles/dark';
import data from '../../components/CategoryList/data';

import Routes from '../../routes';


interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}


const Following: React.FC = () => {
  
  const { data, indices } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Following</Heading>
      },

      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title > Followed Categories </Title>,
        isTitle: true,
      },
      { key: 'C1', render: () => <CategoryList /> },

      {
        key: 'LIVE_CHANNELS',
        render: () => <Title> Live Channels </Title>,
        isTitle: true,
      },
      { key: 'C2', render: () => <StreamList /> },

      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title > Continue Watching </Title>,
        isTitle: true,
      },
      { key: 'C3', render: () => <StreamList /> },

      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title> Offline Channels </Title>,
        isTitle: true,
      },
      { key: 'C4', render: () => <ChannelList /> },
    ];

    const indices: number[] = [];

    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data: items,
      indices,
    };

  }, []);
  
  return (

   
      <Wrapper>
        <Container>
          <Header toogleTheme={Globais.toogleTheme}
          theme = {Globais.theme}
          />
          <Main>
            <FlatList<Item>
              data={data}
              renderItem={({ item }) => item.render()}
              keyExtractor={item => item.key}
              stickyHeaderIndices={indices}

              onRefresh={() => { }}
              refreshing={false}

            />

          </Main>


        </Container>
      </Wrapper>
    

  );
};


export default Following;

