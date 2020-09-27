const fs = require("fs");

let geojson = {
  type: "FeatureCollection",
  features: null,
};
let collection = [];
let r = {
  name: ['<SimpleData name="NAME_3">', "</SimpleData>"],
  coordinates: ["<MultiGeometry>", "</MultiGeometry>"],
  outer: [
    /<Polygon><outerBoundaryIs><LinearRing><coordinates>/g,
    "</coordinates></LinearRing></outerBoundaryIs></Polygon>",
  ],
};

function removeTags(data, options) {
  data = data.trim();

  r[options].forEach((e) => {
    data = data.replace(e, "");
  });

  return options == "name"
    ? data
    : data
        .replace(r.outer[0], "")
        .split(r.outer[1])
        .filter((e) => e !== null && e !== "")
        .map((x) =>
          x.split(" ").map((e) => e.split(",").map((s) => parseFloat(s)))
        );
}

function rawDataToJson(data) {
  data = data.split("\n");

  for (let x = 0; x < data.length - 1; x = x + 10) {
    let name = removeTags(data[x + 7], "name");
    let coordinates = removeTags(data[x + 9], "coordinates");
    let res = {
      type: "Feature",
      properties: {
        name: name,
      },
      geometry: {
        type: "Polygon",
        coordinates: coordinates,
      },
    };

    collection.push(res);
  }

  return collection;
}

fs.readFile("./zamboanga.txt", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  geojson.features = rawDataToJson(data);

  fs.writeFile("./geojson.json", JSON.stringify(geojson), (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Successful!");
  });
});
