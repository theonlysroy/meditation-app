import MainLogo from '@/customSvgs/MainLogo';
import { StyleSheet, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { s, vs } from 'react-native-size-matters';

const AppLogo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Silent</Text>
      <MainLogo width={s(30)} height={vs(28)} />
      <Text style={styles.text}>Moon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    gap: s(6),
  },
  text: {
    fontFamily: 'Sora-Bold',
    fontSize: RFValue(14),
    color: '#3F414E',
    letterSpacing: 3,
  },
  icon: {
    resizeMode: 'contain',
  },
});

export default AppLogo;
