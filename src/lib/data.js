export const getFeaturedBooks = async () => {
    const res = await fetch("https://make-a-json-server-for-assignmrnt-8.onrender.com/recommended");
    const data = await res.json();
    return data
};

export const getCategories = async () => {
    const res = await fetch("https://make-a-json-server-for-assignmrnt-8.onrender.com/categories");
    const data = await res.json();
    return data
};

export const getAllBooks = async () => {
    const res = await fetch("https://make-a-json-server-for-assignmrnt-8.onrender.com/books");
    const data = await res.json();
    return data
};

export const getBooksByCategory = async (id) => {
    const res = await fetch(`https://make-a-json-server-for-assignmrnt-8.onrender.com/books?category_id=${id}`);
    const data = await res.json();
    return data
};