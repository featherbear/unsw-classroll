
export interface Class {
    classID: number;
    section: string;
    term: string;
    activity: string;
    status: string;
    courseEnrolment: {
        enrolments: number;
        capacity: number;
    };
    termDates: {
        start: string;
        end: string;
    };
    needsConsent: boolean;
    mode: string;
    times: {
        day: string;
        time: {
            start: string;
            end: string;
        };
        weeks: string;
        location: string;
        instructor: string;
    }[];
    notes: any[];
}

export interface RootObject {
    courseCode: string;
    name: string;
    school: string;
    campus: string;
    career: string;
    termsOffered: string[];
    censusDates: string[];
    classes: Class[];
    notes: string[];
}


