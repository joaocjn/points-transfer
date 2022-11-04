import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import Svg, { Path } from "react-native-svg"

const FailMessage = (props) => {
    
    setTimeout(props.visible, 2500)
    
    return(
        <Modal 
            animationType={'fade'} 
            statusBarTranslucent={true} 
            transparent={true}
        >
            <View style={styles.failMessageDefocus}>
                <View style={styles.failMessage}>
                    <View style={styles.failMessageClose}>
                        <Svg
                            width={50}
                            height={50}
                            viewBox="0 0 29 29"
                            >
                            <Path d="M14.3818 28.7637C6.45205 28.7637 0 22.3116 0 14.3818C0 6.45205 6.45205 0 14.3818 0C22.3116 0 28.7637 6.45205 28.7637 14.3818C28.7637 22.3116 22.3116 28.7637 14.3818 28.7637Z" fill="#FE3032"/>
                            <Path d="M14.382 1.79773C7.44272 1.79773 1.79785 7.4426 1.79785 14.3818C1.79785 21.3211 7.44272 26.9659 14.382 26.9659C21.3212 26.9659 26.9661 21.3211 26.9661 14.3818C26.9661 7.4426 21.3212 1.79773 14.382 1.79773Z"  fill="white"/>
                            <Path d="M18.876 19.775C18.6459 19.775 18.4158 19.6869 18.2405 19.5117L9.25187 10.523C8.90042 10.1716 8.90042 9.60348 9.25187 9.25203C9.60333 8.90057 10.1714 8.90057 10.5229 9.25203L19.5115 18.2407C19.863 18.5921 19.863 19.1602 19.5115 19.5117C19.3362 19.6869 19.1061 19.775 18.876 19.775Z" fill="#FE3032"/>
                            <Path d="M9.88737 19.775C9.65726 19.775 9.42715 19.6869 9.25187 19.5117C8.90042 19.1602 8.90042 18.5921 9.25187 18.2407L18.2405 9.25203C18.592 8.90057 19.1601 8.90057 19.5115 9.25203C19.863 9.60348 19.863 10.1716 19.5115 10.523L10.5229 19.5117C10.3476 19.6869 10.1175 19.775 9.88737 19.775Z"  fill="#FE3032"/>
                        </Svg>
                    </View>
                    <Text style={styles.failMessageText}>
                        {props.message}
                    </Text>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    failMessageDefocus:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'rgba(32, 32, 32, 0.6)',
        zIndex: 2,
    },
    failMessage:{
        backgroundColor: '#FFFFFF',
        margin: 20,
        padding: 20,
        borderRadius: 16
    },
    failMessageClose:{
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30
    },
    failMessageText:{
        color: '#484848',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 20
    }
})

export default FailMessage