drop table blog;

create table blog (
  post_id SERIAL PRIMARY KEY NOT NULL,
  author_id INTEGER,
  publish_date timestamp with time zone,
  post_title TEXT,
  blog_post TEXT,
  post_likes INTEGER
);
