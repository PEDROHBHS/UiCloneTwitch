import React from 'react';

import streamThumbnail from '../../images/among.png';

import {
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from './styles';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>phbhzin</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Mais uma live jogando among us
          </StreamDescription>

          <StreamCategory>
            Games & Talk
          </StreamCategory>
        </StreamRow>


        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          
          <TagView>
            <TagText>Games</TagText>
          </TagView>
        
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  )

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
