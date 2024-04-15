import Link from "next/link";

function HomePage() {
  return (
    <div>
      This is home page
      <ul>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/clients">clients</Link>
        </li>
        <li>
          <Link href="/portfolio">portfolio</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
