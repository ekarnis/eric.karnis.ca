import galleries from "./_galleries.js";

const contents = JSON.stringify(
  galleries.map(gallery => {
    return {
      title: gallery.title,
      slug: gallery.slug,
      pictures: gallery.pictures
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(contents);
}
