import React from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';
import Svg, { Path } from "react-native-svg"

const SuccessMessage = (props) => {
    const user = props.userApi
    const transferUser = props.transferUser

    return (
        <View style={styles.successMessageModal}>
            <View style={styles.successMessageModalApproval}>
                <Svg
                    width={69}
                    height={69}
                    viewBox="0 0 69 69"
                >
                    <Path d="M34.5 0C15.4461 0 0 15.4461 0 34.5C0 53.5539 15.4461 69 34.5 69C53.5539 69 69 53.5539 69 34.5C69 15.4461 53.5539 0 34.5 0ZM34.5 64.0714C18.1946 64.0714 4.92855 50.8054 4.92855 34.5C4.92855 18.1946 18.1946 4.92857 34.5 4.92857C50.8053 4.92857 64.0714 18.1946 64.0714 34.5C64.0714 50.8054 50.8053 64.0714 34.5 64.0714ZM30.4487 39.8179L44.1287 23.8609C44.6996 23.1854 45.5887 22.8677 46.4584 23.0283C47.328 23.1889 48.0449 23.8033 48.3369 24.6381C48.6289 25.4728 48.4512 26.4001 47.8712 27.0677L32.379 45.1392C31.919 45.6747 31.252 45.9885 30.5456 46H30.5078C29.8159 45.9999 29.156 45.709 28.6892 45.1983L21.1797 36.984C20.261 35.9791 20.3309 34.4198 21.3357 33.5012C22.3406 32.5825 23.8999 32.6524 24.8186 33.6572L30.4487 39.8179Z" fill="#17A7E0"/>
                </Svg>
                <Text style={styles.successMessageModalApprovalText}>UniPoints enviado com sucesso para</Text>
            </View>
            <View>
                <Text style={styles.successMessageModalUserInfoName}>{user.name}</Text>
                <Text style={styles.successMessageModalUserInfo}>Matrícula: {transferUser}</Text>
                <Text style={styles.successMessageModalUserInfo}>Curso: {user.curso}</Text>
            </View>
            <View style={styles.successMessageModalButtom}>
                <Pressable 
                    onPress={()=> props.visible(true)}
                    style={styles.successMessageButtonConfirmP}
                >
                    <Text style={styles.successMessageButtonConfirm}>Fechar</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    successMessageModal:{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        margin: 20,
        padding: 20,
        paddingTop: 35,
        borderRadius: 16
    },
    successMessageModalApproval:{
        display: 'flex',
        alignItems: 'center'
    },
    successMessageModalApprovalText:{
        fontSize: 16,
        fontWeight: '500',
        color: '#484848',
        marginTop: 30
    },
    successMessageModalUserInfoName:{
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
        color: '#484848',
        marginTop: 10
    },
    successMessageModalUserInfo:{
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '300',
        color: '#484848',
        marginTop: 5
    },
    successMessageModalButtom:{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginTop: 40
    },
    successMessageButtonConfirmP:{
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
    successMessageButtonConfirm:{
        color: '#FFFFFF',
        width: 100,
        textAlign: 'center',
        paddingVertical: 5,
        borderRadius: 5,
        fontSize: 16,
        fontWeight: '500'
    }
})

export default SuccessMessage