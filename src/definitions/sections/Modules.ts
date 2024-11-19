import { Nullable, Item } from "../common";
import APIAccessibleSection from "./APIAccessibleSection";

interface RawModuleData {

}



export default class Modules extends APIAccessibleSection {
  constructor(courseId: number) {
    super(courseId, 'modules');
  }

  async getSectionItems(): Promise<Nullable<Array<Item>>> {
    const response = await fetch(this.assignedAPIEndpoint({}))
    if (response.ok === false) {
      return null;
    }

    const responseData: RawModuleData = await response.json();
    return null;
  }
}