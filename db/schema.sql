drop table blog;

create table blog (
  post_id SERIAL PRIMARY KEY NOT NULL,
  author_id INTEGER,
  publish_date timestamp with time zone,
  post_title TEXT,
  blog_post TEXT
);

drop table users;

create table users (
  user_id SERIAL PRIMARY KEY NOT NULL,
  facebook_id TEXT,
  user_name TEXT
);
