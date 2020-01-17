import styled from 'styled-components';

export const Container = styled.form`
  margin-top: 30px;

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

  button {
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

  .cancel-button,
  .delete-button {
    background: rgba(255, 0, 0, 0.5);
    margin-top: 10px;

    &:hover {
      background: rgba(255, 0, 0, 0.6);
    }
  }
`;

export const Input = styled.input.attrs(props => ({
  disabled: !props.editing,
}))`
  width: 100%;
  height: 32px;

  font-size: 14px;
  color: #666;
  border: 0;
  border-bottom: ${props => props.editing && '1px solid #eee'};
`;
