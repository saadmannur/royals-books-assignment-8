export const getFeaturedBooks = async () => {
    const res = await fetch("https://make-a-json-server-for-assignmrnt-8.onrender.com/recommended");
    const data = await res.json();
    return data
}