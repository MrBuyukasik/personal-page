import { GetStaticPropsContext } from "next";

export async function homePageStaticProps({ res }: any) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {},
  };
}
