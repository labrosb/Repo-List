import styled, { css } from 'styled-components';
import { StyleProps, FontSizes, Colors } from './Theme';

const sharedStyles = css<StyleProps>`
  color: ${({ $color }) => Colors[$color || 'primaryText']};
  text-align: ${({ $textAlign }) => $textAlign || 'left'};
  font-weight: ${({ $fontWeight }) => $fontWeight || 'normal'};
`;

const Text = styled.p<StyleProps>`
  ${sharedStyles};
  font-size: ${({ $fontSize }) => FontSizes[$fontSize || 'normal']};
`;

export const H1 = styled.h1<StyleProps>`
  ${sharedStyles};
  font-size: ${({ $fontSize }) => FontSizes[$fontSize || 'large']};
`;

export default Text;