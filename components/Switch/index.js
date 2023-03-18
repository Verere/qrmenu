import { SwitchContainer, SwitchInput, SwitchSpan, SwitchLabel } from './SwitchElements'

import Cookie from 'js-cookie'

const Switch = () => {
  const handleClick = ()=>{

 Cookie.set('darkMode', 'ON')


  }
  return (
    <SwitchContainer onChange={handleClick}>
        <SwitchLabel className="switch">
  <SwitchInput type="checkbox"/>
  <SwitchSpan className="slider round"></SwitchSpan>
</SwitchLabel>
<span>Dark Mode</span>
    </SwitchContainer>
  )
}

export default Switch