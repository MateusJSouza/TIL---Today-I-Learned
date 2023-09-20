import { ComponentProps, ReactNode } from 'react'

export type LabelProps = ComponentProps<'label'> & {
  children: ReactNode
}

export function Label({ children, ...props }: LabelProps) {
  return (
    <label className="text-sm font-medium text-zinc-700" {...props}>
      {children}
    </label>
  )
}
