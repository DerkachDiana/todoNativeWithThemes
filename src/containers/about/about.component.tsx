import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { InfoBox } from './components/infoBox';
import { useTranslation } from 'react-i18next';
export const AboutComponent = () => {
  const { t } = useTranslation();
  return (
    <View style={ styles.container }>
      <Image
        style={ styles.image }
        source={ require('../../assets/images/company.jpg') }
      />
      <InfoBox
        title={ t('translation.aboutScreen.companyNameTitle') }
        description={ t('translation.aboutScreen.companyNameDescription') }
      />
      <InfoBox
        title={ t('translation.aboutScreen.biographyTitle') }
        description={ t('translation.aboutScreen.biographyDescription')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    borderRadius: 100,
    width: 100,
    height: 100,
    marginVertical: 20,
  },
});
