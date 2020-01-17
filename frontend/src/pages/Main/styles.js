import styled from 'styled-components';

export const MainContent = styled.main`
  margin-left: 30px;
  flex: ${props => (props.signed ? 1 : 0)};
  transition: flex 0.4s;
  overflow: hidden;
  transition: opacity 2s;
  opacity: ${props => (props.signed ? 1 : 0)};

  @media (max-width: 1000px) {
    margin-top: 30px;
    margin-left: 0;
  }

  ul {
    list-style: none;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    @media (max-width: 650px) {
      grid-template-columns: 1fr;
    }
  }
`;
