import { Item } from "./constants";

abstract class ExtractableSection {
  abstract grabSectionItems(): Array<Item>;

}