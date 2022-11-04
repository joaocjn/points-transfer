import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import Svg, { Path } from "react-native-svg"

import TransferPreview from './TransferPreview';
import FailMessage from './FailMessage';

const Main = (props) => {
    const [userValidation, setUserValidation] = React.useState([])
    const [transferValue, setTransferValue] = React.useState([])
    const [transferUser, setTransferUser] = React.useState([])
    const [buttonNext, setButtonNext] = React.useState(false)
    const [userNotFoundMessage, setUserNotFoundMessage] = React.useState(false)

    const user = props.userApi
    const users = props.usersApi
    const handleEnableButtonNext = transferValue.length !== 0 && transferUser.length === 7 ? false : true

    props.scanData !== undefined && transferUser !== props.scanData ? setTransferUser(props.scanData) : null
    
    const handleTransferValue = (value) => {
        const onlyNumber = value.toString().replace(/\D+/g, '')

        if(onlyNumber > user.saldo){
            return
        }

        setTransferValue(onlyNumber)
    }
    const handleTransferUser = (value) => {
        props.scanData != undefined ? props.clearScanData() : null
        const onlyNumber = value.toString().replace(/\D+/g, '')
        setTransferUser(onlyNumber)
    }
    const handleUserNotFoundMessage = () => {
        userNotFoundMessage ? setUserNotFoundMessage(false) : setUserNotFoundMessage(true)
    }
    const handleButtonNext = () => {
        const validationUser = users.filter((user) => {
            if(user.matricula === transferUser){
                setUserValidation(user)
                return true
            }
        })
       
        if(validationUser[0] !== undefined){
            buttonNext ? setButtonNext(false) : setButtonNext(true)
        }else{
            handleUserNotFoundMessage()
        }
    }
    return (
        <View style={styles.mainAbc}>
            <View style={styles.main}>
                <Text style={[styles.mainTransferText, {marginTop: 10}]}>
                    Quantidade de pontos?
                </Text>
                <View>
                    <TextInput
                        style={styles.mainTransferInput}
                        onChangeText={handleTransferValue}
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
                        style={styles.mainTransferInput}
                        onChangeText={handleTransferUser}
                        value={transferUser}
                        maxLength={7}
                        keyboardType='number-pad'
                        selectionColor='#4B4B4C'
                    />
                </View>
                <Pressable
                    onPress={()=> {
                        props.showQRCodeScan()
                        props.clearScanData()
                    }}
                    style={styles.mainQRCodeScanButton}
                >
                    <Text style={styles.mainQRCodeScanButtonText}>
                        Escanear QR Code
                    </Text>
                    <Svg
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            >
                            <Path d="M0 8.25V0H8.25V8.25H0ZM1.5 6.75H6.75V1.5H1.5V6.75ZM0 18V9.75H8.25V18H0ZM1.5 16.5H6.75V11.25H1.5V16.5ZM9.75 8.25V0H18V8.25H9.75ZM11.25 6.75H16.5V1.5H11.25V6.75ZM15.95 18V15.95H18V18H15.95ZM9.75 11.825V9.75H11.8V11.825H9.75ZM11.8 13.875V11.825H13.875V13.875H11.8ZM9.75 15.95V13.875H11.8V15.95H9.75ZM11.8 18V15.95H13.875V18H11.8ZM13.875 15.95V13.875H15.95V15.95H13.875ZM13.875 11.825V9.75H15.95V11.825H13.875ZM15.95 13.875V11.825H18V13.875H15.95Z" fill="white"/>
                    </Svg>
                </Pressable>
                <Pressable
                    onPress={()=>handleButtonNext()}
                    disabled={handleEnableButtonNext}
                    style={[styles.mainTransferButton, {
                        backgroundColor: handleEnableButtonNext ? '#7E7E7E' : '#17A7E0'
                    }]}
                >
                    <Text style={styles.mainTransferButtonText}>Enviar</Text>
                </Pressable>
                {userNotFoundMessage ?
                <FailMessage
                    message="Usuário não encontrado em nossa base de dados."
                    visible={handleUserNotFoundMessage}
                /> : null
                }
                {buttonNext ?
                <TransferPreview 
                    visible={handleButtonNext}
                    userApi={userValidation} 
                    transferValue={transferValue}
                    transferUser={transferUser}
                /> : null}
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        backgroundColor: '#FFFFFF',
        padding: 20,
        height: '100%'
    },
    mainTransferText:{
        fontSize: 16,
        fontWeight: '400',
        color: '#353535'
    },
    mainTransferSubText:{
        fontSize: 12,
        fontWeight: '300',
        color: '#979797',
        marginTop: 5,
    },
    mainTransferInput:{
        width: '100%',
        height: 48,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#868686',
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        marginBottom: 30,
        paddingLeft: 15,
    },
    mainQRCodeScanButton:{
        backgroundColor:  '#17A7E0',
        width: '100%',
        marginBottom: 30,
        height: 48,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainQRCodeScanButtonText:{
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
        marginRight: 10
    },
    mainTransferButton:{
        color: '#FFFFFF',
        width: '100%',
        height: 48,
        textAlign: 'center',
        borderRadius: 4,
        fontSize: 16,
        fontWeight: '500',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainTransferButtonText:{
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500'
    }
})

export default Main