import React from 'react'
import Icon from 'react-icons-kit'
import { spinner } from 'react-icons-kit/fa/spinner'

export default function LoadingSpinner() {
  return (
    <Icon 
      icon={spinner}
      className="__freshspire-loading-spinner"
      size={36}
      style={{
        width: '100%',
        color: '#85b987',
      }}
    />
  )
}
