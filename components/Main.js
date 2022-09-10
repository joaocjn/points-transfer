import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import Svg, { Path } from "react-native-svg"
import Ionicons from '@expo/vector-icons/Ionicons';
import QRCode from 'react-native-qrcode-svg';
import { BlurView } from 'expo-blur';

const Main = (props) => {
    const [transferValue, setTransferValue] = React.useState([])
    const [transferUser, setTransferUser] = React.useState([])
    const [qrCodeDisplay, setQrCodeDisplay] = React.useState(false)

    const handleQrCodeDisplay = () => {
        qrCodeDisplay ? setQrCodeDisplay(false) : setQrCodeDisplay(true)
    }
    return (
        <View style={styles.main}>
            {props.usersApi.map(user => {
                return(
                    <View style={styles.mainTop} key={user.id}>
                        <Text style={styles.mainTopText}> 
                            {`${user.name}, seu \nsaldo atual é:`}
                        </Text>
                        <View style={styles.mainBalance}>
                            <Svg
                                width={27}
                                height={35}
                                viewBox="0 0 27 35"
                            >
                                <Path d="M27 17.5V28.6364L21.9375 30.2273L16.875 22.7977C16.3856 22.0977 15.1875 22.4955 15.3225 23.3386L16.875 35L0 27.0455L1.62 18.6932C2.6325 13.3955 7.52625 9.54545 13.23 9.54545H15.1875L25.3125 0L21.9375 9.54545H27L24.3337 13.3159C25.92 14.1273 27 15.6864 27 17.5Z" fill="#4B4B4C"/>
                            </Svg>
                            <Text style={styles.mainBalanceValue}> 
                                {user.saldo.toLocaleString()}
                            </Text>
                        </View>
                    </View>
                )
            })}
            <View style={styles.mainBottom}>
                <Text style={styles.mainTransferText}>
                    Qual é o valor da transferência?
                </Text>
                <View>
                    <Svg
                        width={14}
                        height={20}
                        viewBox="0 0 14 20"
                        style={styles.mainTransferValueIcon}
                    >
                        <Path d="M13.7438 9.69048V15.8571L11.1668 16.7381L8.58987 12.624C8.34077 12.2364 7.73089 12.4567 7.79961 12.9236L8.58987 19.381L0 14.9762L0.824628 10.3512C1.34002 7.41762 3.83108 5.28571 6.73446 5.28571H7.73089L12.8848 0L11.1668 5.28571H13.7438L12.3866 7.37357C13.194 7.82286 13.7438 8.68619 13.7438 9.69048Z" fill="#7E7E7E" fill-opacity="0.51"/>
                    </Svg>
                    <TextInput
                        style={styles.mainTransferValueInput}
                        onChangeText={setTransferValue}
                        pattern={[
                            '/[^0-9]/g', // min 8 chars
                            '(?=.*\\d)', // number required
                            '(?=.*[A-Z])', // uppercase letter
                          ]}
                        value={transferValue}
                        keyboardType='number-pad'
                        selectionColor='#4B4B4C'
                    />
                </View>
                
                <Text style={styles.mainTransferText}>
                    Para quem você quer transferir?
                </Text>
                <Text style={styles.mainTransferSubText}>
                    Insira o código da matrícula
                </Text>
                <View style={styles.mainInputBottom}>
                    <TextInput
                        style={styles.mainTransferUserInput}
                        onChangeText={setTransferUser}
                        value={transferUser}
                        keyboardType='number-pad'
                        selectionColor='#4B4B4C'
                    />
                    
                    <Ionicons name="qr-code-outline" size={25} color="#323F6E" onPress={()=>handleQrCodeDisplay()}/>
                </View>
                {qrCodeDisplay ? <View style={styles.mainTransferQRCode}>
                    <TouchableWithoutFeedback onPress={()=>handleQrCodeDisplay()}>
                        <View style={styles.mainTransferQRCodeDefocus}></View>
                    </TouchableWithoutFeedback>
                    
                    <QRCode 
                        value={props.usersApi.map(user => {return user.matricula})}
                        size={200} 
                        color="black" 
                        backgroundColor="white" 
                        logoSize={30} 
                        logoMargin={2} 
                        logoBorderRadius={15} 
                        logoBackgroundColor="yellow" 
                    /> 
                </View> : null}
                <Pressable style={styles.mainTransferButton}>
                    <Text style={styles.mainTransferButtonText}>Próximo</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainTop:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        margin: 20,
        padding: 20,
        borderRadius: 10
    },
    mainTopText:{
        color: '#4B4B4C',
        fontWeight: '500',
        fontSize: 24,
    },
    mainBalance:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    mainBalanceValue:{
        color: '#4B4B4C',
        fontSize: 24,
        fontWeight: '500',
        marginLeft: 7
    },
    mainBottom:{
        backgroundColor: '#FFFFFF',
        margin: 20,
        marginTop: 0,
        padding: 20,
        borderRadius: 10
    },
    mainTransferText:{
        fontSize: 18,
        fontWeight: '400',
        color: '#000000'
    },
    mainTransferSubText:{
        fontSize: 10,
        fontWeight: '400',
        color: '#6F6F70',
        marginTop: 10,
    },
    mainTransferValueInput:{
        width: 180,
        height: 35,
        borderRadius: 5,
        backgroundColor: '#D9D9D9',
        marginTop: 10,
        marginBottom: 20,
        paddingLeft: 32,
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        elevation: 9,
    },
    mainTransferValueIcon:{
        position: 'absolute',
        top: 17,
        left: 10,
        zIndex: 1
    },
    mainInputBottom:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    mainTransferUserInput:{
        width: 180,
        height: 35,
        borderRadius: 5,
        backgroundColor: '#D9D9D9',
        marginTop: 5,
        marginRight: 5,
        paddingLeft: 9,
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        elevation: 9
    },
    mainTransferQRCodeDefocus:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.5)'
    },
    mainTransferQRCode:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
    },
    mainTransferButton:{
        display: 'flex',
        alignItems: 'flex-end',
        marginTop: 20,
    },
    mainTransferButtonText:{
        backgroundColor: '#212B4F',
        color: '#FFFFFF',
        paddingHorizontal: 25,
        paddingVertical: 5,
        borderRadius: 5,
        fontSize: 12,
        fontWeight: '500'
    }
    
})

export default Main