import type { PropsWithChildren } from 'react'

export interface ButtonProps extends PropsWithChildren {
  onClick: () => void
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {children}
    </button>
  )
}
