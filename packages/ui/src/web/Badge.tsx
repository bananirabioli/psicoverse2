import React from 'react'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'default' | 'secondary' | 'outline'
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default', 
  className = '', 
  ...props 
}) => {
  const variantStyles = {
    default: 'bg-blue-500',
    secondary: 'bg-gray-500',
    outline: 'bg-transparent border border-gray-300'
  }

  const textStyles = {
    default: 'text-white',
    secondary: 'text-white',
    outline: 'text-gray-700'
  }

  return (
    <div
      className={`px-2 py-1 rounded-full ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span className={`text-xs font-medium ${textStyles[variant]}`}>
        {children}
      </span>
    </div>
  )
}
