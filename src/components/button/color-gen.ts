import tw from 'twin.macro'
import {ButtonColor} from './button'

export const generateBgColor = (color: string, bgTint: number): string => {
    if (color in ButtonColor) {
        const bg_map: any = {
            "gray-50": tw`bg-gray-50`,
            "gray-100": tw`bg-gray-100`,
            "gray-200": tw`bg-gray-200`,
            "gray-300": tw`bg-gray-300`,
            "gray-400": tw`bg-gray-400`,
            "gray-500": tw`bg-gray-500`,
            "gray-600": tw`bg-gray-600`,
            "gray-700": tw`bg-gray-700`,
            "gray-800": tw`bg-gray-800`,
            "gray-900": tw`bg-gray-900`,

            "red-50":  tw`bg-red-50`,
            "red-100": tw`bg-red-100`,
            "red-200": tw`bg-red-200`,
            "red-300": tw`bg-red-300`,
            "red-400": tw`bg-red-400`,
            "red-500": tw`bg-red-500`,
            "red-600": tw`bg-red-600`,
            "red-700": tw`bg-red-700`,
            "red-800": tw`bg-red-800`,
            "red-900": tw`bg-red-800`,

            "yellow-50":  tw`bg-yellow-50`,
            "yellow-100": tw`bg-yellow-100`,
            "yellow-200": tw`bg-yellow-200`,
            "yellow-300": tw`bg-yellow-300`,
            "yellow-400": tw`bg-yellow-400`,
            "yellow-500": tw`bg-yellow-500`,
            "yellow-600": tw`bg-yellow-600`,
            "yellow-700": tw`bg-yellow-700`,
            "yellow-800": tw`bg-yellow-800`,
            "yellow-900": tw`bg-yellow-900`,

            "green-50":  tw`bg-green-50`,
            "green-100": tw`bg-green-100`,
            "green-200": tw`bg-green-200`,
            "green-300": tw`bg-green-300`,
            "green-400": tw`bg-green-400`,
            "green-500": tw`bg-green-500`,
            "green-600": tw`bg-green-600`,
            "green-700": tw`bg-green-700`,
            "green-800": tw`bg-green-800`,
            "green-900": tw`bg-green-900`,

            "blue-50":  tw`bg-blue-50`,
            "blue-100": tw`bg-blue-100`,
            "blue-200": tw`bg-blue-200`,
            "blue-300": tw`bg-blue-300`,
            "blue-400": tw`bg-blue-400`,
            "blue-500": tw`bg-blue-500`,
            "blue-600": tw`bg-blue-600`,
            "blue-700": tw`bg-blue-700`,
            "blue-800": tw`bg-blue-800`,
            "blue-900": tw`bg-blue-900`,
            
            "indigo-50":  tw`bg-indigo-50`,
            "indigo-100": tw`bg-indigo-100`,
            "indigo-200": tw`bg-indigo-200`,
            "indigo-300": tw`bg-indigo-300`,
            "indigo-400": tw`bg-indigo-400`,
            "indigo-500": tw`bg-indigo-500`,
            "indigo-600": tw`bg-indigo-600`,
            "indigo-700": tw`bg-indigo-700`,
            "indigo-800": tw`bg-indigo-800`,
            "indigo-900": tw`bg-indigo-900`,

            "purple-50":  tw`bg-purple-50`,
            "purple-100": tw`bg-purple-100`,
            "purple-200": tw`bg-purple-200`,
            "purple-300": tw`bg-purple-300`,
            "purple-400": tw`bg-purple-400`,
            "purple-500": tw`bg-purple-500`,
            "purple-600": tw`bg-purple-600`,
            "purple-700": tw`bg-purple-700`,
            "purple-800": tw`bg-purple-800`,
            "purple-900": tw`bg-purple-900`,

            "pink-50":  tw`bg-pink-50`,
            "pink-100": tw`bg-pink-100`,
            "pink-200": tw`bg-pink-200`,
            "pink-300": tw`bg-pink-300`,
            "pink-400": tw`bg-pink-400`,
            "pink-500": tw`bg-pink-500`,
            "pink-600": tw`bg-pink-600`,
            "pink-700": tw`bg-pink-700`,
            "pink-800": tw`bg-pink-800`,
            "pink-900": tw`bg-pink-900`,
        };

        let bg_value: ButtonColor = bg_map[`${color}-${bgTint}`];
        debugger;
        return bg_value;
    } else {
        return color;
    }
}