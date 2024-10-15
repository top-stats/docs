import { PropsWithChildren, useId } from 'react'

export interface ButtonProps extends PropsWithChildren {
}

export function ResponseFields({ response }) {
  return (
    response.map(v => {
      return (
        <details key={useId()} className="collapse collapse-arrow bg-base-200">
          <summary style={{ display: 'flex ' }} className="collapse-title gap-2 text-sm font-lg">{v.value}
            {v.types?.map(t => {
              return <span key={useId()} className="badge badge-neutral badge-md">{t}</span>
            })}
            {v.isDeprecated && <span className="badge badge-error badge-md">Deprecated</span>}
          </summary>
          <div className="collapse-content text-sm">
            <p>{v.description}</p>
          </div>
        </details>
      )
    })
  )
}
