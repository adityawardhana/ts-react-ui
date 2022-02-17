import defaultTheme from ".";

export type ThemeKeysProps = {} | string | number;
export type ThemeTypeProps = "default" | "dark";
export type ThemeObjectProps = typeof defaultTheme

export type ColorKeys = keyof typeof defaultTheme.color;
export type BreakpointKeys = keyof typeof defaultTheme.grid.breakpoint

export type ButtonColorKeys = keyof typeof defaultTheme.button.color;
export type ButtonVariantKeys = keyof typeof defaultTheme.button.color.primary;
export type ButtonSizeKeys = keyof typeof defaultTheme.button.size;
export type ButtonShapeKeys = keyof typeof defaultTheme.button.shape;

export type BadgeColorKeys = keyof typeof defaultTheme.badge.color;
export type BadgeVariantKeys = keyof typeof defaultTheme.badge.color.primary;
export type BadgeShapeKeys = keyof typeof defaultTheme.badge.shape;

export type ChipsActiveColorKeys = keyof typeof defaultTheme.chips.activeColor;
export type ChipsVariantKeys = keyof typeof defaultTheme.chips.variant;
export type ChipsShapeKeys = keyof typeof defaultTheme.chips.shape;

export type IconSizeKeys = keyof typeof defaultTheme.icon.size;
