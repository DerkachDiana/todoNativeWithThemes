import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { InfoBox } from './components/infoBox';
import i18next from '../../services/i18n/i18n';
import i18n from 'i18next';
export const AboutComponent = () => {
  return (
    <View style={ styles.container }>
      <Image
        style={ styles.image }
        source={ require('../../assets/images/company.jpg') }
      />
      <InfoBox
        title={ i18next.t('translation.aboutCompanyNameTitle') }
        description={ i18n.t('translation.aboutCompanyNameDescription') }
      />
      <InfoBox
        title={ i18n.t('translation.aboutBiographyTitle') }
        description={
          'В нашей компании работают самые креативные люди. Мы придумали названия для таких брендов как: "Магазин"'
        }
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
