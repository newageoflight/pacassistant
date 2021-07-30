import type { Workup } from '../types/Workups';

export const CABG: Workup = {
    "CXR": null,
    "ECHO": "Recent ECHO from within 2 months ago not available",
    "Coronary angiogram": null,
    "Spirometry": null,
    "Carotid duplex": [">65yo", "PMHx stroke/TIA", "Carotid bruits on auscultation", "Left main coronary artery disease", "PVD"],
    "Non-contrast CT chest": "Previous sternotomies",
    "CT aortogram": "Aortic dilation on any previous imaging",
    "LL arterial doppler": "Claudication or vascular insufficiency",
    "LL venous mapping": "Varicose veins",
    "PFTs": ["Significant history of respiratory disease", "No recent PFTs available"],
}

export const ValveBentalls: Workup = {
    "CXR": null,
    "OPG": "Dental clearance required prior to operation",
    "ECHO": "Recent ECHO from within 2 months ago not available",
    "Carotid duplex":  [">65yo", "PMHx stroke/TIA", "Carotid bruits on auscultation"],
    "Coronary angiogram": [">40yo", "Smoking", "FHx angina/CAD", "PMHx of angina"],
    "Non-contrast CT chest": "Previous sternotomies",
    "CT aortogram": "Aortic dilation on any previous imaging",
    "Contrast CT chest with femoral runoff": "Patient being considered for minimally invasive surgery or femoral cannulation",
    "Spirometry": null,
    "Dental clearance": null,
}

export const LungOps: Workup = {
    "PFTs": null,
    "CXR": null,
    "Contrast CT chest": "Contrast CT chest from <3mo ago not available",
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