import React, { Component } from 'react';
import {
  View,
  Animated,
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default OpacityComponent => WrappedComponent => {
  return class extends Component {
    state = {
      animatedValue: new Animated.Value(1)
    };
    render() {
      const { animatedValue } = this.state;

      /**
       * 位移动画值
       * Displacement animation value
       */
      let translateY = animatedValue.interpolate({
        inputRange: [-100, 0, 100],
        outputRange: [0, 0, -50]
      });

      /**
       * 不透明动画值
       * Opaque animation value.
       */
      let opacity = animatedValue.interpolate({
        inputRange: [-100, 0, 100],
        outputRange: [1, 1, 0]
      });

      /**
       * 缩放动画值
       * Scale animation value
       */
      let scale = animatedValue.interpolate({
        inputRange: [-100, 0, 150],
        outputRange: [1, 1, 0]
      });

      let event = Animated.event([
        {
          nativeEvent: {
            contentOffset: {
              y: animatedValue
            }
          }
        }
      ]);
      const {
        user,
        image,
        containerStyle,
        opacityContainerStyle,
        contentContainerStyle
      } = this.props;
      return (
        <View style={[styles.container, containerStyle]}>
          <Animated.View
            style={[
              styles.graphic,
              opacityContainerStyle,
              {
                transform: [{ translateY }, { scale }],
                opacity
              }
            ]}
          >
            <OpacityComponent {...this.props} />
          </Animated.View>
          <ScrollView
            onScroll={event}
            scrollEventThrottle={16}
            contentContainerStyle={[contentContainerStyle]}
          >
            <WrappedComponent {...this.props} />
          </ScrollView>
        </View>
      );
    }
  };
};
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flex: 1
  },
  graphic: {
    width,
    opacity: 1
  }
});

