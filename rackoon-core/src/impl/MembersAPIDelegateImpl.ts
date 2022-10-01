import { MembersAPIDelegate } from "../api";
import { Member } from "../model/member";
import { MemberDAO } from "../dao";

export class MembersAPIDelegateImpl extends MembersAPIDelegate {
  private readonly memberDao: MemberDAO;

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
    console.log(`[login] Request: ${JSON.stringify(request, null, 2)}`);
    throw new Error("Method not implemented.");
  }
}
