import React from 'react';
import { HeaderButton, HeaderButtonProps } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

// Contants
import { colors } from '../constants';

const CustomHeaderButton = (props: HeaderButtonProps) => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={24}
            color={"white"}
        />
    );
};

export default CustomHeaderButton;
