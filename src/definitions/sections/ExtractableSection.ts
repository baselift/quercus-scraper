import { Item } from "../common";

export abstract class ExtractableSection {
  abstract getSectionItems(): Promise<Array<Item>>;
}