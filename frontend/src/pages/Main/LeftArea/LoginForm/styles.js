import styled from 'styled-components';

export const Container = styled.form`
  margin-top: 30px;

  .error {
    padding: ${props => props.error && '10px'};

    background: rgba(255, 0, 0, 0.2);
    color: rgba(255, 0, 0, 0.6);
    border-radius: 4px;
    opacity: ${props => (props.error ? '1' : '0')};
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
