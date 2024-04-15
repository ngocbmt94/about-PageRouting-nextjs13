import Link from "next/link";

function ClientsPage() {
  const dataLink = [
    { clientId: "bich-ngoc", name: "Bich Ngoc" },
    { clientId: "gau", name: "Kha Uyen" },
  ];
  return (
    <div>
      Client Page
      <ul>
        {dataLink.map((client) => (
          <li key={client.clientId}>
            {/* goto url : http://localhost:3000/clients/bich-ngoc */}
            <Link href={`clients/${encodeURIComponent(client.clientId)}`}>{client.name}</Link>

            {/* pass data in a url : http://localhost:3000/clients?clientId=bich-ngoc */}
            {/* <Link href={{ pathName: `clients/[clientId]`, query: { clientId: client.clientId } }}>{client.name}</Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
