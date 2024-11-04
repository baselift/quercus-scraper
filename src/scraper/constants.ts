export type File = "file";
export type Link = "link";
export type ItemType = File | Link;

export interface Item {
  id: number
  type: ItemType
  action: Function;
}
