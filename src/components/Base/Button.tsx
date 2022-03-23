import styled from 'styled-components';
import { Colors, Radius, StyleProps } from './Theme';

const Button = styled.button<StyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  line-height: 19px;
  padding: 16px;
  margin-top: 36px;
  background-color: ${Colors.fade};
  color: ${Colors.primaryText};
  border: 1px solid ${Colors.primary};
  border-radius: ${Radius.primary};
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    pointer-events: none;
    color: grey;
`;

export default Button;