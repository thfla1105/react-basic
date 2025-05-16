import { useState } from 'react'
import TestField from '../Components/TestField'
import Button from '../Components/Button'

import './index.css'

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin() {
    console.log(email, password)
  }

  return (
    <div className="vertical-stack">
      <TestField
        label="이메일"
        value={email}
        onChange={e => setEmail(e.target.value)}
        deleteValue={() => setEmail('')}
        type="email"
      />
      <TestField
        label="비밀번호"
        hint="대소문자 하나 이상 포함해야 합니다"
        value={password}
        onChange={e => setPassword(e.target.value)}
        deleteValue={() => setPassword('')}
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onKeyDown={e => {
          if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
            console.log(email, password)
          }
        }}
      />
      <Button
        type="submit"
        onClick={handleLogin}
        onScroll={() => {}}>
        <span style={{ color: 'black' }}>로그인</span>
      </Button>
    </div>
  )
}
