import { ThemeObjectProps } from './theme/types'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeObjectProps {}
  // export interface DefaultTheme extends DarkTheme {}
}