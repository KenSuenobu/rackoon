import { RackEquipmentsAPIDelegate } from "../api";

export class RackEquipmentsAPIDelegateImpl extends RackEquipmentsAPIDelegate {
  override async deleteEquipmentByName(request: {
    name?: string;
  }): Promise<void> {
    return super.deleteEquipmentByName(request);
  }
}
