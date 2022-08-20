import Head from "next/head";
<<<<<<< HEAD
import Example from "../components/example";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
=======
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
>>>>>>> main
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
<<<<<<< HEAD
        <p className="text-3xl">[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <Example />
=======
        <p>[Your Self Introduction]</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <div className={utilStyles.lightText}>
                <Date dateString={date} />
              </div>
            </li>
          ))}
        </ul>
      </section>
>>>>>>> main
    </Layout>
  );
}
