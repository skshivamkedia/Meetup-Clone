import { Stack } from 'expo-router';
import { View,Text,Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import EvenLisItem from '~/components/EventListItem';

export default function Events() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />

      {/* Event list item */}
      <EvenLisItem></EvenLisItem>
      <EvenLisItem></EvenLisItem>
    </>
  );
}

