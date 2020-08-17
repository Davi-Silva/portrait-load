import styled from 'styled-components'

export const Wrapper = styled.div`
  border: 2px dashed
    ${(props) =>
      props.isDragAccept
        ? props.isDragAcceptColor
        : props.isDragNotAcceptColor};
  ${(props) => props.isDragReject && 'red'};
  border-radius: 6px;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  p {
    text-align: center;
  }
`

export const Message = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  p {
    text-align: center;
    color: ${(props) => props.textColor};
    font-size: ${(props) => props.textSize};
  }
`
