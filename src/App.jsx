import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";
import './index.css'
import Activity from "./components/Activity/Activity";

function App() {

  const [readingTime, setReadingTime] = useState(0);
  const [bookMarked, setBookMarked] = useState([]);

  const handleBookMarkCount = (data) => {
    setBookMarked([...bookMarked, data]);

  }

  const handleReadingTime = (time, id) => {
    setReadingTime(readingTime + time);
    handleRemoveBookMark(id);
  }

  const handleRemoveBookMark = (id) => {
    const remainingBookMarks = bookMarked.filter(marked => marked.id !== id);
    setBookMarked(remainingBookMarks)
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="flex gap-4 max-w-screen-2xl mx-auto mt-5">
        <div className="w-9/12 blog-container p-4 rounded-lg">
          <Blogs handleReadingTime={handleReadingTime} handleBookMarkCount={handleBookMarkCount}></Blogs>
        </div>
        <div className="w-3/12 blog-container p-4 rounded-lg">
          <h3 className="text-2xl">Reading Time: {readingTime}</h3>
          <h3 className="text-2xl">Bookmark Count: 0{bookMarked.length}</h3>
          <div className="mt-4">
            <Activity data={bookMarked}></Activity>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
