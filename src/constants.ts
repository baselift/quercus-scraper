import { Nullable } from "./utils/common";

export const QUERCUS_BASE_URL= "https://q.utoronto.ca";

// Property names
export const REQUEST = "request";
export const RESPONSE = "response";

// Request codes to content script

// Response codes from content script
export const NO_RESULT = -1;

export interface RawCourse {
    account_id: Nullable<string>;
    apply_assignment_group_weights: Nullable<boolean>;
    blueprint: Nullable<boolean>;
    calendar: Nullable<object>;
    course_code: Nullable<string>;
    course_color: Nullable<string>;
    created_at: Nullable<string>;
    default_view: Nullable<string>;
    end_at: Nullable<string>;
    enrollment_term_id: Nullable<number>;
    enrollments: Nullable<object>;
    friendly_name: Nullable<string>;
    grade_passback_setting: Nullable<string>;
    grading_standard_id: Nullable<number>
    hide_final_grades: Nullable<boolean>;
    homeroom_course: Nullable<boolean>;
    id: Nullable<number>;
    is_public: Nullable<boolean>;
    is_public_to_auth_users: Nullable<boolean>;
    license: Nullable<string>;
    name: Nullable<string>;
    overridden_course_visibility?: string;
    public_syllabus: Nullable<boolean>;
    public_syllabus_to_auth: Nullable<boolean>;
    restrict_enrollments_to_course_dates: Nullable<boolean>;
    root_account_id: Nullable<number>;
    start_at: Nullable<string>;
    storage_quota_mb: Nullable<number>;
    template: Nullable<boolean>;
    time_zone: Nullable<string>;
    uuid: Nullable<string>;
    workflow_state: Nullable<string>
    access_restricted_by_date?: boolean;
}

export interface Course {
    courseName: string;
    courseId: number;
}

