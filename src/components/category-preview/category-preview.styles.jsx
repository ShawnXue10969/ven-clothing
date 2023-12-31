import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  max-width: 1650px;
  margin: 0 auto 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 20px;

  @media only screen and (min-width: 476px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
