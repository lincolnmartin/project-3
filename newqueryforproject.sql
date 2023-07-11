CREATE TABLE movies(
test      INTEGER  NOT NULL PRIMARY KEY,
movieId   INTEGER  NOT NULL,
title     VARCHAR(200) NOT NULL,
genres    VARCHAR(100) NOT NULL,
imdbId    INTEGER  NOT NULL,
tmdbId    INTEGER,
userId    INTEGER, 
rating    NUMERIC(3,1),
timestamp INTEGER 
);