import { expect } from "chai";
import * as fs from "fs";
import { MembersAPIDelegateImpl } from "../../src/impl/MembersAPIDelegateImpl";
import pgPromise, { IInitOptions, IMain } from "pg-promise";

class IExtensions {}

describe("#MembersAPIDelegateTest", () => {
  const pgp = pgPromise();
  const db = pgp({
    host: "localhost",
    port: 5432,
  });
  const delegate = new MembersAPIDelegateImpl(db);

  it("should create a user entry", async () => {
    await delegate.createMember({
      payload: {
        name: "testuser",
        username: "test",
        password: "test1234",
        emailAddress: "test@test.com",
        phoneNumber: "(123) 456-7890",
        isAdmin: true,
      },
    });
  });

  it("should login", async () => {
    const result1 = await delegate.login({
      payload: {
        username: "test",
        password: "test1234",
      },
    });
    expect(result1).is.not.null;
    const result2 = await delegate.login({
      payload: {
        username: "test",
        password: "test1234",
      },
    });
    expect(result1).equals(result2);
  });

  it("should shutdown the database connection", async () =>
    await db.$pool.end());
});
