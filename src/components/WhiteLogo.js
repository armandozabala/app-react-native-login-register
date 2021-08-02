import React from 'react';
import { Image, View } from 'react-native';

export const WhiteLogo = () => {
    return ( <
        View style = {
            {
                alignItem: 'center',
            }
        } >
        <
        Image source = { require('../assets/logo.png') }
        // eslint-disable-next-line react-native/no-inline-styles
        style = {
            {
                width: 100,
                height: 100,
                marginTop: 100,
                alignItems: 'center',
            }
        }
        /> <
        /View>
    );
};