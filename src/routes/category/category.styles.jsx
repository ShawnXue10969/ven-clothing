import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;

export const CategoryContainer = styled.div`
  max-width: 1650px;
  margin: 0 auto 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media only screen and (min-width: 476px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
