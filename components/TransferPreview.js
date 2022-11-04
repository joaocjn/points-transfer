import React from 'react';
import { View, Text, StyleSheet, Pressable, Modal} from 'react-native';

import SuccessMessage from './SuccessMessage';

const TransferPreview = (props) => {
    const [successMessage, setSuccessMessage] = React.useState(false)

    const user = props.userApi
    const transferValue = parseInt(props.transferValue).toLocaleString('pt-BR')
    const transferUser = props.transferUser
    
    const handleSetSuccessMessage = (value) =>{
        setSuccessMessage(value)
    }

    return (
        <Modal 
            animationType={'fade'} 
            statusBarTranslucent={true} 
            transparent={true}
        >
            <View style={styles.transferPreviewDefocus}>
                {successMessage === false ?
                <View style={styles.transferPreview}>
                    <View style={styles.transferPreviewValue}>
                        <View style={styles.transferPreviewValueBalance}>
                            <Text style={styles.transferPreviewValueBalanceText}>{`${transferValue}`}</Text>
                        </View>
                        <Text style={styles.transferPreviewValueText}>UniCoins</Text>
                        <Text style={[styles.transferPreviewValueText, {marginTop: 25}]}>Transferir para... </Text>
                    </View>
                    <View>
                        <Text style={styles.transferPreviewUserInfoName}>{user.name}</Text>
                        <Text style={styles.transferPreviewUserInfo}>Matrícula: {transferUser}</Text>
                        <Text style={styles.transferPreviewUserInfo}>Curso: {user.curso}</Text>
                    </View>
                    <View style={styles.transferPreviewButtons}>
                        <Pressable 
                            onPress={()=> handleSetSuccessMessage(true)}
                            style={styles.transferPreviewButtonConfirmP}
                        >
                            <Text style={styles.transferPreviewButtonConfirm}>Enviar</Text>
                        </Pressable>
                        <Pressable 
                            onPress={()=> props.visible()}
                            style={styles.transferPreviewButtonBackP}
                        >
                            <Text style={styles.transferPreviewButtonBack}>Cancelar</Text>
                        </Pressable>
                    </View>
                </View>
                :
                <SuccessMessage 
                    visible={props.visible}
                    userApi={user}
                    transferUser={transferUser}
                />}
            </View>
        </Modal> 
    )
}

const styles = StyleSheet.create({
    transferPreviewDefocus:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'rgba(32, 32, 32, 0.6)'
    },
    transferPreview:{
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#FFFFFF',
        margin: 20,
        padding: 20,
        borderRadius: 16
    },
    transferPreviewValue:{
        display: 'flex',
        alignItems: 'center'
    },
    transferPreviewValueText:{
        color: '#484848',
        fontSize: 14,
        fontWeight: '300',
    },
    transferPreviewValueBalance:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    transferPreviewValueBalanceText:{
        color: '#17A7E0',
        fontSize: 48,
        fontWeight: '500',
    },
    transferPreviewUserInfoName:{
        fontSize: 18,
        fontWeight: '500',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center'
    },
    transferPreviewUserInfo:{
        fontSize: 14,
        fontWeight: '300',
        marginBottom: 10,
        textAlign: 'center'
    },
    transferPreviewButtons:{
        display: 'flex',
        alignItems: 'center',
        marginTop: 15
    },
    transferPreviewButtonConfirmP:{
        backgroundColor: '#17A7E0',
        width: '100%',
        marginBottom: 15,
        height: 48,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    transferPreviewButtonConfirm:{
        color: '#FFFFFF',
        width: 100,
        textAlign: 'center',
        paddingVertical: 5,
        borderRadius: 5,
        fontSize: 16,
        fontWeight: '500'
    },
    transferPreviewButtonBackP:{
        backgroundColor: 'rgba(254, 48, 50, 0.8);',
        width: '100%',
        marginBottom: 15,
        height: 48,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    transferPreviewButtonBack:{
        color: '#FFFFFF',
        width: 100,
        textAlign: 'center',
        paddingVertical: 5,
        borderRadius: 5,
        fontSize: 16,
        fontWeight: '500'
    }
})

export default TransferPreview