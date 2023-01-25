-- TODO CREATE TABLE TRANSACTION

-- CREATE TABLE IF NOT EXISTS trans (
--     id SERIAL PRIMARY KEY,
--     userId INT,
--     total INT NOT NULL,
--     date DATE NOT NULL,
--     created_at TIMESTAMP DEFAULT NOW(),
--     updated_at TIMESTAMP,
--     CONSTRAINT fk_transaction
--         FOREIGN KEY (userId)
--             REFERENCES users (id)

-- );

-- ! DELETE TABLE TRANSACTION
-- DROP TABLE trans;

-- TODO SELECT ALL TRANSACTION
-- SELECT * FROM trans

-- TODO INSERT TO TRANSACTION
-- INSERT INTO trans (userid, total, date)
-- VALUES(1, 20000, '2022-08-01')

-- TODO SELECT WITH JOIN
SELECT
t.id, t.userid, u.name, t.total, t.date
FROM trans AS t
INNER JOIN users AS u
ON t.userid = u.id