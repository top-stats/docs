import { source } from '@/lib/source'
import { DocsLayout } from 'fumadocs-ui/layouts/docs'
import { baseOptions } from '@/lib/layout.shared'

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={source.pageTree}
      sidebar={{
        tabs: {
          transform(option, node) {
            const meta = source.getNodeMeta(node)
            if (!meta || !node.icon) return option
            console.log(meta)

            const color = `var(--${meta.path.split('/')[0]}-color, var(--color-fd-foreground))`

            console.log(1000, color)

            return {
              ...option,
              icon: (
                <div
                  className='[&_svg]:size-full rounded-lg size-full text-(--tab-color) max-md:bg-(--tab-color)/10 max-md:border max-md:p-1.5'
                  style={
                    {
                      '--tab-color': color,
                    } as object
                  }
                >
                  {node.icon}
                </div>
              ),
            }
          },
        },
      }}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  )
}
