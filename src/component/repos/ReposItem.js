import React from "react";

export default function ReposItem({ repo }) {
  return (
    <div>
      <a
        style={repoStyle}
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
      >
        {repo.name}
      </a>
    </div>
  );
}

const repoStyle = {
  backgroundColor: "#333",
  color: "#eee",
  padding: "0.9rem 1rem",
  display: "block",
  margin: "1rem 0",
  textAlign: "center",
  textDecoration: "none",
  fontWeight: "bold",
  textTransform: "uppercase",
};
