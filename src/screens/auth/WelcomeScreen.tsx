import { View, StyleSheet, ScrollView, Text } from 'react-native';
import WelcomeBgFrame from '@/customSvgs/WelcomeBgFrame';
import WelcomeVector from '@/customSvgs/WelcomeVector';
import AppLogo from '@/components/common/AppLogo';
import { rpRfv, rpS, rpVS } from '@/utils/responsive';
import AppButton from '@/components/common/AppButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@/navigation/types';

type WelcomeScreenNavigationProp = NativeStackScreenProps<
  AuthStackParamList,
  'Welcome'
>;

const WelcomeScreen: React.FC<WelcomeScreenNavigationProp> = ({
  navigation,
}) => {
  // const navigation = useNavigation()
  const handleSignup = () => {};
  return (
    <View style={styles.container}>
      {/* <StatusBar hidden={true} /> */}
      {/* top illustration view */}
      <View style={styles.wrapper}>
        <WelcomeBgFrame style={styles.bgFrame} />
        <AppLogo />
        <WelcomeVector width={rpS(240)} height={rpVS(280)} />
      </View>

      {/* bottom heading and link */}
      <ScrollView
        style={styles.bottomWrapper}
        contentContainerStyle={styles.bottomWrapperContainer}
      >
        <Text style={styles.heading}>We are what we do</Text>
        <View style={styles.subheadingwrapper}>
          <Text style={styles.subHeading}>
            Thousands of people are using silent moon
          </Text>
          <Text style={styles.subHeading}>for smalls meditation</Text>
        </View>
        {/* button & link */}
        <View style={styles.buttonWrapper}>
          {/* <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity> */}
          <AppButton text="Sign up" onPress={handleSignup} />
          <View style={styles.linkWrapper}>
            <Text style={[styles.commonLink, styles.linkText]}>
              ALREADY HAVE AN ACCOUTN?
            </Text>
            <Text
              style={[styles.commonLink, styles.loginLink]}
              onPress={() => navigation.navigate('Login')}
            >
              LOG IN
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ccc',
    backgroundColor: '#FFFFFF',
  },
  wrapper: {
    width: '100%',
    height: rpVS(405),
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bgFrame: {
    position: 'absolute',
  },
  bottomWrapper: {
    // backgroundColor: 'lightgreen',
    padding: rpVS(15),
  },
  bottomWrapperContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'Sora-Bold',
    fontSize: rpRfv(22),
  },
  subHeading: {
    fontFamily: 'Sora-Light',
    color: '#A1A4B2',
    fontSize: rpRfv(12),
  },
  subheadingwrapper: {
    marginTop: rpVS(10),
    display: 'flex',
    alignItems: 'center',
  },
  buttonWrapper: {
    marginTop: rpVS(40),
  },
  button: {
    backgroundColor: '#8E97FD',
    width: rpS(300),
    height: rpVS(50),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: rpS(38),
  },
  buttonText: {
    fontFamily: 'Sora-Regular',
    color: '#FFFFFF',
    fontSize: rpRfv(12),
  },
  linkWrapper: {
    marginTop: rpVS(10),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: rpS(6),
  },
  commonLink: {
    fontFamily: 'Sora-Regular',
    fontSize: rpRfv(12),
  },
  linkText: {
    color: '#A1A4B2',
  },
  loginLink: {
    color: '#8E97FD',
  },
});

export default WelcomeScreen;
