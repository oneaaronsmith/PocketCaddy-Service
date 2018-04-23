DROP DATABASE IF EXISTS pocketcaddy_prod;

CREATE DATABASE pocketcaddy_prod;

USE pocketcaddy_prod;

CREATE TABLE golfers (
    id int PRIMARY KEY UNIQUE AUTO_INCREMENT,
    email varchar(255),
    realm varchar(255),
    emailVerified bool,
    verificationToken varchar(255),
    password varchar(255),
    username varchar(50)
);
    
CREATE TABLE AccessToken(
	id varchar(255),
    ttl int,
    created DATETIME,
    userId int,
    scopes TEXT NULL,
	CONSTRAINT fk_user_id
		FOREIGN KEY (userId)
		REFERENCES golfers (id)
		ON DELETE CASCADE
);

CREATE TABLE clubs (
    club_id INT PRIMARY KEY UNIQUE AUTO_INCREMENT,
    type VARCHAR(20),
    nickname VARCHAR(50),
    avg_distance FLOAT,
    user_id INT,
	CONSTRAINT fk_user_id
		FOREIGN KEY (user_id) 
        REFERENCES golfers(id)
        ON DELETE CASCADE
);

CREATE TABLE swings (
	swing_id int PRIMARY KEY AUTO_INCREMENT,
    distance float DEFAULT 0,
    date DATETIME,
    club_id int,
    CONSTRAINT fk_club_id
		FOREIGN KEY (club_id) 
		REFERENCES clubs(club_id)
		ON DELETE CASCADE
);

CREATE TABLE courses (
	course_id int PRIMARY KEY AUTO_INCREMENT,
    course_name varchar(100),
    address_line1 varchar(100),
    address_line2 varchar(100),
    city varchar(20),
    state varchar(15),
    zip_code int,
    phone_num varchar(15)
);

CREATE TABLE holes (
	hole_id int PRIMARY KEY AUTO_INCREMENT,
	course_id int NOT NULL,
    hole_num int,
	par int,
    green_x DOUBLE(12,6) NOT NULL,
    green_y DOUBLE(12,6) NOT NULL,
    tee_x DOUBLE(12,6) NOT NULL,
    tee_y DOUBLE(12,6) NOT NULL,
    middle_x DOUBLE(12,6),
    middle_y DOUBLE(12,6),
    CONSTRAINT fk_course_id
		FOREIGN KEY (course_id) 
		REFERENCES courses(course_id)
        ON DELETE CASCADE
);

CREATE TABLE games (
	game_id int PRIMARY KEY AUTO_INCREMENT,
    course_id int,
    user_id int,
    game_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    final_score int,
    CONSTRAINT fk_course_id
		FOREIGN KEY (course_id) 
        REFERENCES courses(course_id)
        ON DELETE CASCADE,
	CONSTRAINT fk_user_id
		FOREIGN KEY (user_id) 
        REFERENCES golfers(id)
        ON DELETE CASCADE
);

CREATE TABLE scores (
	hole_id int,
    game_id int,
    score int DEFAULT 0,
    CONSTRAINT fk_hole_id
		FOREIGN KEY (hole_id) 
        REFERENCES holes(hole_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_game_id
		FOREIGN KEY (game_id) 
        REFERENCES games(game_id)
        ON DELETE CASCADE,
    PRIMARY KEY (hole_id,game_id)
);

INSERT INTO golfers(id,email,password) VALUES(1,'me@example.com','password');
INSERT INTO clubs(club_id, type, nickname, avg_distance, user_id) VALUES (1, '9 Iron', 'Fred', 120.0, 1);
INSERT INTO swings(swing_id, distance, date, club_id) VALUES (1,120.0, '2018:03:01 12:32:29',1);

INSERT INTO courses(course_id,course_name,address_line1,address_line2,city,state,zip_code, phone_num) VALUES
    (1,'Triple Lakes Golf Club', '6942 Triple Lakes Road', NULL, 'Millstadt', 'IL', 62260,'618-476-9985');
    
INSERT INTO holes(course_id, hole_num, par, tee_x, tee_y, green_x, green_y, middle_x, middle_y) VALUES 
	(1, 1, 5, 38.478166, -90.143513, 38.477595, -90.138809, NULL, NULL),
	(1, 2, 4, 38.478069, -90.138603, 38.480254, -90.137819, 38.479624, -90.139041),
	(1, 3, 3, 38.481345, -90.138113, 38.482623, -90.138725, NULL, NULL),
	(1, 4, 5, 38.482186, -90.138989, 38.479138, -90.141546, 38.480775, -90.140624),
	(1, 5, 3, 38.479459, -90.140617, 38.478523, -90.139100, NULL, NULL),
	(1, 6, 4, 38.478056, -90.138839, 38.479194, -90.142856, NULL, NULL),
	(1, 7, 4, 38.479831, -90.142755, 38.482147, -90.142256, NULL, NULL),
	(1, 8, 3, 38.482428, -90.142319, 38.482257, -90.143658, NULL, NULL),
	(1, 9, 4, 38.481913, -90.143601, 38.478578, -90.143629, NULL, NULL),
	(1, 10, 4, 38.478226, -90.145550, 38.476578, -90.146155, NULL, NULL),
	(1, 11, 3, 38.476681, -90.145609, 38.475331, -90.146157, NULL, NULL),
	(1, 12, 4, 38.475266, -90.146556, 38.477793, -90.146181, NULL, NULL),
	(1, 13, 5, 38.478445, -90.145709, 38.482051, -90.144891, 38.479874, -90.144971),
	(1, 14, 4, 38.482093, -90.145251, 38.484536, -90.145003, NULL, NULL),
	(1, 15, 5, 38.484713, -90.144282, 38.484440, -90.139855, NULL, NULL),
	(1, 16, 4, 38.483875, -90.140108, 38.484281, -90.144234, NULL, NULL),
	(1, 17, 3, 38.483982, -90.144429, 38.483025, -90.143229, NULL, NULL),
	(1, 18, 5, 38.483257, -90.144164, 38.479141, -90.144447, NULL, NULL);
    
    
INSERT INTO courses(course_id,course_name,address_line1,address_line2,city,state,zip_code, phone_num) VALUES
	(2,'L.A. Nickell','1800 Parkside Drive',NULL,'Columbia','MO',65202,'573-499-4653');
    
INSERT INTO holes(course_id, hole_num, par, tee_x, tee_y, green_x, green_y, middle_x, middle_y) VALUES 
	(2, 1, 4, 38.977570, -92.366878, 38.974807, -92.366366, NULL, NULL),
    (2, 2, 4, 38.974405, -92.366779, 38.972490, -92.364734, NULL, NULL),
    (2, 3, 4, 38.971898, -92.364793, 38.973923, -92.367420, NULL, NULL),
    (2, 4, 3, 38.974365, -92.368240, 38.974560, -92.370296, NULL, NULL),
    (2, 5, 4, 38.974506, -92.370657, 38.972338, -92.369315, 38.972937, -92.370247),
    (2, 6, 3, 38.971921, -92.369093, 38.972897, -92.367990, NULL, NULL),
    (2, 7, 5, 38.973757, -92.368033, 38.971315, -92.364684, 38.971939, -92.366166),
    (2, 8, 4, 38.972705, -92.364054, 38.975211, -92.365572, NULL, NULL),
    (2, 9, 4, 38.975129, -92.364881, 38.977711, -92.365816, NULL, NULL),
    (2, 10, 4, 38.977079, -92.367436, 38.974797, -92.367568, NULL, NULL),
    (2, 11, 3, 38.974755, -92.368191, 38.974987, -92.369857, NULL, NULL),
    (2, 12, 5, 38.975219, -92.370347, 38.979303, -92.370168, NULL, NULL),
    (2, 13, 4, 38.979226, -92.369509, 38.976391, -92.368984, NULL, NULL),
    (2, 14, 3, 38.976535, -92.368491, 38.977924, -92.367633, NULL, NULL),
    (2, 15, 4, 38.979517, -92.366883, 38.980837, -92.369666, 38.980630, -92.368435),
    (2, 16, 4, 38.981427, -92.369957, 38.981340, -92.367066, NULL, NULL),
    (2, 17, 4, 38.980670, -92.367133, 38.981408, -92.364076, 38.980298, -92.365430),
    (2, 18, 4, 38.980632, -92.363953, 38.977871, -92.365038, 38.978941, -92.364999);