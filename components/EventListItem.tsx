import { View,Text,Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';

function EvenLisItem(){
    return (
        <View className='p-3 gap-3'>
        <View className='flex-row'>
          <View className='flex-1 gap-2'>
            <Text className='text-lg font-semibold uppercase text-amber-700'>
              Thu 5, Dec 12:49 PM</Text>
            {/* <Text style={{fontSize : 30, fontWeight : 'bold'}}>This is the title</Text> */}
            <Text className="text-xl font-bold" numberOfLines={2}>
              This is the title. This is a big</Text>
            <Text className='text-gray-700'>City hall</Text>
          </View>
        {/* event image */}
        <Image source={{uri : 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'}}
        className='aspect-video w-2/5 rounded-xl' />
        </View>

        <View className='flex-row gap-3'>
          <Text className=' mr-auto text-gray-700'>16 going</Text> 
          <Entypo name="share-alternative" size={24} color="gray" />
          <Feather name="bookmark" size={24} color="gray" />
        </View>
      </View>
    );
}

export default EvenLisItem;