import styled, { css } from 'styled-components';

export const Container = styled.aside`
  width: 100%;

  strong {
    display: block;

    font-size: 20px;
    text-align: center;
    color: #333;
  }
`;

export const Sidebar = styled.div`
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

export const Form = styled.form`
  width: 320px;
  padding: 30px 20px;
  margin: 0 auto;

  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;

  h2 {
    margin-bottom: 30px;

    text-align: center;
    font-size: 20px;
    color: #333;

    display: block;
  }

  .message {
    padding: ${props => props.message.status && '10px'};

    background: ${props =>
      props.message.type === 'error'
        ? 'rgba(255, 0, 0, 0.2)'
        : 'rgba(0, 255, 0, 0.2)'};
    color: ${props =>
      props.message.type === 'error'
        ? 'rgba(255, 0, 0, 0.6)'
        : 'rgba(0, 155, 0, 0.6)'};
    border-radius: 4px;
    opacity: ${props => (props.message.status ? '1' : '0')};
    transition: opacity 0.4s;

    display: flex;
    justify-content: center;
  }

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

  a {
    margin-top: 10px;

    color: #8e4dff;
    font-size: 14px;
    text-decoration: none;
    text-align: center;
    transition: color 0.2s;

    display: block;
    &:hover {
      color: #5a2ea6;
    }
  }
`;
