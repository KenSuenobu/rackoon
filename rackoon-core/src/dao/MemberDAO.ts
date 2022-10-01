import * as pgPromise from "pg-promise";
import { Member } from "../model/member";

export class MemberDAO {
  constructor(private db) {}

  async create(member: Member): Promise<Member> {
    const newObject = await this.db.one(
      "INSERT INTO member (name, username, password, email_address, phone_number, is_admin)" +
        " VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        member.name,
        member.username,
        member.password,
        member.emailAddress,
        member.phoneNumber,
        member.isAdmin,
      ]
    );

    return <Member>{
      id: newObject.id,
      name: newObject.name,
      username: newObject.username,
      password: newObject.password,
      emailAddress: newObject.email_address,
      phoneNumber: newObject.phone_number,
      isAdmin: newObject.is_admin,
    };
  }

  async get(username: string, password: string): Promise<Member> {
    const newObject = await this.db.one(
      "SELECT * FROM member WHERE username=$1 AND password=$2 LIMIT 1",
      [username, password]
    );

    return <Member>{
      id: newObject.id,
      name: newObject.name,
      username: newObject.username,
      password: newObject.password,
      emailAddress: newObject.email_address,
      phoneNumber: newObject.phone_number,
      isAdmin: newObject.is_admin,
    };
  }
}
