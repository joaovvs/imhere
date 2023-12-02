import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 50,
        paddingHorizontal: 18
    },
  
    eventName: {
        color: '#FFF',
        fontSize: 24,
        fontWeight:'bold'
    },
    
    eventDate: {
        color: '#6B6B6B',
        fontSize: 16
    },

    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    },

    input: {
        flex: 1,
        paddingVertical: 4,
        paddingHorizontal: 16,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFF',
        fontSize: 16,

        marginRight: 12
    },

    buttonText: {
        color: '#FFF',
        fontSize: 24
    },

    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center'
    },

    listEmptyText:{
        color: '#FFF',
        fontSize: 14,
        textAlign: 'center'
    }
  })