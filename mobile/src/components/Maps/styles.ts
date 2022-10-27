import { StyleSheet, Dimensions } from 'react-native'


export const styles = StyleSheet.create({
    map: {
        flex:1, 
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
})