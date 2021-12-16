library(geospaar)
library(rgdal)

countries <- 'json/countries.json'
polygons <- readOGR(countries, "OGRGeoJSON", require_geomType="wkbPolygon")

Centroid <- gCentroid(polygons, byid = TRUE)
