import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { s, vs, ms } from 'react-native-size-matters';
import WelcomeBgFrame from '@/customSvgs/WelcomeBgFrame';
import AppLogo from '@/components/common/AppLogo';
import WelcomeVector from '@/customSvgs/WelcomeVector';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const WelcomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* <StatusBar hidden={true} /> */}
      <View style={styles.wrapper}>
        <WelcomeBgFrame />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  wrapper: {
    width: "100%",
    height: vs(405),
    backgroundColor: "red",
  }
});

export default WelcomeScreen;
