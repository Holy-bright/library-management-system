import { createContext, useContext, useEffect, useReducer } from "react";

const STORAGE_KEY = "readingList";

const ReadingListContext = createContext(null);

function readingListReducer(state, action) {
  switch (action.type) {
    case "ADD_BOOK":
      if (state.some((book) => book.id === action.payload.id)) return state;
      return [...state, action.payload];
    case "REMOVE_BOOK":
      return state.filter((book) => book.id !== action.payload);
    case "CLEAR_LIST":
      return [];
    default:
      return state;
  }
}

function loadSavedList() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function ReadingListProvider({ children }) {
  const [readingList, dispatch] = useReducer(readingListReducer, [], loadSavedList);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(readingList));
    } catch {
      // Storage can be full or blocked in private browsing. The list still works in memory.
    }
  }, [readingList]);

  const addBook = (book) =>
    dispatch({
      type: "ADD_BOOK",
      payload: {
        id: book.id,
        title: book.title,
        author: book.author,
        genre: book.genre?.name ?? "",
      },
    });

  const removeBook = (id) => dispatch({ type: "REMOVE_BOOK", payload: id });

  const clearList = () => dispatch({ type: "CLEAR_LIST" });

  const isInList = (id) => readingList.some((book) => book.id === id);

  return (
    <ReadingListContext.Provider
      value={{ readingList, dispatch, addBook, removeBook, clearList, isInList }}
    >
      {children}
    </ReadingListContext.Provider>
  );
}

export function useReadingList() {
  const context = useContext(ReadingListContext);
  if (!context) {
    throw new Error("useReadingList must be used inside ReadingListProvider");
  }
  return context;
}
