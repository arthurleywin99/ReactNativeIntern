/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef, useState} from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

function App(): JSX.Element {
  const scaleRef = useRef(new Animated.Value(1)).current;
  const scaleNumber = useRef(1);

  const [colorChange, setColorChange] = useState(false);
  // const [sizeChange, setSizeChange] = useState(false);

  const onPressHandler = (): void => {
    setColorChange(prev => !prev);
  };

  const onLongPressHandler = (): void => {
    // setSizeChange(prev => !prev);
    if (scaleNumber.current === 1) {
      scaleNumber.current = 1.5;
      Animated.timing(scaleRef, {
        toValue: 1.5,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    } else {
      scaleNumber.current = 1;
      Animated.timing(scaleRef, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={onPressHandler}
        onLongPress={onLongPressHandler}>
        <Animated.Image
          style={[
            styles.image,
            colorChange && styles.colorChange,
            {
              transform: [{scale: scaleRef}],
            },
          ]}
          source={require('./assets/background.png')}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    tintColor: 'red',
  },
  colorChange: {
    tintColor: 'yellow',
  },
});

export default App;
