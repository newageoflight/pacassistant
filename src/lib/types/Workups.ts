import type { Condition } from "./Conditions";

// At the moment this is just a plain string, but the plan is for this to involve interfaces/classes as well
export interface Workup {
    [key: string]: Condition | Condition[] | null;
};

export interface CoercedWorkup {
    [key: string]: Condition[] | null;
}

