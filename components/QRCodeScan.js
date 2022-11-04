import React, { useEffect } from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

const QRCodeScan = (props) => {
    const [camPermission, setCamPermission] = React.useState(false)
    
    useEffect(() => {
        (async() => {
            const {status} = await BarCodeScanner.requestPermissionsAsync()
            setCamPermission(status === 'granted')
        })()
    }, [])

    if (!camPermission) {
        return(
            <View>
                <Text>Por favor, garanta permissão de câmera ao app.</Text>
            </View>
        )
    }
    
    return(
        <View style={styles.barCodeScannerBox}>
                <Pressable
                    onPress={()=> {
                        props.showQRCodeScan()
                        props.clearScanData()
                    }}
                    style={styles.backQRCodeScan}
                >
                    <Text style={styles.backQRCodeScanText}>
                        {"Voltar"}
                    </Text>
                </Pressable>

                <BarCodeScanner
                    style={styles.barCodeScanner}
                    onBarCodeScanned={props.qrCodeScan}
                    ratio="1:1"
                />
                {props.scanData && props.showQRCodeScan()}
        </View>
    )
}

const styles = StyleSheet.create({
    barCodeScannerBox:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 5,
        backgroundColor: '#FFFFFF'
    },
    backQRCodeScan:{
        position: 'absolute',
        bottom: 130,
        left: 20,
        right: 20,
        zIndex: 10,
        backgroundColor: '#17A7E0',
        height: 48,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backQRCodeScanText:{
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
        marginRight: 10
    },
    barCodeScanner:{
        position: 'absolute',
        left: 20,
        right: 20,
        top: 200,
        bottom: 200
    }
});

export default QRCodeScan