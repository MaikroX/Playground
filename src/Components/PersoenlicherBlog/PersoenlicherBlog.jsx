import { useEffect, useState } from "react";
import { client, urlFor } from "../../sanityClient";
import { PortableText } from "@portabletext/react";
import "./PersoenlicherBlog.scss";

function PersoenlicherBlog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "post"]{_id, title, body, publishedAt, mainImage}`)
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="persoenlicherBlog__container p-2">
      <p className="m-0">Aktuelle Neuigkeiten</p>
      {posts.map((post) => (
        <article key={post._id}>
          <p className="m-0">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
          <h2 className="text-center p-4">{post.title}</h2>

          <div className="blog__content d-flex justify-content-evenly flex-column flex-lg-row align-items-sm-center">
            {post.mainImage && (
              <img
                className="blog__image"
                src={urlFor(post.mainImage).width(800).url()}
                alt={post.title}
              />
            )}
            <div className="blog__content--text d-flex flex-column justify-content-center align-items-center p-2">
              <PortableText
                className="blog__content--componentText"
                value={post.body}
              />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default PersoenlicherBlog;
