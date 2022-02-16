export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <h1>welcome to my Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const res = await fetch(`
//   http://jsonplaceholder.typicode.com/posts?_start=0&_end=10`);
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// };

//http://jsonplaceholder.typicode.com/posts?_start=0&_end=10

export const getStaticProps = async () => {
  const res = await fetch(`
  http://jsonplaceholder.typicode.com/posts?_start=0&_end=10`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 20,
  };
};
