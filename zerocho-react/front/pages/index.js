import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  let result = isLoggedIn ?? "test";
  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};

export default Home;