import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  width: ${props => (props.signed ? '320px' : '100%')};
  transition: width 0.4s;

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

export const Sidebar = styled.div`
  width: 320px;
  padding: 30px 20px;
  margin: 0 auto;

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
