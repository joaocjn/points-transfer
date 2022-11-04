import React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback  } from 'react-native';
import Svg, { Path } from "react-native-svg"

const Header = (props) => {
  const user = props.userApi

  return (
    <View style={styles.header}>
        <View key={user.id}>
          <View style={styles.headerTop}>
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
          </View>
          <View style={styles.headerBottom}>
            <View style={styles.headerBalance}>
              <Text style={styles.headerBalanceText}>Saldo disponível</Text>
              <View style={styles.headerBalanceIconValue}>
                <Svg
                  width={16}
                  height={22}
                  viewBox="0 0 16 22"
                >
                  <Path d="M16 11V18L13 19L10 14.33C9.71 13.89 9 14.14 9.08 14.67L10 22L0 17L0.96 11.75C1.56 8.42 4.46 6 7.84 6H9L15 0L13 6H16L14.42 8.37C15.36 8.88 16 9.86 16 11Z" fill="white"/>
                </Svg>
                <Text style={styles.headerBalanceValue}> 
                  {user.saldo.toLocaleString()}
                </Text>
              </View>
            </View>
            <View>
              <TouchableWithoutFeedback onPress={()=>props.qrCode()}>
                <Svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                  >
                  <Path d="M0 8.25V0H8.25V8.25H0ZM1.5 6.75H6.75V1.5H1.5V6.75ZM0 18V9.75H8.25V18H0ZM1.5 16.5H6.75V11.25H1.5V16.5ZM9.75 8.25V0H18V8.25H9.75ZM11.25 6.75H16.5V1.5H11.25V6.75ZM15.95 18V15.95H18V18H15.95ZM9.75 11.825V9.75H11.8V11.825H9.75ZM11.8 13.875V11.825H13.875V13.875H11.8ZM9.75 15.95V13.875H11.8V15.95H9.75ZM11.8 18V15.95H13.875V18H11.8ZM13.875 15.95V13.875H15.95V15.95H13.875ZM13.875 11.825V9.75H15.95V11.825H13.875ZM15.95 13.875V11.825H18V13.875H15.95Z" fill="white"/>
                </Svg>
              </TouchableWithoutFeedback>
            </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#232D53',
    paddingTop: 40,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    borderBottomWidth: 3,
    borderBottomColor: '#FE3032'
  },
  headerTop:{
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 30,
    paddingTop: 30
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
    color: '#E8E8E8',
    fontWeight: '500',
    fontSize: 16
  },
  headerWelcomeCourse:{
    color: '#E8E8E8',
    fontWeight: '300',
    fontSize: 14,
  },
  headerBottom:{
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  headerBalance:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  headerBalanceText:{
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 12,
    marginBottom: 3
  },
  headerBalanceIconValue:{
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
  },
});

export default Header
