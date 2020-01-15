import styled from 'styled-components';

export const Container = styled.li`
  padding: 20px;

  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 54px;
      height: 54px;

      border-radius: 50%;
    }

    .user-info {
      margin-left: 10px;

      strong {
        font-size: 16px;
        color: #333;

        display: block;
      }

      span {
        margin-top: 2px;

        font-size: 13px;
        color: #999;
      }
    }
  }

  p {
    margin: 10px 0;

    color: #666;
    font-size: 14px;
    line-height: 20px;
  }

  a {
    color: #8e4dff;
    font-size: 14px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #5a2ea6;
    }
  }
`;
