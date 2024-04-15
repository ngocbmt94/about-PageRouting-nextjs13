import { useRouter } from "next/router";

function ClientDetail() {
  const router = useRouter();
  const clientId = router.query.clientId;

  function handleLoadProject() {
    // ... after load data
    router.push(`${encodeURIComponent(clientId)}/project-a`);
  }

  return (
    <div>
      Client Detail <button onClick={handleLoadProject}>Go to detail project of client {router.query.clientId}</button>
    </div>
  );
}

export default ClientDetail;
