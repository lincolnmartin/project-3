CREATE TABLE newmovies(
test      INTEGER  NOT NULL PRIMARY KEY 
movieId   INTEGER  NOT NULL,
title     VARCHAR(79) NOT NULL,
genres    VARCHAR(43) NOT NULL,
imdbId    INTEGER  NOT NULL,
tmdbId    INTEGER  NOT NULL,
userId    INTEGER  NOT NULL,
rating    NUMERIC(3,1) NOT NULL,
timestamp INTEGER  NOT NULL,
);