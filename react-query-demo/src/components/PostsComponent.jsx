import { useQuery } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

function PostsComponent() {
    const { data, error, isError, isLoading, isFetching, refetch } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        staleTime: 60000, // Cache data for 60 seconds
        cacheTime: 300000, // Keep data in cache for 5 minutes (default)
        keepPreviousData: true, // Prevents UI flicker when refetching
        refetchOnWindowFocus: true, // Auto-refetch on tab focus
      });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refreshing..." : "Refetch Data"}
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
