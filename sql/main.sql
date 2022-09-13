DROP SCHEMA opendc CASCADE;
CREATE SCHEMA opendc;

CREATE TABLE opendc.owner (
    id SERIAL NOT NULL PRIMARY KEY,
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

CREATE UNIQUE INDEX idx_owner_unique ON opendc.owner(name);
CREATE UNIQUE INDEX idx_owner_company_name_unique ON opendc.owner(company_name);

CREATE TABLE opendc.rack (
    id SERIAL NOT NULL PRIMARY KEY,
    owner_id INT NOT NULL REFERENCES opendc.owner(id) ON DELETE CASCADE,
    name varchar(80) NOT NULL,
    description TEXT,
    rack_location TEXT NOT NULL,
    rack_size INT NOT NULL
);

CREATE UNIQUE INDEX idx_rack_owner ON opendc.rack(owner_id, name);

CREATE TABLE opendc.rack_equipment (
    id SERIAL NOT NULL PRIMARY KEY,
    rack_id INT NOT NULL REFERENCES opendc.rack(id) ON DELETE CASCADE,
    rack_position_start varchar(10) NOT NULL,
    rack_position_end varchar(10) NOT NULL,
    name varchar(80) NOT NULL,
    description TEXT
);

CREATE UNIQUE INDEX idx_rack_equipment ON opendc.rack_equipment(rack_id, rack_position_start, rack_position_end);

CREATE TABLE opendc.rack_equipment_service (
    id SERIAL NOT NULL PRIMARY KEY,
    rack_equipment_id INT NOT NULL REFERENCES opendc.rack_equipment(id) ON DELETE CASCADE,
    name VARCHAR(80) NOT NULL,
    description TEXT,
    access_url TEXT
);

CREATE UNIQUE INDEX idx_rack_equipment_service ON opendc.rack_equipment_service(rack_equipment_id, name);
