import styled from 'styled-components'

export const SwitchContainer = styled.div`
 position: absolute;
 top: 0;
    
      right: 0;
      margin-right:2rem;
      display: flex;
      justify-content: center;
      align-items: center;
  `
export const SwitchLabel = styled.label`
 position: relative;
  display: inline-block;
  width: 5rem;
  height: 2.5rem;
  margin-right:1rem;
  & input{
    opacity: 0;
  width: 0;
  height: 0;
  }`
export const SwitchInput = styled.input`
&:checked + .slider {
  background-color: #2196F3;
}

&:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

&:checked + .slider:before {
  -webkit-transform: translateX(2.3rem);
  -ms-transform: translateX(2.3rem);
  transform: translateX(2.3rem);
}`
export const SwitchSpan = styled.span`
&.slider{
    position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
    }
    &.slider:before {
  position: absolute;
  content: "";
  height: 1.8rem;
  width: 1.8rem;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
&.slider.round {
  border-radius: 2.5rem;
}
&.slider.round:before {
  border-radius: 40%;
}
    `