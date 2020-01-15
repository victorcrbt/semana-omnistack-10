import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;

  display: flex;
  align-items: flex-start;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  width: 320px;
  padding: 30px 20px;

  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;

  @media (max-width: 1000px) {
    width: 100%;
  }

  strong {
    display: block;

    font-size: 20px;
    text-align: center;
    color: #333;
  }
`;

export const MainContent = styled.main`
  margin-left: 30px;
  flex: 1;

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
