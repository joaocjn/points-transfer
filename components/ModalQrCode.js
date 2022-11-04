import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Modal } from 'react-native';
import Svg, { Path } from "react-native-svg"
import QRCode from 'react-native-qrcode-svg';

const ModalQrCode = (props) => {
    return(
        <Modal 
            animationType={'fade'} 
            statusBarTranslucent={true} 
            transparent={true}
        >
            <View style={styles.modalQRCodeDefocus}>
                <View style={styles.modalQRCode}>
                    <View style={styles.modalQRCodeClose}>
                        <TouchableWithoutFeedback onPress={()=>props.qrCode()}>
                            <Svg
                                width={29}
                                height={29}
                                viewBox="0 0 29 29"
                                >
                                <Path d="M14.3818 28.7637C6.45205 28.7637 0 22.3116 0 14.3818C0 6.45205 6.45205 0 14.3818 0C22.3116 0 28.7637 6.45205 28.7637 14.3818C28.7637 22.3116 22.3116 28.7637 14.3818 28.7637Z" fill="#17A7E0"/>
                                <Path d="M14.382 1.79773C7.44272 1.79773 1.79785 7.4426 1.79785 14.3818C1.79785 21.3211 7.44272 26.9659 14.382 26.9659C21.3212 26.9659 26.9661 21.3211 26.9661 14.3818C26.9661 7.4426 21.3212 1.79773 14.382 1.79773Z"  fill="white"/>
                                <Path d="M18.876 19.775C18.6459 19.775 18.4158 19.6869 18.2405 19.5117L9.25187 10.523C8.90042 10.1716 8.90042 9.60348 9.25187 9.25203C9.60333 8.90057 10.1714 8.90057 10.5229 9.25203L19.5115 18.2407C19.863 18.5921 19.863 19.1602 19.5115 19.5117C19.3362 19.6869 19.1061 19.775 18.876 19.775Z" fill="#17A7E0"/>
                                <Path d="M9.88737 19.775C9.65726 19.775 9.42715 19.6869 9.25187 19.5117C8.90042 19.1602 8.90042 18.5921 9.25187 18.2407L18.2405 9.25203C18.592 8.90057 19.1601 8.90057 19.5115 9.25203C19.863 9.60348 19.863 10.1716 19.5115 10.523L10.5229 19.5117C10.3476 19.6869 10.1175 19.775 9.88737 19.775Z"  fill="#17A7E0"/>
                            </Svg>
                        </TouchableWithoutFeedback>
                    </View>
                    <Text style={styles.modalQRCodeText}>
                        Mostre esse QR Code para receber transferências de UniPoints
                    </Text>
                    <View style={styles.modalQRCodeShare}>
                        <Text style={styles.modalQRCodeShareText}>Compartilhar QR Code</Text>
                        <Svg
                            width={14}
                            height={19}
                            viewBox="0 0 14 19"
                            >
                            <Path d="M12 5.66667H10.3333C9.87501 5.66667 9.50001 6.04167 9.50001 6.5C9.50001 6.95833 9.87501 7.33333 10.3333 7.33333H12V16.5H2.00001V7.33333H3.66668C4.12501 7.33333 4.50001 6.95833 4.50001 6.5C4.50001 6.04167 4.12501 5.66667 3.66668 5.66667H2.00001C1.08334 5.66667 0.333344 6.41667 0.333344 7.33333V16.5C0.333344 17.4167 1.08334 18.1667 2.00001 18.1667H12C12.9167 18.1667 13.6667 17.4167 13.6667 16.5V7.33333C13.6667 6.41667 12.9167 5.66667 12 5.66667Z" fill="#17A7E0"/>
                            <Path d="M7 12.3333C7.45833 12.3333 7.83333 11.9583 7.83333 11.5V3.16667H9.325C9.7 3.16667 9.88334 2.71667 9.61667 2.45834L7.29167 0.133335C7.125 -0.0333316 6.86667 -0.0333316 6.7 0.133335L4.375 2.45834C4.11667 2.71667 4.3 3.16667 4.675 3.16667H6.16667V11.5C6.16667 11.9583 6.54167 12.3333 7 12.3333Z" fill="#17A7E0"/>
                        </Svg>
                    </View>
                    <View style={styles.modalQRCodeImage}>
                        <QRCode 
                            value={props.userApi.matricula}
                            size={200} 
                            color="black" 
                            backgroundColor="white" 
                            logoSize={30} 
                            logoMargin={2} 
                            logoBorderRadius={15} 
                            logoBackgroundColor="yellow" 
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalQRCodeDefocus:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'rgba(32, 32, 32, 0.6)',
        zIndex: 2,
    },
    modalQRCode:{
        backgroundColor: '#FFFFFF',
        margin: 20,
        padding: 20,
        borderRadius: 16
    },
    modalQRCodeClose:{
        display: 'flex',
        alignItems: 'flex-end',
        marginBottom: 30
    },
    modalQRCodeText:{
        color: '#484848',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 30
    },
    modalQRCodeShare:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30
    },
    modalQRCodeShareText:{
        color: '#17A7E0',
        fontSize: 14,
        fontWeight: '500',
        marginRight: 7
    },
    modalQRCodeImage:{
        display: 'flex',
        alignItems: 'center',
        marginBottom: 30
    }
})

export default ModalQrCode