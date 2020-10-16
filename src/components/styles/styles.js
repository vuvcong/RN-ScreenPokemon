import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    containerBg: {
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'stretch',
        flex: 1,
    },
    container: {
        flex: 1,
    },
    logo: {
        flex: 1,
        width: 250,
        resizeMode: 'contain',
    },
    viewInput: {
        flex: 2,
    },
    txtRegister: {
        fontStyle: 'italic',
        alignSelf: 'flex-end',
        fontSize: 14,
    },
    txtInput: {
        padding: 10,
        fontSize: 14,
        backgroundColor: 'rgba(0,0,0,0.3)',
        color: 'white',
        height: 45,
        borderRadius: 10,
        margin: 5,
    },
    btnLogin: {
        backgroundColor: 'rgba(226,39,44,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
        margin: 5,
    },
    txtLogin: {
        color: 'white',
        fontSize: 14,
    },
    viewOther: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
    },
    txtOrther: {
        fontSize: 14,
        margin: 5,
    },
    viewLine: {
        height: 2,
        backgroundColor: 'rgba(0,0,0,0.3)',
        flex: 1,
    },
    viewSession: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
        justifyContent: 'center',
    },
    viewSessionItem: {
        flexDirection: 'row',
        margin: 5,
        backgroundColor: 'blue',
        borderRadius: 5,
    },
    txtSessionItem: {
        fontSize: 14,
        color: 'white',
        padding: 5,
    },
});

export default styles;