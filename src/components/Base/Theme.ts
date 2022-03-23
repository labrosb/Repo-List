export type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter';

export enum Colors {
  primary = '#f0f1f2',
  secondary = '#ccd3e0',
  primaryText = '#3d4254',
  fade = '#fcfcfc',
  error = '#eb1c09'
}

export enum FontSizes {
  large = '20px',
  normal = '14px'
}

export enum Radius {
  primary = '20px'
}

type FontSizesKey = keyof typeof FontSizes;
type ColorsKey = keyof typeof Colors;

export interface StyleProps {
  /** Fonts */
  $fontSize?: FontSizesKey;
  $fontWeight?: FontWeight;
  /** Colors */
  $color?: ColorsKey;
  /** Positioning */
  $textAlign?: string;
  /** Mode */
  $link?: boolean;
}