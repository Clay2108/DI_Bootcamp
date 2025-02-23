CREATE TABLE customer_review (review_id SERIAL PRIMARY KEY, film_id INT NOT NULL, language_id INT NOT NULL,title VARCHAR (100) NOT NULL, score INT NOT NULL,review_text TEXT,last_update TIMESTAMP DEFAULT current_timestamp,
CONSTRAINT fk_language_id FOREIGN KEY (language_id) REFERENCES language(language_id),
CONSTRAINT fk_film_id FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
CONSTRAINT score_value CHECK (score > 0 AND score <= 10))