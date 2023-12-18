import { create } from "zustand";
import { Book } from "../types/type";
import bookApi from "../api/baseQuery";

// Represents the state of the book store.
export type BookState = {
    bookResults: Book[];
    searchTerm: string;
    loading: boolean;
    error: string;
    setLoading: (loading: boolean) => void;
    getBooks: (searchTerm: string) => Promise<void>;
    setSearchTerm: (searchTerm: string) => void;
};

const API_KEY = import.meta.env.VITE_SECRET;

// Create the store
export const useBookStore = create<BookState>((set) => ({
    bookResults: [],
    searchTerm: '',
    loading: false,
    error: "", 

    // Set loading state
    setLoading: (loading: boolean) => {
        set(() => ({ loading }));
    },

    // Set the search term
    setSearchTerm: (searchTerm: string) => {
        set(() => ({ searchTerm }));
    },
    
    // Get books from the API
    getBooks: async (searchTerm: string) => {
        try {
            set(() => ({ loading: true, error: "" }));
            const results = await bookApi.get(
                `?q='${searchTerm}'&maxResults=30&key=${API_KEY}`, 
            );
            set(() => ({ bookResults: results.data.items }));   
        } catch (error) {
            set(() => ({ error: "An error occurred while fetching books." }));  
        } finally {
            set(() => ({ loading: false }));
        }
    },
}));

 