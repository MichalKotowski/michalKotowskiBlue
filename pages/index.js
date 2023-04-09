import Container from "../components/container";
import HeroPost from "../components/hero-post";
import Layout from "../components/layout";
import { getAllWritingsForHome } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function Index({ preview, allWritings }) {
  const heroPost = allWritings[0];
  const morePosts = allWritings.slice(1);

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              date={heroPost.date}
              slug={heroPost.slug}
            />
          )}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allWritings = (await getAllWritingsForHome(preview)) ?? [];

  return {
    props: { preview, allWritings },
  };
}
