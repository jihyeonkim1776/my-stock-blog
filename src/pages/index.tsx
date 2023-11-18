import Link from "next/link";
import Footer from "components/Footer";
import Carousel from "components/Carousel";
import PostList from "components/PostList";

export default function Home() {
  return (
    <>
      <Carousel />
      <PostList />
      <Footer></Footer>
    </>
  );
}
