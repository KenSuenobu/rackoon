CREATE TABLE IF NOT EXISTS user (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name varchar(200) NOT NULL,
    username VARCHAR(40) NOT NULL,
    password TEXT NOT NULL,
    email_address TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    is_admin BOOLEAN NOT NULL DEFAULT false
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_user ON user(username);
CREATE UNIQUE INDEX IF NOT EXISTS idx_user_email ON user(email_address);

CREATE TABLE IF NOT EXISTS owner (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    creator_id INT NOT NULL REFERENCES user(id) ON DELETE CASCADE,
    name varchar(80) NOT NULL,
    address_1 TEXT NOT NULL,
    address_2 TEXT,
    city VARCHAR(80) NOT NULL,
    state VARCHAR(2) NOT NULL,
    zipcode VARCHAR(10) NOT NULL,
    company_name VARCHAR(200) NOT NULL,
    primary_contact VARCHAR(150) NOT NULL,
    primary_email TEXT,
    primary_phone TEXT
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_owner_unique ON owner(name);
CREATE UNIQUE INDEX IF NOT EXISTS idx_owner_company_name_unique ON owner(company_name);

CREATE TABLE IF NOT EXISTS rack (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    creator_id INT NOT NULL REFERENCES user(id) ON DELETE CASCADE,
    owner_id INT NOT NULL REFERENCES owner(id) ON DELETE CASCADE,
    name varchar(80) NOT NULL,
    description TEXT,
    rack_location TEXT NOT NULL,
    rack_size INT NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_rack_owner ON rack(owner_id, name);

CREATE TABLE IF NOT EXISTS rack_asset (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    creator_id INT NOT NULL REFERENCES user(id) ON DELETE CASCADE,
    rack_id INT NOT NULL REFERENCES rack(id) ON DELETE CASCADE,
    rack_position_start varchar(10) NOT NULL,
    rack_position_end varchar(10) NOT NULL,
    name varchar(80) NOT NULL,
    description TEXT
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_rack_asset ON rack_asset(rack_id, rack_position_start, rack_position_end);

CREATE TABLE IF NOT EXISTS rack_asset_service (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    creator_id INT NOT NULL REFERENCES user(id) ON DELETE CASCADE,
    rack_asset_id INT NOT NULL REFERENCES rack_asset(id) ON DELETE CASCADE,
    name VARCHAR(80) NOT NULL,
    description TEXT,
    access_url TEXT
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_rack_asset_service ON rack_asset_service(rack_asset_id, name);
