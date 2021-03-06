import type { Condition } from "../types/Conditions"

export type CutoffLimiter = ">" | "<" | "<=" | ">="

export const AGE = (cutoff: CutoffLimiter, yo: number) => `${cutoff}${yo}`
export const PMHX = (andOr: "and" | "or", ...args: string[]) => `PMHx ${args.join(andOr === 'or' ? '/' : '+')}`

export const DENTAL_CLEARANCE_NEEDED = "Dental assessment required prior to operation e.g. natural teeth, poor dentition"
export const VIABLE_ECHO = "Recent ECHO from ≤2mo ago not available"
export const VIABLE_CONTRAST_CHEST_CT = "Contrast CT chest from ≤3mo ago not available"
export const NON_CLEANSKIN = "Previous sternotomies"
export const DILATED_AORTA = "Aortic dilation on any previous imaging"
export const NEEDS_DUPLEX = [">65yo", "PMHx stroke/TIA", "Carotid bruits on auscultation", "Left main coronary artery disease", "PVD"]