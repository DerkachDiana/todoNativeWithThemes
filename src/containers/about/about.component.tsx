import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { InfoBox } from './infoBox/infoBox';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react';
import { tasksStore } from '../../mobx/store';
export const AboutComponent = observer(() => {
  const { t } = useTranslation();
  return (

    <View style={ [ styles.container, { backgroundColor: tasksStore.theme?.backgroundColor } ] }>
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
});
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
    height: '100%'
  },
  image: {
    borderRadius: 100,
    width: 100,
    height: 100,
    marginVertical: 20,
  },
});

const DARK_THEME = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1C',
  },
});

const LIGHT_THEME = StyleSheet.create({
  container: {
    backgroundColor: '#d8d9da',
  }
});
