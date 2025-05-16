// Styled Component - 올드
// Emotion - 올드
// TailwindCSS - 자주 사용
// Vanilla Extract + 타입 안정성! = 별도 파일 구분

export default function TestField({
  label,
  hint,
  value,
  onChange,
  deleteValue,
  ...restProps
}: React.InputHTMLAttributes<HTMLInputElement> & {
  value: string
  label?: string
  hint?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  deleteValue: () => void
}) {
  return (
    <>
      <label className="block">
        {label && <span>{label}</span>}
        <input
          type="text"
          className="w-[100%]"
          value={value}
          onChange={onChange}
          {...restProps}></input>
        {hint && <span>{hint}</span>}
        <button
          className="bg-amber-400 text-white"
          onClick={deleteValue}>
          삭제
        </button>
      </label>
    </>
  )
}
