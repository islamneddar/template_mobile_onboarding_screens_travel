import React from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {
  onboardingImage1,
  onboardingImage2,
  onboardingImage3,
} from '../../constants/images';

const dummyData = [
  {
    title: "Let's Tarvelling",
    description:
      'Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text',
    image: onboardingImage1,
  },
  {
    title: 'Navigation',
    description:
      'Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text',
    image: onboardingImage2,
  },
  {
    title: 'Destination',
    description:
      'Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text',
    image: onboardingImage3,
  },
];

const OnBoarding = () => {
  const scrollX = new Animated.Value(0);

  const renderContent = () => {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment={'center'}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}>
        {dummyData.map((item, index) => (
          <View key={index} style={styles.containerOnboardingImage}>
            <View style={styles.viewImageOnBoarding}>
              <Image
                source={item.image}
                resizeMode="cover"
                style={styles.imageDimension}
              />
            </View>
            <View style={styles.containerTitleDescription}>
              {
                // the title goes here
              }
              <Text style={styles.titleStyle}>{item.title}</Text>
              {
                // the descreption goes here
              }
              <Text style={styles.descriptionStyle}>{item.description}</Text>
            </View>
            <TouchableOpacity
              style={styles.skipButton}
              onPress={() => console.log('skip')}>
              <Text>Skip</Text>
            </TouchableOpacity>
          </View>
        ))}
      </Animated.ScrollView>
    );
  };

  const DotView = Animated.createAnimatedComponent(View);

  const renderDots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={styles.dotContainer}>
        {dummyData.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 17, SIZES.base],
            extrapolate: 'clamp',
          });
          return (
            <DotView
              key={`dot-${index}`}
              style={[
                styles.dot,
                {width: dotSize, height: dotSize, opacity: opacity},
              ]}
            />
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>{renderContent()}</View>
      <View style={styles.dotsContainer}>{renderDots()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  imageDimension: {
    width: '100%',
    height: '100%',
  },
  containerOnboardingImage: {
    width: SIZES.width,
  },
  viewImageOnBoarding: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTitleDescription: {
    position: 'absolute',
    bottom: '10%',
    left: 40,
    right: 40,
  },
  titleStyle: {
    ...FONTS.h1,
    color: COLORS.gray,
    textAlign: 'center',
  },
  descriptionStyle: {
    ...FONTS.body3,
    textAlign: 'center',
    marginTop: SIZES.base,
    color: COLORS.gray,
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.blue,
    marginHorizontal: SIZES.radius / 2,
  },
  dotContainer: {
    flexDirection: 'row',
    height: SIZES.padding,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotsContainer: {
    position: 'absolute',
    bottom: SIZES.height > 700 ? '30%' : '20%',
  },
  skipButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 150,
    height: 60,
    justifyContent: 'center',
    paddingLeft: 20,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: COLORS.blue,
  },
});

export default OnBoarding;
