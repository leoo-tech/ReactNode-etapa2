import Postagem from "./Postagem";
import "./Blog.css";
function Blog() {
    return (
        <div className="blog">
        <h1>Blog</h1>
        <Postagem />
        <Postagem />
        <Postagem />
        <Postagem />
        </div>
    );
}

export default Blog;