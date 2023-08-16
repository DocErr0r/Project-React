import React from "react";

function NewsItem(props) {
  let { title, description, imageUrl, newsurl, author, date } = props;
  return (
    <div className="my-3 ">
      <div className="card bg-secondary text-white">
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://www.vuelio.com/uk/wp-content/uploads/2019/02/Breaking-News.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author ? author : "Unknown"} on {new Date(date).toUTCString()}
            </small>
          </p>
          <div className=" text-end mb-0">
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
