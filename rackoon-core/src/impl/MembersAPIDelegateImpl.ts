import { MembersAPIDelegate } from "../api";
import { Member } from "../model/member";
import { MemberDAO } from "../dao";
import { v5 as uuidv5 } from "uuid";

export class MembersAPIDelegateImpl extends MembersAPIDelegate {
  private readonly memberDao: MemberDAO;

  private readonly loginCache: any = {};

  constructor(private dbInstance) {
    super();
    this.memberDao = new MemberDAO(dbInstance);
  }

  override async createMember(request: { payload?: Member }): Promise<void> {
    if (!request.payload) {
      throw new Error("Missing account information.");
    }

    const createdMember = await this.memberDao.create(request.payload);

    if (createdMember.id) {
      return;
    }

    throw new Error("Unable to create member object.");
  }

  /*
   * Logs a member into the system
   *
   * Path: '/member/login'
   * Response codes: 200, 401, 404
   */
  override async login(request: { payload?: any }): Promise<string> {
    if (!request.payload) {
      throw new Error("Missing login credentials.");
    }

    if (this.loginCache[request.payload.username]) {
      return this.loginCache[request.payload.username]["resultKey"];
    }

    const result = this.memberDao
      .get(request.payload.username, request.payload.password)
      .then((res) => {
        return {
          userId: res.id,
          loginKey: uuidv5(),
        };
      });

    this.loginCache[request.payload.username] = result;

    return result["resultKey"];
  }
}
