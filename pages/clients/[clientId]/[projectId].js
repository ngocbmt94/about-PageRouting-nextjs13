import { useRouter } from "next/router";
function ClientProjectDetail() {
  const router = useRouter();

  // console.log(router.query); // can access 2 property projectId Aan clientId : http://localhost:3000/clients/bich-ngoc/new-project
  return <div>Client Project Detail </div>;
}

export default ClientProjectDetail;
