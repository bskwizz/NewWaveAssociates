// Shared state model for the Find the Right Leader intake flow.
export interface ContactInfo {
  workEmail: string;
  companyName: string;
  firstName: string;
  lastName: string;
  phone: string;
  jobTitle: string;
  additionalContext: string;
}

export interface IntakeState {
  practiceArea: string | null;
  companySize: string | null;
  engagementModel: string | null;
  skills: string[];
  startTiming: string | null;
  contact: ContactInfo;
}

export const TOTAL_STEPS = 6;

export const emptyContact: ContactInfo = {
  workEmail: '',
  companyName: '',
  firstName: '',
  lastName: '',
  phone: '',
  jobTitle: '',
  additionalContext: '',
};

export const initialIntake: IntakeState = {
  practiceArea: null,
  companySize: null,
  engagementModel: null,
  skills: [],
  startTiming: null,
  contact: emptyContact,
};
