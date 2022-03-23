import React from 'react';
import { faStar, faUtensils } from '@fortawesome/free-solid-svg-icons';
import ColumnText from '../Base/Text';
import { Row, Column, StarIcon, ForkIcon } from './RepositoryRow.ui';

type Props = {
  key?: string;
  isHeader?: boolean;
  name: string;
  starsNum: number | string;
  forksNum: number | string;
  url?: string;
};

/** Row of repository list */
function RepositoryRow({
  name,
  url,
  starsNum,
  forksNum,
  isHeader,
  ...rest
}: Props): React.ReactElement {
  const fontWeight = isHeader ? 'bold' : 'normal';

  const handleClick = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <Row
      $link={!!url}
      onClick={handleClick}
      {...rest}
    >
      <Column>
        <ColumnText $fontWeight={fontWeight}>
          {name}
        </ColumnText>
      </Column>
      <Column>
        <ColumnText $fontWeight={fontWeight}>
          {!isHeader &&
            <StarIcon icon={faStar} />
          }
          {starsNum}
        </ColumnText>
      </Column>
      <Column>
        <ColumnText $fontWeight={fontWeight}>
          {!isHeader &&
            <ForkIcon icon={faUtensils} />
          }
          {forksNum}
        </ColumnText>
      </Column>            
    </Row>
  );
}

export default RepositoryRow;