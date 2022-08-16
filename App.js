// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback, //android only, working on views
  Image,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
} from 'react-native';

export default function App() {
  const handlePress = () => console.log('Text pressed');

  return (
    // SafeAreaView works only on IOS
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style='auto' /> */}

      <Text numberOfLines={2} onPress={handlePress}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse magni
        aut ut iste voluptate, molestias inventore aliquid quas quae ipsam
        eveniet alias blanditiis veniam necessitatibus dicta in minus corporis
      </Text>

      {/* Image API */}
      {/* <Image source={require('./assets/icon.png')} /> */}

      {/* TouchableOpacity for feedback on touch */}
      <TouchableOpacity onPress={() => console.log('image tapped')}>
        <Image
          blurRadius={1}
          fadeDuration={1000} // android only
          resizeMode='cover'
          source={{
            uri: 'https://picsum.photos/200/300',
            width: 200,
            height: 300,
          }}
        />
      </TouchableOpacity>

      {/* only for views on android */}
      <TouchableNativeFeedback>
        <View
          style={{
            width: 200,
            height: 70,
            backgroundColor: 'red',
            marginVertical: 2,
          }}
        ></View>
      </TouchableNativeFeedback>

      {/* buttons and alerts API*/}
      <Button
        color='orange'
        title='Click me'
        // onPress={() => alert('Button Tapped')}
        onPress={
          () =>
            Alert.alert('My title', 'My message', [
              { text: 'Yes', onPress: () => console.log('yes') },
              { text: 'No', onPress: () => console.log('no') },
            ])

          // read an input on Alert, only for IOS
          // Alert.prompt('My title', 'My message', (text) => console.log(text))
        }
      />

      {/* styles */}
      <View style={containerStyle}>
        <Text style={styles.exampleText}>StyleSheet</Text>
        <Text style={{ color: 'red', textAlign: 'center' }}>Inline style</Text>
        <Text
          style={[
            styles.customText,
            styles.exampleText,
            { color: 'lightgreen' },
          ]}
        >
          Multiple styles
        </Text>
      </View>
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: 'blue', width: 300, padding: 10 };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    // SafeAreaView works only on IOS
    //to put some padding on the top of Android we can use Platform.OS
    // paddingTop: Platform.OS === 'android' ? 50 : 0,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  exampleText: {
    color: 'white',
  },
  customText: {
    textDecorationLine: 'underline',
  },
});
