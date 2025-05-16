import { NavLink } from 'react-router-dom'

export default function Header() {
  const tabs = [
    { label: 'Home', to: '/' },
    { label: 'Movies', to: '/movies' },
    { label: 'About', to: '/about' },
    { label: 'Todos', to: '/todos' }
  ]
  return (
    <header>
      <nav className="flex gap-6 border-b border-gray-200 px-4 py-2">
        {tabs.map(tab => (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={({ isActive }) =>
              `border-b-2 pb-2 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:border-blue-300 hover:text-blue-600'
              }`
            }>
            {tab.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
