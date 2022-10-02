import { RacksAPIDelegate } from "../api";
import { Rack } from "../model/rack";
import { RackDAO } from "../dao/RackDAO";

export class RacksAPIDelegateImpl extends RacksAPIDelegate {
  private readonly rackDao: RackDAO;

  private readonly loginCache: any = {};

  constructor(private dbInstance) {
    super();
    this.rackDao = new RackDAO(dbInstance);
  }

  override async createRack(request: { payload?: Rack }): Promise<void> {
    if (!request.payload) {
      throw new Error("Missing payload.");
    }

    const rack = await this.rackDao.create(request.payload);

    if (rack.id) {
      return;
    }

    throw new Error("Unable to create rack object.");
  }

  override async deleteRack(request: { name?: string }): Promise<void> {
    return super.deleteRack(request);
  }

  override async listRacksByOwner(request: { name?: string }): Promise<Rack[]> {
    return super.listRacksByOwner(request);
  }
}
