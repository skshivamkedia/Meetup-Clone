import { Stack } from 'expo-router';
import { View,Text,Image,FlatList } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import EvenLisItem from '~/components/EventListItem';

import events from '~/assets/events.json';

export default function Events() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />

      <FlatList 
      className='bg-white'
        data={events}
        renderItem={({item})=> <EvenLisItem event={item} />}
      />

      {/* Event list item */}
      {/* <EvenLisItem event={events[1]} /> */}
    </>
  );
}

