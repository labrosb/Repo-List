import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BaseContainer from '../Base/Container';
import { Colors } from '../Base/Theme';

export const Container = styled.div`
  justify-content: space-between;
  background-color: ${Colors.primary};
  color: ${Colors.primaryText};
  padding: 16px 0;
`;

export const LogoContainer = styled(BaseContainer)`
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled(FontAwesomeIcon)`
  font-size: 28px;
  margin-right: 18px;
`;