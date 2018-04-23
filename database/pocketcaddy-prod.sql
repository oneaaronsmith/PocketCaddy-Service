DROP DATABASE IF EXISTS pocketcaddy_prod;

CREATE DATABASE pocketcaddy_prod;

USE pocketcaddy_prod;

CREATE TABLE golfers (
    id int PRIMARY KEY UNIQUE AUTO_INCREMENT NOT NULL,
    email varchar(50),
    realm varchar(255),
    emailVerified bool,
    verificationToken varchar(255),
    password varchar(255) NOT NULL,
    username varchar(50) NOT NULL
);
    
CREATE TABLE AccessToken(
	id varchar(255) NOT NULL,
    ttl int,
    created DATETIME,
    userId int NOT NULL,
    scopes TEXT NULL,
	CONSTRAINT fk_accesstoken_user_id
		FOREIGN KEY (userId)
		REFERENCES golfers (id)
		ON DELETE CASCADE
);

CREATE TABLE clubs (
    club_id INT PRIMARY KEY UNIQUE AUTO_INCREMENT NOT NULL,
    type VARCHAR(20),
    nickname VARCHAR(50) NOT NULL,
    avg_distance FLOAT DEFAULT 0,
    user_id INT NOT NULL,
	CONSTRAINT fk_clubs_user_id
		FOREIGN KEY (user_id) 
        REFERENCES golfers(id)
        ON DELETE CASCADE
);

CREATE TABLE swings (
	swing_id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    distance float DEFAULT 0 NOT NULL,
    date DATETIME,
    club_id int NOT NULL,
    CONSTRAINT fk_swings_club_id
		FOREIGN KEY (club_id) 
		REFERENCES clubs(club_id)
		ON DELETE CASCADE
);

CREATE TABLE courses (
	course_id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    course_name varchar(100) NOT NULL,
    address_line1 varchar(100),
    address_line2 varchar(100),
    city varchar(20),
    state varchar(15),
    zip_code int,
    phone_num varchar(15)
);

CREATE TABLE holes (
	hole_id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
	course_id int NOT NULL,
    hole_num int NOT NULL,
	par int NOT NULL,
    green_x DOUBLE(12,6) NOT NULL,
    green_y DOUBLE(12,6) NOT NULL,
    tee_x DOUBLE(12,6) NOT NULL,
    tee_y DOUBLE(12,6) NOT NULL,
    middle_x DOUBLE(12,6),
    middle_y DOUBLE(12,6),
    CONSTRAINT fk_holes_course_id
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
    CONSTRAINT fk_games_course_id
		FOREIGN KEY (course_id) 
        REFERENCES courses(course_id)
        ON DELETE CASCADE,
	CONSTRAINT fk_games_user_id
		FOREIGN KEY (user_id) 
        REFERENCES golfers(id)
        ON DELETE CASCADE
);

CREATE TABLE scores (
	hole_id int NOT NULL,
    game_id int NOT NULL,
    score int DEFAULT 0,
    CONSTRAINT fk_scores_hole_id
		FOREIGN KEY (hole_id) 
        REFERENCES holes(hole_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_scores_game_id
		FOREIGN KEY (game_id) 
        REFERENCES games(game_id)
        ON DELETE CASCADE,
    PRIMARY KEY (hole_id,game_id)
);

CREATE TABLE comments (
	user_id int NOT NULL,
    course_id int NOT NULL,
    content varchar(140) NOT NULL,
	CONSTRAINT fk_comments_user_id
		FOREIGN KEY (user_id) 
		REFERENCES golfers(id)
		ON DELETE CASCADE,
	CONSTRAINT fk_comments_course_id
		FOREIGN KEY (course_id) 
		REFERENCES courses(course_id)
		ON DELETE CASCADE,
    PRIMARY KEY (user_id,course_id)
);

