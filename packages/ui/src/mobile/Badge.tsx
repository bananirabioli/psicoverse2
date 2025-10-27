import React from 'react'
import { View, Text, ViewProps } from 'react-native'

export interface BadgeProps extends ViewProps {
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
    <View
      className={`px-2 py-1 rounded-full ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <Text className={`text-xs font-medium ${textStyles[variant]}`}>
        {children}
      </Text>
    </View>
  )
}
