import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyleProps, Colors } from '../Base/Theme';

export const Row = styled.div<StyleProps>`
  display: flex;
  ${(props) => props.$link && `
    &:hover {
      cursor: pointer;
    }
  `}
`;

export const Column = styled.div`
  flex: 1;
  padding: 6px;
  border-bottom: 1px dashed ${Colors.secondary};
`;

export const StarIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

export const ForkIcon = styled(StarIcon)`
  font-size: 16px;
`;