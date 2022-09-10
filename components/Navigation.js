import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Svg, { Path, G, Rect } from "react-native-svg"

const Navigation = () => {
    return(
        <View style={styles.navigation}>
            <View style={styles.navigationBox}>
                <View style={styles.navigationIconBox}>
                    <Svg
                        width={26}
                        height={27}
                        viewBox="0 0 26 27"
                    >
                        <G>
                            <Path d="M4 22.1818V10.1818L13 2L22 10.1818V22.1818H4Z" stroke="white" />  
                            <Rect x="10" y="14" width="6" height="8" rx="1" stroke="white" />
                        </G>    
                    </Svg>
                </View>
                <Text style={styles.navigationTitle}>Home</Text>
            </View>
            <View style={styles.navigationBox}>
                <View style={styles.navigationIconBox}>
                    <Svg
                        width={22}
                        height={22}
                        viewBox="0 0 22 22"
                    >
                        <Path d="M1.83301 11.9532V10.0833C1.83301 7.04569 4.29544 4.58325 7.33301 4.58325H19.2497V4.58325" stroke="white" stroke-linecap="round" />
                        <Path d="M17.417 1.83325L20.167 4.58325L17.417 7.33325" stroke="white" stroke-linecap="round" />
                        <Path d="M20.1667 9.14844V11.0184C20.1667 14.0559 17.7042 16.5184 14.6667 16.5184H2.75V16.5184" stroke="white" stroke-linecap="round" />
                        <Path d="M4.58301 19.25L1.83301 16.5L4.58301 13.75" stroke="white" stroke-linecap="round" /> 
                    </Svg>
                </View>
                <Text style={styles.navigationTitle}>Transferência</Text>
            </View>
            <View style={styles.navigationBox}>
                <View style={styles.navigationIconBox}>
                    <Svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                    >
                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M20 10L14 4L20 10Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <Path d="M4 10L10 4" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M3.81259 10.0001H20.1874L18.6279 19.0001H5.3721L3.81259 10.0001Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </Svg>
                </View>
                <Text style={styles.navigationTitle}>Utilizar pontos</Text>
            </View>
            <View style={styles.navigationBox}>
                <View style={styles.navigationIconBox}>
                    <Svg
                        width={21}
                        height={21}
                        viewBox="0 0 21 21"
                    >
                        <Path d="M12.25 1.75H5.25C4.78587 1.75 4.34075 1.93437 4.01256 2.26256C3.68437 2.59075 3.5 3.03587 3.5 3.5V17.5C3.5 17.9641 3.68437 18.4092 4.01256 18.7374C4.34075 19.0656 4.78587 19.25 5.25 19.25H15.75C16.2141 19.25 16.6592 19.0656 16.9874 18.7374C17.3156 18.4092 17.5 17.9641 17.5 17.5V7L12.25 1.75Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <Path d="M12.25 1.75V7H17.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <Path d="M14 11.375H7" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <Path d="M14 14.875H7" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <Path d="M8.75 7.875H7.875H7" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </Svg>
                </View>
                <Text style={styles.navigationTitle}>Extrato</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navigation: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      paddingTop: 15,
      paddingBottom: 25,
      paddingHorizontal: 30
    },
    navigationBox:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navigationIconBox:{
        width: 40,
        height: 40,
        backgroundColor: "#303D6B",
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        elevation: 5,
    },
    navigationTitle:{
        fontSize: 10,
        fontWeight: '400',
        color: '#464646'
    }
});
export default Navigation