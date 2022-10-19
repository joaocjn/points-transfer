import React from 'react';
import { View, Text, StyleSheet, Image, Pressable} from 'react-native';
import Svg, { Path } from "react-native-svg"

const TransferPreview = (props) => {
    // const [transferValue, setTransferValue] = React.useState([])
    // const [transferUser, setTransferUser] = React.useState([])
    // const [qrCodeDisplay, setQrCodeDisplay] = React.useState(false)

    const transferValue = parseInt(props.transferValue).toLocaleString('pt-BR')
    const transferUser = props.transferUser

    return (
        <View style={styles.transferPreview}>
            <View style={styles.transferPreviewValue}>
                <Text style={styles.transferPreviewValueText}>Você está enviando </Text>
                <View style={styles.transferPreviewValueBalance}>
                    <Svg
                        width={14}
                        height={20}
                        viewBox="0 0 14 20"
                    >
                        <Path d="M13.7438 9.69048V15.8571L11.1668 16.7381L8.58987 12.624C8.34077 12.2364 7.73089 12.4567 7.79961 12.9236L8.58987 19.381L0 14.9762L0.824628 10.3512C1.34002 7.41762 3.83108 5.28571 6.73446 5.28571H7.73089L12.8848 0L11.1668 5.28571H13.7438L12.3866 7.37357C13.194 7.82286 13.7438 8.68619 13.7438 9.69048Z" fill="#4B4B4C"/>
                    </Svg>
                    <Text style={styles.transferPreviewValueBalanceText}>{` ${transferValue} `}</Text>
                </View>
                <Text style={styles.transferPreviewValueText}>para:</Text>
            </View>
            <View style={styles.transferPreviewUserIcon}>
                <Image style={styles.transferPreviewUserIconImage} source={{
                  width: 104,
                  height: 104,
                  uri: 'https://scontent.cdninstagram.com/v/t51.2885-19/305498183_461739475837555_8321309138888060636_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=PnaQFT8KHKUAX84uoeI&edm=APs17CUBAAAA&ccb=7-5&oh=00_AT91zyP2RnV7k6xmlV5-ZdYRD2Btx6ojKNjV6YynaM3liA&oe=632047C6&_nc_sid=978cb9'
                }}/>
            </View>
            <View>
                <Text style={styles.transferPreviewUserInfo}>Matrícula: {transferUser}</Text>
                <Text style={styles.transferPreviewUserInfo}>Aluno(a): Sergio Glésio</Text>
                <Text style={styles.transferPreviewUserInfo}>Curso: Odontologia</Text>
            </View>
            <View style={styles.transferPreviewButtons}>
                <Pressable onPress={()=> props.visible()}>
                    <Text style={styles.transferPreviewButtonBack}>Voltar</Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.transferPreviewButtonConfirm}>Confirmar</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    transferPreview:{
        backgroundColor: '#FFFFFF',
        margin: 20,
        marginTop: 0,
        padding: 20,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'space-around',
    },
    transferPreviewValue:{
        display: 'flex',
        flexDirection: 'row',
    },
    transferPreviewValueText:{
        fontSize: 18,
        fontWeight: '400',
    },
    transferPreviewValueBalance:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    transferPreviewValueBalanceText:{
        color: '#4B4B4C',
        fontSize: 18,
        fontWeight: '500',
    },
    transferPreviewUserIcon:{
        display: 'flex',
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 25
    },
    transferPreviewUserIconImage:{
        borderRadius: 50,
    },
    transferPreviewUserInfo:{
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 10
    },
    transferPreviewButtons:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50
    },
    transferPreviewButtonBack:{
        backgroundColor: '#7E7E7E',
        color: '#FFFFFF',
        width: 100,
        textAlign: 'center',
        paddingVertical: 5,
        borderRadius: 5,
        fontSize: 12,
        fontWeight: '500'
    },
    transferPreviewButtonConfirm:{
        backgroundColor: '#37BB09',
        color: '#FFFFFF',
        width: 100,
        textAlign: 'center',
        paddingVertical: 5,
        borderRadius: 5,
        fontSize: 12,
        fontWeight: '500'
    }
    
})

export default TransferPreview