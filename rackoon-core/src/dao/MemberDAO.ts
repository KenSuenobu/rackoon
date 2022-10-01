import * as pgPromise from "pg-promise";
import { Member } from "../model/member";

export class MemberDAO {
  private readonly mappedFields = [
    {
      field: "id",
      databaseField: "id",
    },
    {
      field: "name",
      databaseField: "name",
    },
    {
      field: "username",
      databaseField: "username",
    },
    {
      field: "password",
      databaseField: "password",
    },
    {
      field: "emailAddress",
      databaseField: "email_address",
    },
    {
      field: "phoneNumber",
      databaseField: "phone_number",
    },
    {
      field: "isAdmin",
      databaseField: "is_admin",
    },
  ];

  constructor(private db) {}

  async create(member: Member): Promise<Member> {
    return this.db.tx((t) => {
      return t
        .one(
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
        )
        .then((res) => {
          return <Member>{
            id: res.id,
            name: res.name,
            username: res.username,
            password: res.password,
            emailAddress: res.email_address,
            phoneNumber: res.phone_number,
            isAdmin: res.is_admin,
          };
        });
    });
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
