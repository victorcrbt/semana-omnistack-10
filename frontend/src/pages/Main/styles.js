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

  form {
    margin-top: 30px;

    .input-block {
      &:not(:first-child) {
        margin-top: 20px;
      }

      label {
        display: block;

        color: #acacac;
        font-size: 14px;
        font-weight: bold;
      }

      input {
        width: 100%;
        height: 32px;

        font-size: 14px;
        color: #666;
        border: 0;
        border-bottom: 1px solid #eee;
      }
    }

    .input-group {
      margin-top: 20px;

      display: grid;
      gap: 20px;
      grid-template-columns: 1fr 1fr;

      .input-block {
        margin-top: 0;
      }
    }

    button[type='submit'] {
      width: 100%;
      margin-top: 30px;
      padding: 15px 20px;

      border: 0;
      border-radius: 2px;
      background: #7d40e7;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
      transition: background 0.5s;

      &:hover {
        background: #6931ca;
      }
    }
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

    .dev-item {
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
    }
  }
`;
