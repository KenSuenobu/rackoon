import { UsersAPIDelegate } from "../api";
import { User } from "../model/user";
import { Database } from "sqlite3";

export class UsersAPIDelegateImpl extends UsersAPIDelegate {
  constructor(private dbInstance: Database) {
    super();
  }

  /*
   * Create a new user
   *
   * Path: '/user/create'
   * Response codes: 201, 401
   */
  async createUser(request: { payload?: User }): Promise<void> {
    if (!request.payload) {
      throw new Error("No user payload was given.");
    }

    this.dbInstance.run(
      "INSERT INTO user (name, username, password, email_address, phone_number, is_admin) " +
        "VALUES ($name, $username, $password, $email_address, $phone_number, $is_admin)",
      {
        $name: request.payload.name,
        $username: request.payload.username,
        $password: request.payload.password,
        $email_address: request.payload.emailAddress,
        $phone_number: request.payload.phoneNumber,
        $is_admin: request.payload.isAdmin,
      }
    );

    return;
  }

  /*
   * Logs a user into the system
   *
   * Path: '/user/login'
   * Response codes: 200, 401, 404
   */
  async login(request: { payload?: any }): Promise<string> {
    return "";
  }
}
