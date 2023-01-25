-- TODO CREATE TABLE USERS
-- CREATE TABLE IF NOT EXISTS users (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     created_at TIMESTAMP DEFAULT NOW(),
--     updated_at TIMESTAMP
    
-- )

-- TODO DELETE TABLE USERS
-- DROP TABLE IF EXISTS users;

-- TODO SELECT ALL USERS
-- SELECT * FROM users

-- TODO INSERT USERS
-- INSERT INTO users (name) VALUES ('tono')

SELECT
t.id, u.id AS userId, t.total, t.date FROM users AS u
INNER JOIN trans AS t
ON t.userid = u.id WHERE u.id = 1