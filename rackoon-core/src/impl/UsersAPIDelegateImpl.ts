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
