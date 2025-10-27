import React from 'react'
import { View, ViewProps } from 'react-native'

export interface CardProps extends ViewProps {
  children: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
  return (
    <View
      className={`bg-white rounded-lg shadow-md border border-gray-200 p-4 ${className}`}
      {...props}
    >
      {children}
    </View>
  )
}
