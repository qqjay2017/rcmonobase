import { getTableOfContents } from '@/lib/toc'
import { allDocs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import Balancer from 'react-wrap-balancer'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Icons } from '@/components/icons'
import { badgeVariants } from '@/components/badge'
import { Mdx } from '@/components/mdx-components'
import { ScrollArea } from '@/components/scroll-area'
import { DashboardTableOfContents } from '@/components/toc'
import '@/styles/mdx.css'
interface DocPageProps {
  params: {
    slug: string[]
  }
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join('/') || ''
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)
  if (!doc) {
    null
  }
  return doc
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params })
  if (!doc) {
    notFound()
  }

  const toc = await getTableOfContents(doc.body.raw)

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">Docs</div>
          <ChevronRightIcon className="h-4 w-4" />
          <div className="font-medium text-foreground">{doc.title}</div>
        </div>
        <div className="space-y-2">
          <h1 className={cn('scroll-m-20 text-4xl font-bold tracking-tight')}>{doc.title}</h1>
          {doc.description && (
            <p className="text-lg text-muted-foreground">
              <Balancer>{doc.description}</Balancer>
            </p>
          )}
        </div>
        {doc.radix ? (
          <div className="flex items-center space-x-2 pt-4">
            {doc.radix?.link && (
              <Link
                href={doc.radix.link}
                target="_blank"
                rel="noreferrer"
                className={cn(badgeVariants({ variant: 'secondary' }))}
              >
                <Icons.radix className="mr-1 h-3 w-3" />
                Radix UI
              </Link>
            )}
            {doc.radix?.api && (
              <Link
                href={doc.radix.api}
                target="_blank"
                rel="noreferrer"
                className={cn(badgeVariants({ variant: 'secondary' }))}
              >
                API Reference
              </Link>
            )}
          </div>
        ) : null}
        <div className="pb-12 pt-8">
          <Mdx code={doc.body.code} />
        </div>
        {/* <DocsPager doc={doc} /> */}
      </div>
      {doc.toc && (
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 pt-4">
            <ScrollArea className="pb-10">
              <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
                <DashboardTableOfContents toc={toc} />
              </div>
            </ScrollArea>
          </div>
        </div>
      )}
    </main>
  )
}
