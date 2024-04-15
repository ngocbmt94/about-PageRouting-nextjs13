import { useRouter } from "next/router";
function PortfolioProductDetail() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query.id);
  return <div>Portfolio Product Detail #{router.query.id}</div>;
}

export default PortfolioProductDetail;
