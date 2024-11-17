import Dataform from "./dataforms/Dataform";

export const QUERCUS_BASE_URL = "https://q.utoronto.ca";
export const QUERCUS_BASE_API_ENDPOINT = `${QUERCUS_BASE_URL}/api/v1`;

export interface Course {
    courseName: string;
    courseId: number;
}

export interface Item {
    id: number;
    type: Dataform;
}

export function hasOwnProperty<X extends {}, Y extends PropertyKey>(obj: X, prop: Y): obj is X & Record<Y, unknown> {
    return obj.hasOwnProperty(prop)
}

export type Nullable<T> = null | T;
  

