import { Alert } from "react-native";
import React, { useState } from 'react';
import light from './styles/light';
import dark from './styles/dark';
import { ThemeProvider } from 'styled-components';


class Globais {
    static theme: {
        title: string,
        primary: string,
        black: string,
        gray: string,
        tag: string,
        green: string,
        red: string,
        purple: string,
    };
    static dark = dark;
    static light = light;
    static setTheme:(value: React.SetStateAction<{
        title: string,
        primary: string,
        black: string,
        gray: string,
        tag: string,
        green: string,
        red: string,
        purple: string,
    }>) => void
    static toogleTheme: () => void;
}

export default Globais;