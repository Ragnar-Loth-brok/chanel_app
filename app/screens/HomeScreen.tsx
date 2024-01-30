import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';

import ImageUI from '../components/home/ImageUI';

import {IMAGE_HEIGHT, IMAGE_URLS, MAX_LENGTH} from '../utils/dummy';
import {colors} from '../utils/colors';
import {common} from '../utils/preStyles';

export default function HomeScreen(): React.JSX.Element {
  const position = useSharedValue<number>(0);
  const updatedPosition = useSharedValue<number>(0);

  const pan = Gesture.Pan()
    .onUpdate(e => {
      if (
        position.value + updatedPosition.value + e.translationY < 50 &&
        updatedPosition.value + e.translationY >
          -(MAX_LENGTH - 2) * IMAGE_HEIGHT
      ) {
        updatedPosition.value = position.value + e.translationY;
      }
    })
    .onEnd(e => {
      if (position.value + e.translationY < -(MAX_LENGTH - 2) * IMAGE_HEIGHT) {
        // Do Nothing
        console.log('End of Slides');
      } else if (updatedPosition.value + e.translationY < 50) {
        position.value += e.translationY;
        const value = -Math.round(position.value / IMAGE_HEIGHT);
        updatedPosition.value = value * -IMAGE_HEIGHT;
      } else {
        position.value = 0;
        updatedPosition.value = 0;
      }
    });

  return (
    <View style={[common.full_screen, styles.container]}>
      <GestureDetector gesture={pan}>
        <View>
          {IMAGE_URLS.map(item => {
            return (
              <ImageUI
                updatedPosition={updatedPosition}
                imageData={item}
                key={item.id}
              />
            );
          })}
        </View>
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgP,
  },
});
