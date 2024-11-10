import { Item, Nullable } from "../common";
import { APIAccessibleSection } from "./APIAccessibleSection";

interface RawPageData {
    body?: Nullable<string>;
    created_at: Nullable<string>;
    editing_roles: Nullable<string>;
    front_page: Nullable<boolean>;
    hide_from_students: Nullable<boolean>;
    html_url: Nullable<string>;
    last_edited_by: Nullable<object>;
    locked_for_user: Nullable<boolean>;
    page_id: Nullable<number>;
    publish_at: Nullable<string>;
    published: Nullable<boolean>;
    title: Nullable<string>;
    todo_date: Nullable<string>;
    updated_at: Nullable<string>;
    url: Nullable<string>;
}

class Pages extends APIAccessibleSection {
    constructor(courseId: number) {
        super(courseId, 'pages');
    }

    async getSectionItems(): Promise<Array<Item>> {
        const response: Array<RawPageData> = await (await fetch(this.assignedAPIEndpoint({"include[]": "body"}))).json();
    }
}