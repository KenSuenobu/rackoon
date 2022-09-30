import { expect } from "chai";
import { Loader } from "../../src/rackoon-sql/Loader";
import * as fs from "fs";
import { UsersAPIDelegate } from "../../src/api";
import { UsersAPIDelegateImpl } from "../../src/impl/UsersAPIDelegateImpl";

describe("#UsersAPIDelegateTest", () => {
  it("should load the main database for testing", () => {
    fs.mkdirSync("./test/db");
    const db = Loader.loadSql("./test/db/rackoon.db", "./sql/main.sql");
    db.close();
  });

  it("should create a user entry", () => {
    const db = Loader.loadSql("./test/db/rackoon.db", "./sql/main.sql");
    const delegate = new UsersAPIDelegateImpl(db);
    delegate.createUser({
      payload: {
        name: "testuser",
        username: "test",
        password: "test1234",
        emailAddress: "test@test.com",
        phoneNumber: "(123) 456-7890",
        isAdmin: true,
      },
    });
    db.close();
  });
});
