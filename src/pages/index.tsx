import { Redirect } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";

function Home() {
  return <Redirect to={useBaseUrl("/docs")} />;
}

export default Home;
