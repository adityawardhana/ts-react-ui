import { button, chips, colors, icon } from './variable'
export type ThemeKeysProps = string | number | {};

export interface ThemeObjectProps {
  [key: string]: ThemeKeysProps;
}

export type ColorKeys = keyof typeof colors.color

export type ButtonColorKeys = keyof typeof button.buttonColor
export type ButtonVariantKeys = keyof typeof button.buttonColor.primary
export type ButtonSizeKeys = keyof typeof button.buttonSize
export type ButtonShapeKeys = keyof typeof button.buttonShape

export type ChipsColorKeys = keyof typeof chips.chipsColor
export type ChipsShapeKeys = keyof typeof chips.chipsShape

export type IconSizeKeys = keyof typeof icon.iconSize