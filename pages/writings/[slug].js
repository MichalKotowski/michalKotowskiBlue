import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import {
  getAllWritingsWithSlug,
  getWritingAndMoreWritings,
} from "../../lib/api";
import PostTitle from "../../components/post-title";
import { CMS_NAME } from "../../lib/constants";

export default function Post({ writing, moreWritings, preview }) {
  const router = useRouter();

  if (!router.isFallback && !writing) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {`${writing.title} | Next.js Blog Example with ${CMS_NAME}`}
                </title>
              </Head>
              <PostHeader title={writing.title} date={writing.date} />
              <PostBody content={writing.content} />
            </article>
            <SectionSeparator />
            {moreWritings && moreWritings.length > 0 && (
              <MoreStories posts={moreWritings} />
            )}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getWritingAndMoreWritings(params.slug, preview);

  return {
    props: {
      preview,
      writing: data?.writing ?? null,
      moreWritings: data?.moreWritings ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allWritings = await getAllWritingsWithSlug();
  return {
    paths: allWritings?.map(({ slug }) => `/writings/${slug}`) ?? [],
    fallback: true,
  };
}
