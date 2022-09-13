DROP SCHEMA rackoon CASCADE;
CREATE SCHEMA rackoon;

CREATE TABLE rackoon.user (
    id SERIAL NOT NULL PRIMARY KEY,
    name varchar(200) NOT NULL,
    username VARCHAR(40) NOT NULL,
    password TEXT NOT NULL,
    email_address TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    is_admin BOOLEAN NOT NULL DEFAULT false
);

CREATE UNIQUE INDEX idx_user ON rackoon.user(username);
CREATE UNIQUE INDEX idx_user_email ON rackoon.user(email_address);

CREATE TABLE rackoon.owner (
    id SERIAL NOT NULL PRIMARY KEY,
    creator_id INT NOT NULL REFERENCES rackoon.user(id) ON DELETE CASCADE,
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

CREATE UNIQUE INDEX idx_owner_unique ON rackoon.owner(name);
CREATE UNIQUE INDEX idx_owner_company_name_unique ON rackoon.owner(company_name);

CREATE TABLE rackoon.rack (
    id SERIAL NOT NULL PRIMARY KEY,
    creator_id INT NOT NULL REFERENCES rackoon.user(id) ON DELETE CASCADE,
    owner_id INT NOT NULL REFERENCES rackoon.owner(id) ON DELETE CASCADE,
    name varchar(80) NOT NULL,
    description TEXT,
    rack_location TEXT NOT NULL,
    rack_size INT NOT NULL
);

CREATE UNIQUE INDEX idx_rack_owner ON rackoon.rack(owner_id, name);

CREATE TABLE rackoon.rack_asset (
    id SERIAL NOT NULL PRIMARY KEY,
    creator_id INT NOT NULL REFERENCES rackoon.user(id) ON DELETE CASCADE,
    rack_id INT NOT NULL REFERENCES rackoon.rack(id) ON DELETE CASCADE,
    rack_position_start varchar(10) NOT NULL,
    rack_position_end varchar(10) NOT NULL,
    name varchar(80) NOT NULL,
    description TEXT
);

CREATE UNIQUE INDEX idx_rack_asset ON rackoon.rack_asset(rack_id, rack_position_start, rack_position_end);

CREATE TABLE rackoon.rack_asset_service (
    id SERIAL NOT NULL PRIMARY KEY,
    creator_id INT NOT NULL REFERENCES rackoon.user(id) ON DELETE CASCADE,
    rack_asset_id INT NOT NULL REFERENCES rackoon.rack_asset(id) ON DELETE CASCADE,
    name VARCHAR(80) NOT NULL,
    description TEXT,
    access_url TEXT
);

CREATE UNIQUE INDEX idx_rack_asset_service ON rackoon.rack_asset_service(rack_asset_id, name);
