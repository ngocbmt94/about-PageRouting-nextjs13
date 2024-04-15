import { useRouter } from "next/router";

function BlogPost() {
  const router = useRouter();

  console.log(router.query); // slug :  ['any', 'something', 'new', '2020', '12']

  return <div>This is blog post</div>;
}

export default BlogPost;
