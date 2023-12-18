import { useBookStore } from "../store/bookStore"

export default function useBooks() {
    
    // Get the store and its data
    const todoStore = useBookStore(state => ({
        bookResults: state.bookResults,
        getBooks: state.getBooks,
        loading: state.loading,
        searchTerm: state.searchTerm,
        setSearchTerm: state.setSearchTerm,
    }));

    return todoStore;
}
