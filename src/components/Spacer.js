// purpose - styling
import React from 'react';
import { View, StyleSheet } from 'react-native';


const Spacer = ({ children }) => {
    return (
        <View style={styles.spacerStyle}>
            {children}
        </View>
    ); // end return

}; // end Spacer

const styles = StyleSheet.create({
    spacerStyle: {
        margin: 15
    }
})

export default Spacer;