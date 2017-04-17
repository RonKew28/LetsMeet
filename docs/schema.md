# Schema Information

## users
column name | data type | details
:---:|:---:|:---:
id | integer | not null, primary key
password_digest | string | not null
session_token | string | not null, indexed, unique
username | string | not null, indexed, unique
email | string | not null, indexed, unique
location | string | not null
image_url | string |
bio | string |

## groups
column name | data type | details
:---:|:---:|:---:
id | integer | not null, primary key
name | string | not null, indexed, unique
category_id | integer | not null, foreign key (references categories), indexed
description | text | not null
location | string | not null
image_url | string
founded_date | date | not null

## events
column name | data type | details
:---:|:---:|:---:
id | integer | not null, primary key
name | string | not null, indexed
description | text | not null
location | string | not null
date | datetime | not null

## categories
column name | data type | details
:---:|:---:|:---:
id | integer | not null, primary key
title | string | not null, unique, indexed
image_url | string

## category_groups
column name | data type | details
:---:|:---:|:---:
id | integer | not null, primary key
group_id | integer | not null, foreign key (references groups), indexed
category_id | integer | not null, foreign key (references categories), indexed

## rsvps
column name | data type | details
:---:|:---:|:---:
id | integer | not null, primary key
user_id | integer | not null, foreign key (references users), indexed
event_id | integer | not null, foreign key (references events), indexed

## memberships
column name | data type | details
:---:|:---:|:---:
id | integer | not null, primary key
user_id | integer | not null, foreign key (references users), indexed
group_id | integer | not null, foreign key (references groups), indexed
