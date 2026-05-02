import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Check, Loader2 } from "lucide-react";
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db, handleFirestoreError, OperationType } from "../lib/firebase";
import { FormSection, TextInput, SelectInput, CheckboxGroup, RadioGroup } from "./AfricanSchoolForm";

type ForeignFormData = {
  institutionName: string;
  country: string;
  website: string;
  institutionType: string[];
  accreditationStatus: string;
  
  interestedPartnerships: string[];
  targetRegions: string[];
  primaryObjectives: string;

  availablePrograms: string[];
  fieldsOfStudy: string;
  deliveryMode: string;

  tuitionRange: string;
  revenueSharing: string;
  localizedPricing: string;
  cobrandedPrograms: string;

  maxStudentCapacity: string;
  experienceInternational: string;
  facultyAvailability: string;

  learningPlatforms: string[];
  remoteAssessments: string;
  additionalInfrastructure: string;

  partnerExpectations: string;
  involvementLevel: string;

  timeline: string;
  decisionMaker: string;

  contactName: string;
  contactTitle: string;
  email: string;
  phone: string;
};

const INSTITUTION_TYPES = ["University", "College", "Online Institution", "Business School", "Other"];
const PARTNERSHIPS = ["Dual Diploma Programs", "Joint Degrees", "Distance Learning Programs", "Franchise / Licensed Programs", "Faculty Exchange", "Other"];
const TARGET_REGIONS = ["West Africa", "Central Africa", "East Africa", "Pan-African"];
const AVAILABLE_PROGRAMS = ["MBA", "MSc Programs", "PhD Programs", "Professional Certifications", "Other"];
const DELIVERY_MODES = ["Fully Online", "Hybrid (Online + Local Support)", "On-site (Requires physical presence)"];
const YES_NO = ["Yes", "No"];
const REVENUE_SHARING = ["Yes", "No", "Open to discussion"];
const LOCALIZED_PRICING = ["Yes", "No", "Depends on structure"];
const FACULTY_AVAILABILITY = ["Fully available", "Limited availability", "Needs expansion"];
const LEARNING_PLATFORMS = ["Moodle", "Blackboard", "Zoom / Live Teaching", "Proprietary LMS", "Other"];
const INVOLVEMENT_LEVELS = ["Full academic control", "Shared delivery", "Advisory role"];
const TIMELINES = ["Within 3 months", "3–6 months", "6–12 months", "Exploring only"];

export default function ForeignSchoolForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { register, handleSubmit, control, formState: { errors } } = useForm<ForeignFormData>({
    defaultValues: {
      institutionType: [], interestedPartnerships: [], targetRegions: [], availablePrograms: [], learningPlatforms: []
    },
  });

  const onSubmit = async (data: ForeignFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const eoiRef = doc(collection(db, "foreign_eois"));
      await setDoc(eoiRef, {
        ...data,
        createdAt: serverTimestamp(),
      });
      setIsSuccess(true);
    } catch (error: any) {
      setSubmitError("We encountered an issue submitting your application. Please check your connection or try again later.");
      handleFirestoreError(error, OperationType.CREATE, "foreign_eois");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-200 mt-12 shadow-sm">
        <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
          <Check className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-slate-900 font-display tracking-tight">Application Submitted</h3>
        <p className="text-slate-600 text-sm leading-relaxed max-w-sm mx-auto">
          Thank you. Your Expression of Interest has been received. A member of the Synergia team will review your submission and contact you within 5 business days.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <form onSubmit={(e) => { e.preventDefault(); void handleSubmit(onSubmit)(e); }} className="space-y-12">
        <FormSection title="Institution Profile" number="01">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <TextInput label="Institution Name" placeholder="e.g. Geneva Business School" {...register("institutionName", { required: true })} error={errors.institutionName} />
            <TextInput label="Country of Operation" placeholder="e.g. Switzerland" {...register("country", { required: true })} error={errors.country} />
            <TextInput label="Official Website" type="url" placeholder="https://..." {...register("website", { required: true })} error={errors.website} />
          </div>
          <div className="mb-4">
             <CheckboxGroup label="Type of Institution" name="institutionType" options={INSTITUTION_TYPES} control={control} />
          </div>
          <div>
             <label className="block text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider">Accreditation Status</label>
             <textarea {...register("accreditationStatus", { required: true })} rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0d72ff] focus:border-[#0d72ff] transition-all" placeholder="Provide details of national/international accreditation (Required)" />
          </div>
        </FormSection>

        <FormSection title="Strategic Interest" number="02">
          <div className="space-y-6">
            <CheckboxGroup label="What type of partnerships are you interested in?" name="interestedPartnerships" options={PARTNERSHIPS} control={control} />
            <CheckboxGroup label="Target Regions for Expansion" name="targetRegions" options={TARGET_REGIONS} control={control} />
            <div>
               <label className="block text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider">What are your primary objectives for entering African markets?</label>
               <textarea {...register("primaryObjectives", { required: true })} rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0d72ff] focus:border-[#0d72ff] transition-all" placeholder="e.g. student acquisition, brand expansion, global positioning..." />
            </div>
          </div>
        </FormSection>

        <FormSection title="Program Offerings" number="03">
          <div className="space-y-6">
            <CheckboxGroup label="Programs available for international partnership" name="availablePrograms" options={AVAILABLE_PROGRAMS} control={control} />
            <div>
               <label className="block text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider">Fields of Study Offered</label>
               <textarea {...register("fieldsOfStudy", { required: true })} rows={2} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0d72ff] focus:border-[#0d72ff] transition-all" placeholder="e.g. Business, IT, Engineering, Health..." />
            </div>
            <RadioGroup label="Delivery Mode" name="deliveryMode" options={DELIVERY_MODES} control={control} />
          </div>
        </FormSection>

        <FormSection title="Commercial & Pricing Alignment" number="04">
          <div className="space-y-6">
            <TextInput label="Typical Tuition Range (per program, per year)" placeholder="e.g. €5,000 - €8,000" {...register("tuitionRange", { required: true })} error={errors.tuitionRange} />
            <RadioGroup label="Are you open to revenue-sharing partnership models?" name="revenueSharing" options={REVENUE_SHARING} control={control} />
            <RadioGroup label="Are you open to localized pricing strategies for African markets?" name="localizedPricing" options={LOCALIZED_PRICING} control={control} />
            <RadioGroup label="Are you open to co-branded programs with partner institutions?" name="cobrandedPrograms" options={YES_NO} control={control} />
          </div>
        </FormSection>

        <FormSection title="Capacity & Scale" number="05">
          <div className="space-y-6">
            <TextInput label="Maximum student capacity per program (annual intake)" placeholder="e.g. 500 students" {...register("maxStudentCapacity", { required: true })} error={errors.maxStudentCapacity} />
            <RadioGroup label="Do you currently have experience with international students?" name="experienceInternational" options={YES_NO} control={control} />
            <RadioGroup label="Faculty availability for international delivery" name="facultyAvailability" options={FACULTY_AVAILABILITY} control={control} />
          </div>
        </FormSection>

        <FormSection title="Delivery Infrastructure" number="06">
          <div className="space-y-6">
            <CheckboxGroup label="Learning platforms used" name="learningPlatforms" options={LEARNING_PLATFORMS} control={control} />
            <RadioGroup label="Do you currently support remote assessments and examinations?" name="remoteAssessments" options={YES_NO} control={control} />
            <div>
               <label className="block text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider">Additional infrastructure details</label>
               <textarea {...register("additionalInfrastructure")} rows={2} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0d72ff] focus:border-[#0d72ff] transition-all" placeholder="Any other tech tools, proctoring systems, etc..." />
            </div>
          </div>
        </FormSection>
        
        <FormSection title="Partnership Expectations" number="07">
          <div className="space-y-6">
            <div>
               <label className="block text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider">What do you expect from a local partner institution?</label>
               <textarea {...register("partnerExpectations", { required: true })} rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0d72ff] focus:border-[#0d72ff] transition-all" placeholder="e.g. student recruitment, facilities, admin support, marketing..." />
            </div>
            <RadioGroup label="Preferred level of involvement in program delivery" name="involvementLevel" options={INVOLVEMENT_LEVELS} control={control} />
          </div>
        </FormSection>

        <FormSection title="Timeline & Decision" number="08">
          <div className="space-y-6">
            <RadioGroup label="Desired timeline for launching international partnerships" name="timeline" options={TIMELINES} control={control} />
            <TextInput label="Who is the decision-maker for partnerships?" placeholder="Role / Title" {...register("decisionMaker", { required: true })} error={errors.decisionMaker} />
          </div>
        </FormSection>

        <FormSection title="Contact Details" number="09">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextInput label="Contact Person Name" placeholder="Full Name" {...register("contactName", { required: true })} error={errors.contactName} />
            <TextInput label="Position/Title" placeholder="e.g. Director of International Dev" {...register("contactTitle", { required: true })} error={errors.contactTitle} />
            <TextInput label="Email Address" type="email" placeholder="official@institution.edu" {...register("email", { required: true })} error={errors.email} />
            <TextInput label="Phone / WhatsApp" placeholder="+..." {...register("phone", { required: true })} error={errors.phone} />
          </div>
        </FormSection>

        <div className="pt-6 border-t border-slate-100 flex flex-col items-start gap-4">
          {submitError && <div className="bg-red-50 text-red-600 text-sm p-4 rounded-lg border border-red-100 w-full mb-4">{submitError}</div>}
          <div className="w-full sm:w-auto">
            <button type="submit" disabled={isSubmitting} className="group relative inline-flex items-center justify-center px-8 py-3.5 font-bold text-white transition-all bg-[#0d72ff] rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0d72ff] disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-blue-500/20 w-full sm:w-auto text-base">
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Submit Application<Check className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" /></>}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
