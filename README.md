[![NPM](https://nodei.co/npm-dl/react-native-parallax-scroll-opacity.png?height=2)](https://nodei.co/npm/react-native-parallax-scroll-opacity/)

# react-native-parallax-scroll-opacity

Reactnative a scrolling visual components, using ` HOC ` component encapsulation, convenient and reuse。

## Installation

```base
npm i react-native-parallax-scroll-opacity --save
```

## Quick Start

```jsx
// index.js

import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import DemoParallaxScrollOpacity from './DemoParallaxScrollOpacity.js';

class Demo extends Component {
  render() {
    return (
      <View style={Style.container}>
        <DemoParallaxScrollOpacity />
      </View>
    );
  }
}

export default Demo;
```

```jsx
// DemoParallaxScrollOpacity.js

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import ParallaxScrollOpacity from 'react-native-parallax-scroll-opacity'

class OpacityComponent extends Component {
  render() {
    return (
      <View style={{width: 200, height: 100, backgroundColor: 'red'}}>
        <Text>OpacityComponent</Text>
      </View>
    );
  }
}

class WrappedComponent extends Component {
  render() {
    return (
      <View style={{marginTop: 120}}>
        <Text>WrappedComponent</Text>
      </View>
    );
  }
}

export default ParallaxScrollOpacity(OpacityComponent)(WrappedComponent);
```

## Props

Prop | Type | Default | Description
---- | --- | --- | ---
containerStyle | Obejct | null | container style
opacityContainerStyle | Obejct | null | OpacityComponent style
contentContainerStyle | Obejct | null | WrappedComponent style

## Link
* [react-native-parallax-scroll-scale](https://github.com/geekwill/react-native-parallax-scroll-scale)

## Copyright

Copyright (c) 2017 [geekwill](http://www.geekcode.me/) Licensed under the MIT license.
