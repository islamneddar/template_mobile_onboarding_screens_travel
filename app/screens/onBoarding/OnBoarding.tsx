import React from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
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
  const renderContent = () => {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment={'center'}
        showsHorizontalScrollIndicator={false}>
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
              <Text style={styles.titleStyle}>{item.title}</Text>
              <Text style={styles.descriptionStyle}>{item.description}</Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>{renderContent()}</SafeAreaView>
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
    bottom: '3%',
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
});

export default OnBoarding;
