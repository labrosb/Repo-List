import React from 'react';
import { H1 } from '../Base/Text';
import { Container, LogoContainer, Logo } from './Header.ui';

type Props = {
  // The page title
  title: string;
  // The icon for the logo
  // @ts-ignore
  icon: any;
};

/** Header component  */
function Header({ title, icon }: Props): React.ReactElement {

  return (
		<Container>
      <LogoContainer>
        <Logo icon={icon} />
        <H1>{title}</H1>
      </LogoContainer>
		</Container>
  );
}

export default Header;