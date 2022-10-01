import * as pgPromise from "pg-promise";
import { Member } from "../model/member";
import { MappableDAO } from "./MappableDAO";

export class MemberDAO {
  private readonly mappedFields = [
    "username",
    "password",
    "emailAddress",
    "phoneNumber",
    "isAdmin",
    ...MappableDAO.commonFields,
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
          return <Member>MappableDAO.mapFields(this.mappedFields, res);
        });
    });
  }

  async get(username: string, password: string): Promise<Member> {
    return this.db
      .one("SELECT * FROM member WHERE username=$1 AND password=$2 LIMIT 1", [
        username,
        password,
      ])
      .then((result) => {
        return <Member>MappableDAO.mapFields(this.mappedFields, result);
      });
  }
}
