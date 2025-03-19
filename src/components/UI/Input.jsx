import styled from 'styled-components'

export const Input = ({type, placeholder, value, onChange, onKeyDown, ...rest}) => {
  return <Styledinput
    type={type} 
    placeholder={placeholder}
    value={value} 
    onChange={onChange}
    onKeyDown={onKeyDown} 
    {...rest} />
}

const Styledinput = styled.input`
    height: 50px;
    border-radius: 8px;
    border: "#BDBDBD";
    color: #757575;
    font-size: 20px;
`