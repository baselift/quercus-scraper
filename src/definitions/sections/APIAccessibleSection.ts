import { Item, QUERCUS_BASE_API_ENDPOINT, QUERCUS_BASE_URL } from "../common";
import { ExtractableSection } from "./ExtractableSection";

export abstract class APIAccessibleSection extends ExtractableSection {
    private courseId: number;
    private sectionName: string;

    constructor(courseId: number, sectionName: string) {
        super();
        this.courseId = courseId;
        this.sectionName = sectionName;
    }

    public assignedAPIEndpoint(queryParams: Record<string, string>): string {
        let constructedString = `${QUERCUS_BASE_API_ENDPOINT}/courses/${this.courseId}/${this.sectionName}`;
        let firstParam = true;

        for (const [key, value] of Object.entries(queryParams)) {
            if (firstParam) {
                constructedString = constructedString.concat('?', `${key}=${value}`);
                firstParam = false;
            } else {
                constructedString = constructedString.concat('&', `${key}=${value}`);
            }   
        }
        return constructedString;
    }
}