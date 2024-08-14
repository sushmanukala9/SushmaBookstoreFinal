DELETE FROM book;
ALTER TABLE book AUTO_INCREMENT = 1001;

DELETE FROM category;
ALTER TABLE category AUTO_INCREMENT = 1001;

INSERT INTO `category` (`name`) VALUES ('Classics'),('Fantasy'),('Mystery'),('Romance'),('Sci-fi'),('Cooking'),('Travel'),('History');

-- Classics
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('Pride and Prejudice', 'Jane Austen', 'A classic novel', 9.99, 5, TRUE, TRUE, 1001);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('Moby-Dick', 'Herman Melville', 'A tale of revenge', 12.99, 4, FALSE, FALSE, 1001);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('To Kill a Mockingbird', 'Harper Lee', 'A story of justice', 8.99, 4.5, TRUE, TRUE, 1001);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('1984', 'George Orwell', 'A dystopian masterpiece', 7.99, 4.7, TRUE, FALSE, 1001);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('The Catcher in the Rye', 'J.D. Salinger', 'A coming-of-age novel', 10.99, 4.3, TRUE, FALSE, 1001);

-- Fantasy
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('The Lord of the Rings', 'J.R.R. Tolkien', 'An epic fantasy trilogy', 24.99, 4.8, TRUE, TRUE, 1002);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('Harry Potter Stone', 'J.K. Rowling', 'A magical adventure', 11.99, 4.9, TRUE, TRUE, 1002);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('A Song of Ice and Fire', 'George R.R. Martin', 'A tale of thrones', 18.99, 4.6, TRUE, TRUE, 1002);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('The Hobbit', 'J.R.R. Tolkien', 'An unexpected journey', 13.99, 4.7, TRUE, FALSE, 1002);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('The Name of the Wind', 'Patrick Rothfuss', 'A tale of a hero', 16.99, 4.5, TRUE, FALSE, 1002);

-- Mystery
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('The Da Vinci Code', 'Dan Brown', 'A religious mystery', 10.99, 4.2, TRUE, FALSE, 1003);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('Gone Girl', 'Gillian Flynn', 'A psychological thriller', 9.49, 4.4, TRUE, FALSE, 1003);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('Sherlock Holmes', 'Arthur Conan Doyle', 'Detective tales', 7.99, 4.6, TRUE, FALSE, 1003);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('The Girl with the Dragon Tattoo', 'Stieg Larsson', 'A gripping mystery', 12.49, 4.3, TRUE, FALSE, 1003);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('Murder on Orient', 'Agatha Christie', 'A classic whodunit', 8.99, 4.5, TRUE, FALSE, 1003);

-- Romance
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('Pride and Prejudice', 'Jane Austen', 'A classic romance', 9.99, 4.8, TRUE, TRUE, 1004);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('Outlander', 'Diana Gabaldon', 'A time-traveling love story', 11.99, 4.7, TRUE, FALSE, 1004);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('The Notebook', 'Nicholas Sparks', 'A heartwarming tale', 8.99, 4.5, TRUE, FALSE, 1004);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('The Rosie Project', 'Graeme Simsion', 'An unconventional romance', 10.99, 4.4, TRUE, FALSE, 1004);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('Me Before You', 'Jojo Moyes', 'A story of love and choices', 9.49, 4.3, TRUE, FALSE, 1004);

-- Science Fiction
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('The Power of Habit', 'Charles Duhigg', 'Unlocking the secrets of habit formation', 11.99, 4.5, TRUE, FALSE, 1005);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('The Midnight Library', 'Matt Haig', 'Timeless principles for success', 12.99, 4.7, TRUE, TRUE, 1005);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('Project Hail Mary', 'Andy Weir', 'How to stop doubting your greatness', 9.49, 4.4, TRUE, FALSE, 1005);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('House of Sky & Breath', 'Sara J Maas', 'Unlocking the secrets of habit formation', 11.99, 4.5, TRUE, FALSE, 1005);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('Fahrenheit 451', 'Ray D Bradbury', 'Timeless principles for success', 12.99, 4.7, TRUE, TRUE, 1005);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('Brave New World', 'Aldous Huxley', 'How to stop doubting your greatness', 9.49, 4.4, TRUE, FALSE, 1005);

-- Cooking
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('The Joy of Cooking', 'Irma S. Rombauer', 'The kitchen classic', 19.99, 4.7, TRUE, FALSE, 1006);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('Essentials of Classic', 'Marcella Hazan', 'Authentic Italian cuisine', 18.99, 4.8, TRUE, TRUE, 1006);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('The Food Lab', 'J. Kenji López-Alt', 'Better home cooking through science', 23.99, 4.6, TRUE, FALSE, 1006);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('Cravings', 'Chrissy Teigen', 'Recipes for all the food you want to eat', 15.99, 4.4, FALSE, FALSE, 1006);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('The Pioneer Woman', 'Ree Drummond', 'Recipes from an Oklahoma ranch', 14.99, 4.5, TRUE, FALSE, 1006);

-- Travel
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('The Alchemist', 'Paulo Coelho', 'A journey of self-discovery', 9.99, 4.6, TRUE, FALSE, 1007);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('Into the Wild', 'Jon Krakauer', 'The story of Christopher McCandless', 10.99, 4.3, TRUE, FALSE, 1007);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('Eat, Pray, Love', 'Elizabeth Gilbert', 'One woman\'s journey of self-discovery', 9.49, 4.2, TRUE, FALSE, 1007);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('Wild', 'Cheryl Strayed', 'A solo hike on the Pacific Crest Trail', 11.99, 4.5, FALSE, FALSE, 1007);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('The Art of Travel', 'Alain de Botton', 'Exploring the pleasures of traveling', 12.99, 4.4, TRUE, FALSE, 1007);

-- Self Help
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('A Brief History of Time', 'Stephen Hawking', 'Exploring the universe', 13.99, 4.5, TRUE, FALSE, 1008);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('Sapiens', 'Yuval Noah Harari', 'A brief history of humankind', 14.99, 4.7, TRUE, FALSE, 1008);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('The Selfish Gene', 'Richard Dawkins', 'The gene-centered view of evolution', 12.99, 4.6, TRUE, FALSE, 1008);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('Cosmos', 'Carl Sagan', 'A journey through space and time', 16.99, 4.8, FALSE, FALSE, 1008);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id)
VALUES ('The Structure of Revolutions', 'Thomas S. Kuhn', 'The history of scientific paradigms', 11.99, 4.4, TRUE, FALSE, 1008);