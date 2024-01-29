import { StyleSheet } from "react-native";

export const common = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    h_center: {
        alignItems: 'center',
    },
    v_center: {
        justifyContent: 'center',
    },
    s_center: {
        alignSelf: 'center',
    },
    t_center: {
        textAlign: 'center',
    },
    full_screen: {
        flex: 1,
        width: '100%',
    }
})

interface Font_Structure {
  P_700: string;
  P_200: string;
  P_500: string;
  P_400: string;
  S_700: string;
  S_200: string;
  S_500: string;
  S_400: string;
}

export const Fonts: Readonly<Font_Structure> = {
  P_700: 'Ubuntu-Bold',
  P_200: 'Ubuntu-Light',
  P_500: 'Ubuntu-Medium',
  P_400: 'Ubuntu-Regular',
  S_700: 'Urbanist-Bold',
  S_200: 'Urbanist-Light',
  S_500: 'Urbanist-Medium',
  S_400: 'Urbanist-Regular',
};