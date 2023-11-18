import Footer from "components/Footer";
import PostList from "components/PostList";

export default function PostsPage() {
  return (
    <>
      <PostList hasNavigation={false} />
      <Footer />
    </>
  );
}
