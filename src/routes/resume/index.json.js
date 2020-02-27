import sections from "./_sections.js";

const contents = JSON.stringify(
  sections.map(section => {
    return {
      title: section.title,
      slug: section.slug
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(contents);
}
