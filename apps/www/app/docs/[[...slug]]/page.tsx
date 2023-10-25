import { allDocs } from "contentlayer/generated"


interface DocPageProps {
  params: {
    slug: string[]
  }
}

async function getDocFromParams({ params }: DocPageProps) { 
    const slug = params.slug?.join("/") || "";
    // const doc = [].find((doc) => doc.slugAsParams === slug);
//     if (!doc) {
//     null
//   }

//   return doc
}

export default async function DocPage({ params}: DocPageProps) { 
 const doc = await getDocFromParams({ params })
    return <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
DocPage
    </main>
}