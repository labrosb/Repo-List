import styled from 'styled-components';
import BaseContainer from '../Base/Container';
import Text from '../Base/Text';
import { Colors, Radius } from '../Base/Theme';

export const Container = styled(BaseContainer)`
  margin-top: 20px;
  margin-bottom: 40px;
  border-bottom: 1px solid ${Colors.secondary};
  border-radius: ${Radius.primary};
`;

export const NoResultsText = styled(Text)`
  line-height: 40px;
`;