import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { LoginInput } from './components/loginInput';
import { CustomizedButton } from '../../components/customizedButton';
import { useTranslation } from 'react-i18next';

interface LoginComponentProps {
  loginHandler: (text: string) => void;
  passwordHandler: (text: string) => void;
  onLoginPress: () => void;
  isRedBorder: boolean;
}

export const LoginComponent = ({
  loginHandler,
  passwordHandler,
  onLoginPress,
  isRedBorder,
}: LoginComponentProps) => {
  const { t, i18n } = useTranslation();
  return (
    <View style={ styles.container }>
      <Image
        style={ styles.userPicture }
        source={ require('../../assets/images/user.jpg') }
        resizeMode={ 'cover' }
      />
      <Text style={ styles.title }>{t('translation.loginScreen.signIn')}</Text>
      <LoginInput
        image={ t('translation.loginScreen.username') }
        textHandler={ loginHandler }
        isRedBorder={ isRedBorder }
        isPassword={ false }

      />
      <LoginInput
        image={ t('translation.loginScreen.password') }
        textHandler={ passwordHandler }
        isRedBorder={ isRedBorder }
        isPassword={true}
      />
      <CustomizedButton
        onPressFunction={() => onLoginPress()}
        text={ t('translation.loginScreen.login') }
        stylesProps={ styles.button }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 70,
  },
  userPicture: {
    width: 130,
    height: 130,
    borderRadius: 70,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: 'PT Sans',
    marginBottom: 20,
  },
  button: {
    width: '60%',
    backgroundColor: '#40e6cf',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    display: 'flex',
    textAlign: 'center',
  },
});
