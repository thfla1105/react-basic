import Loader from '@/Components/Loader'
export default function Button({
  children,
  color = 'primary',
  loading,
  ...restProps
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  loading?: boolean
  color?: 'primary' | 'secondary' | 'danger' | 'success'
}) {
  const buttonColor = {
    primary: 'bg-blue-500',
    secondary: 'bg-gray-500',
    danger: 'bg-red-500',
    success: 'bg-green-500'
  }

  return (
    <button
      className={`relative h-[30px] min-w-[40px] px-4 py-2 ${buttonColor[color]}`}
      {...restProps}>
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader
            color="white"
            size={16}
            weight={2}
          />
        </div>
      ) : (
        children
      )}
    </button>
  )
}
