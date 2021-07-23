import React from 'react'
import { Image, View } from 'react-native';


export const WhiteLogo = () => {
    return (
        <View style={{
              alignItem: 'center'
        }}>
            <Image
               source={ require('../assets/logo.png')}
               style={{
                    width: 100,
                    height: 100,
                    marginTop: 100,
                    
               }}
            />
        </View>
    )
}

