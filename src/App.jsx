import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Blogs from "./components/Blogs/Blogs";

function App() {
  // __________________________________________________
  const [bookmarked, setBookmarked] = useState([]);
  const handleBookmarked = (ClickedBlog) => {
    const previousMarked = bookmarked.find(
      (blog) => blog.id === ClickedBlog.id
    );

    if (!previousMarked) {
      setBookmarked([...bookmarked, ClickedBlog]);
    }
  };
  // ______________________________________________
  const [readingCount, setReadingCount] = useState(0);
  const handleMarkAsRead = (time, id) => {
    setReadingCount(readingCount + time);
    handleRemoveFromBookmark(id);
  };

  function handleRemoveFromBookmark(id) {
    const remainingBookmark = bookmarked.filter((mark) => mark.id !== id);
    setBookmarked(remainingBookmark);
  }

  return (
    <>
      <div className="">
        {/* ________write your code below____________  */}
        <Suspense fallback={<h3>Testing and loading...</h3>}>
          <Navbar></Navbar>

          <div className="main-container flex text-center">
            <div className="left-container w-[70%]">
              <Blogs
                handleBookmarked={handleBookmarked}
                handleMarkAsRead={handleMarkAsRead}
              ></Blogs>
            </div>
            <div className="right-container w-[30%]">
              <h1>Reading time: {readingCount}</h1>
              <h1>Bookmarked count: {bookmarked.length}</h1>
              {bookmarked.map((marked) => (
                <p className="text-left p-0.5 my-3 bg-amber-200 text-base font-semibold rounded-lg">
                  {marked.title}
                </p>
              ))}
            </div>
          </div>
        </Suspense>
      </div>
    </>
  );
}

export default App;
