import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 12,
    justifyContent: 'space-between',
  },
  right: {
    width: 20,
    height: 20,
  },
  logo: {
    width: 214,
    height: 120,
    marginTop: 36,
    marginBottom: 36,
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
  },
});