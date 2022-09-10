import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import Svg, { Path } from "react-native-svg"
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <Ionicons name="menu-outline" size={35} color="white" />
        <Svg
          width={25}
          height={24}
          viewBox="0 0 25 24"
        >
          <Path d="M18.871 8C18.871 6.4087 18.2355 4.88258 17.1043 3.75736C15.9731 2.63214 14.4388 2 12.839 2C11.2392 2 9.70497 2.63214 8.57375 3.75736C7.44253 4.88258 6.80702 6.4087 6.80702 8C6.80702 15 3.79102 17 3.79102 17H21.887C21.887 17 18.871 15 18.871 8Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <Path d="M14.579 21C14.4023 21.3031 14.1486 21.5547 13.8434 21.7295C13.5381 21.9044 13.1921 21.9965 12.8398 21.9965C12.4876 21.9965 12.1415 21.9044 11.8363 21.7295C11.531 21.5547 11.2773 21.3031 11.1006 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
      </View>
      {props.usersApi.map(user => {
        return(
          <View style={styles.headerBottom} key={user.id}>
            <View style={styles.headerWelcome}>
              <View >
                <Image style={styles.headerWelcomeIcon} source={{
                  width: 50,
                  height: 50,
                  uri: user.image
                }}/>
              </View>
              <View style={styles.headerUserInfo}>
                <Text style={styles.headerWelcomeName}> 
                  Olá, {user.name}!
                </Text>
                <Text style={styles.headerWelcomeCourse}> 
                  {user.curso}
                </Text>
              </View>
            </View>
            <View style={styles.headerBalance}>
              <Svg
                width={15}
                height={20}
                viewBox="0 0 15 20"
              >
                <Path d="M14.2262 9.69048V15.8571L11.6493 16.7381L9.0723 12.624C8.82319 12.2364 8.21331 12.4567 8.28203 12.9236L9.0723 19.381L0.482422 14.9762L1.30705 10.3512C1.82244 7.41762 4.31351 5.28571 7.21688 5.28571H8.21331L13.3672 0L11.6493 5.28571H14.2262L12.869 7.37357C13.6765 7.82286 14.2262 8.68619 14.2262 9.69048Z" fill="white"/>
              </Svg>
              <Text style={styles.headerBalanceValue}> 
                {user.saldo.toLocaleString()}
              </Text>
            </View>
          </View>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#212B4F',
    paddingTop: 40,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20
  },
  headerTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  headerBottom:{
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingBottom: 15
  },
  headerWelcome:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerWelcomeIcon:{
    borderRadius: 50,
    marginRight: 15
  },
  headerUserInfo:{
    display: 'flex',
    justifyContent: 'flex-end'
  },
  headerWelcomeName:{
    color: 'white',
    fontWeight: '600',
    fontSize: 12
  },
  headerWelcomeCourse:{
    color: 'white',
    fontWeight: '500',
    fontSize: 12,
  },
  headerBalance:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerBalanceValue:{
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 7
  }
});

export default Header
