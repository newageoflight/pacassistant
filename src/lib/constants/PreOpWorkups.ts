import type { Workup } from '../types/Workups';
import { DENTAL_CLEARANCE_NEEDED, DILATED_AORTA, NON_CLEANSKIN, VIABLE_CONTRAST_CHEST_CT, VIABLE_ECHO } from './Conditions';

export const CABG: Workup = {
    "CXR": null,
    "ECHO": VIABLE_ECHO,
    "Coronary angiogram": null,
    "Spirometry": null,
    "Carotid duplex": [">65yo", "PMHx stroke/TIA", "Carotid bruits on auscultation", "Left main coronary artery disease", "PVD"],
    "Non-contrast CT chest": NON_CLEANSKIN,
    "CT aortogram": DILATED_AORTA,
    "LL arterial doppler": "Claudication or vascular insufficiency",
    "LL venous mapping": "Varicose veins",
    "PFTs": ["Significant history of respiratory disease", "No recent PFTs available"],
}

export const ValveBentalls: Workup = {
    "CXR": null,
    "OPG": DENTAL_CLEARANCE_NEEDED,
    "ECHO": VIABLE_ECHO,
    "Carotid duplex":  [">65yo", "PMHx stroke/TIA", "Carotid bruits on auscultation"],
    "Coronary angiogram": [">40yo", "Smoking", "FHx angina/CAD", "PMHx of angina"],
    "Non-contrast CT chest": NON_CLEANSKIN,
    "CT aortogram": DILATED_AORTA,
    "Contrast CT chest with femoral runoff": "Patient being considered for minimally invasive surgery or femoral cannulation",
    "Spirometry": null,
    "Dental clearance": DENTAL_CLEARANCE_NEEDED,
}

export const LungOps: Workup = {
    "PFTs": null,
    "CXR": null,
    "Contrast CT chest": VIABLE_CONTRAST_CHEST_CT,
    "PET-CT": "Suspected or confirmed cancer",
    "ECHO": ">65yo",
    "Carotid duplex": [">65yo", "PMHx stroke/TIA", "Carotid bruits on auscultation"],
    "Stress MIBI/ECHO": ["IHD risk factors", ">45yo"],
}

export const PreOpWorkupNames = {
    "CABG": CABG,
    "Valvuloplasty or Bentall's": ValveBentalls,
    "Lung resection": LungOps,
}
const PreOpWorkups = {CABG, ValveBentalls, LungOps};

export default PreOpWorkups;