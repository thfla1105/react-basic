import { useTodoStore } from '@/stores/todo'
import { useState } from 'react'
import Button from '@/Components/Button'

export default function TodoCreator() {
  const [loading, setLoading] = useState(false)
  const title = useTodoStore(state => state.title)
  const setTitle = useTodoStore(state => state.setTitle)
  const createTodo = useTodoStore(state => state.createTodo)

  async function handleCreateTodo() {
    setLoading(true)
    await createTodo()
    setLoading(false)
  }

  return (
    <>
      <div className="row-stack card">
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
              handleCreateTodo()
            }
          }}
        />
        <Button
          loading={loading}
          onClick={handleCreateTodo}>
          추가
        </Button>
      </div>
    </>
  )
}
