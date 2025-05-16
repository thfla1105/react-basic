import { useState, useEffect, useRef } from 'react'
import type { Todo } from '@/stores/todo'
import { useTodoStore } from '@/stores/todo'
import Button from '@/Components/Button'
export default function TodoItem({ todo }: { todo: Todo }) {
  const [isEditMode, setIsEditMode] = useState(false)
  const [title, setTitle] = useState(todo.title)
  const updateTodo = useTodoStore(state => state.updateTodo)
  const deleteTodo = useTodoStore(state => state.deleteTodo)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (isEditMode) {
      inputRef.current?.focus()
    }
  }, [isEditMode])

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.nativeEvent.isComposing) return
    if (e.key === 'Enter') {
      updateTodo({
        ...todo,
        title
      })
    }
    if (e.key === 'Escape') {
      setIsEditMode(false)
    }
  }

  return (
    <div className="flex gap-[10px]">
      {isEditMode ? (
        <>
          <div className="row-stack card">
            <input
              ref={inputRef}
              className="rounded-md border-1 border-gray-400"
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button
              type="submit"
              onClick={() =>
                updateTodo({
                  ...todo,
                  title
                })
              }>
              저장
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="row-stack card items-center">
            <div>{todo.title}</div>
            <Button
              color="secondary"
              onClick={() => setIsEditMode(true)}>
              수정
            </Button>
            <Button
              color="danger"
              onClick={() => deleteTodo(todo)}>
              삭제
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
