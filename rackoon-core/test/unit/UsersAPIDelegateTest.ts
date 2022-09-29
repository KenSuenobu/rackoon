import { expect } from "chai";
import { Loader } from "../../src/rackoon-sql/Loader";

describe("#UsersAPIDelegateTest", () => {
  it("should load the main database for testing", () => {
    const db = Loader.loadSql("./sql/main.sql", "test/util/db/rackoon.db");
  });
});
