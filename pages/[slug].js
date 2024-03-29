import { gql } from 'graphql-request'

import { getPageLayout } from '@/layout'
import { graphcmsClient } from '@/lib/_client'
import { pageQuery } from '@/lib/_queries'
import { parsePageData } from '@/utils/_parsePageData'
import Wrapper from '@/components/wrapper'
import PageHeading from '@/components/blocks/page-heading'

export default function Page({ page }) {
  return (
    <>
      <PageHeading page={page} otherPages={page?.footer.pages}/>
      <Wrapper {...page} />
    </>
  )
}

export async function getStaticProps({ locale, params, preview = true }) {
  const client = graphcmsClient(preview)
  const { page } = await client.request(pageQuery, {
    locale,
    slug: params.slug
  })

  if (!page) {
    return {
      notFound: true
    }
  }

  const parsedPageData = await parsePageData(page)

  return {
    props: {
      page: parsedPageData,
      preview
    },
    revalidate: 60
  }
}

export async function getStaticPaths({ locales }) {
  let paths = []

  const client = graphcmsClient(true)

  const { pages } = await client.request(gql`
    {
      pages(where: { slug_not: "home" }) {
        slug
      }
    }
  `)
  
  paths = [
    ...paths,
    ...pages.map((page) => ({ params: { slug: page.slug }}))
  ]

  return {
    paths,
    fallback: false
  }
}

Page.getLayout = getPageLayout
