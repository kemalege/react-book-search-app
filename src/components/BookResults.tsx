import { useEffect } from "react";
import useBooks from "../hooks/useBook";
import { SpinningIcon } from "./ActivityIndicator";
import BookCard from "./BookCard";

const BookResults = () => {
  // Use the custom hook to get the book results
  const { getBooks, bookResults, searchTerm, loading } = useBooks();

  // Get the books on initial render
  useEffect(() => {
    getBooks(searchTerm);
  }, []);

  // If the loading state is true, show the loading icon, else book results
  return (
    <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gridGap: "2rem", margin: "2rem" }}>
        {!loading ? bookResults.map((book) => (
           <BookCard book={book}/>
        )) : <SpinningIcon/>}
    </section>
  );
};

export default BookResults;
