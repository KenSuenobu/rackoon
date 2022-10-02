import { OwnersAPIDelegate } from "../api";
import { Owner } from "../model/owner";
import { OwnerDAO } from "../dao/OwnerDAO";

export class OwnersAPIDelegateImpl extends OwnersAPIDelegate {
  private readonly ownerDao: OwnerDAO;

  constructor(private dbInstance) {
    super();
    this.ownerDao = new OwnerDAO(dbInstance);
  }

  override async createOwner(request: { payload?: Owner }): Promise<void> {
    if (!request.payload) {
      throw new Error("Missing owner payload");
    }

    const createdOwner = await this.ownerDao.create(request.payload);

    if (createdOwner.id) {
      return;
    }

    throw new Error("Unable to create owner object.");
  }

  override async getOwnerByName(request: { name?: string }): Promise<Owner> {
    if (!request.name) {
      throw new Error("Missing name");
    }

    return this.ownerDao.getByName(request.name);
  }

  override async listOwners(request: {}): Promise<Owner[]> {
    return this.ownerDao.list();
  }
}
