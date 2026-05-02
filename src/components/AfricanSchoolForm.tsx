import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Check, ChevronDown, Loader2 } from "lucide-react";
import { cn } from "../lib/utils";
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db, handleFirestoreError, OperationType } from "../lib/firebase";

type FormData = {
  institutionName: string;
  institutionType: string;
  city: string;
  country: string;
  contactPerson: string;
  role: string;
  email: string;
  phone: string;

  programsOffered: string[];
  instructionLanguage: string;
  currentTuitionRange: string;

  objectives: string[];
  interestedPrograms: string[];

  maxTuitionPotential: string;
  willingnessPremium: string;

  onlineSupport: string;
  toolsUsed: string;
  internetQuality: number;
  infrastructure: string[];

  launchTimeline: string;
  pilotIntake: string;
  pilotOpenness: string;
  internalSupport: string[];

  additionalInfo: string;
};

const INSTITUTION_TYPES = ["University", "Higher Institute", "Secondary School", "Other"];
const COUNTRIES = ["Cameroon", "Nigeria", "Ghana", "Kenya", "South Africa", "Rwanda", "Senegal", "Côte d'Ivoire", "Gabon", "Equatorial Guinea", "Chad", "Central African Republic", "Congo", "Democratic Republic of the Congo", "Other"];
const PROGRAMS_OFFERED = ["Bachelor's", "Master's", "Doctorate (PhD)", "Professional Programs (MBA, etc.)"];
const LANGUAGES = ["English", "French", "Bilingual"];
const TUITION_RANGES = ["Below 500,000 XAF", "500,000 – 1M XAF", "1M – 2M XAF", "Above 2M XAF"];
const OBJECTIVES = ["Increase institutional prestige", "Attract higher-paying students", "Expand postgraduate offerings", "Improve global exposure", "Develop new academic programs"];
const INTERESTED_PROGRAMS = ["Dual Diploma Programs", "Joint Degrees", "Distance/Online Programs", "Student Exchange", "Faculty Exchange", "Franchise / Licensed Programs"];
const MAX_TUITIONS = ["1M – 2M XAF", "2M – 4M XAF", "4M – 6M XAF", "Above 6M XAF"];
const YES_POSSIBLY_NO = ["Yes", "Possibly", "No"];
const ONLINE_SUPPORT = ["Yes (fully operational)", "Partially (basic tools only)", "No"];
const INFRASTRUCTURE = ["Reliable campus internet", "Computer labs", "Student access to devices", "LMS (Learning Management System)", "IT support team"];
const TIMELINES = ["September 2026 (Next academic year)", "Early 2027", "Later"];
const PILOT_INTAKES = ["10–20", "20–50", "50–100", "100+"];
const PILOT_OPENNESS = ["Yes", "Possibly (need more details)", "No"];
const INTERNAL_SUPPORT = ["Faculty involvement", "Marketing support", "Administrative support", "Dedicated program coordinator"];

export default function AfricanSchoolForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { register, handleSubmit, control, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      country: "Cameroon", programsOffered: [], objectives: [], interestedPrograms: [], infrastructure: [], internalSupport: [], internetQuality: 3,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const eoiRef = doc(collection(db, "eois"));
      await setDoc(eoiRef, {
        ...data,
        internetQuality: Number(data.internetQuality),
        createdAt: serverTimestamp(),
      });
      setIsSuccess(true);
    } catch (error: any) {
      setSubmitError("We encountered an issue submitting your application. Please check your connection or try again later.");
      handleFirestoreError(error, OperationType.CREATE, "eois");
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextInput label="Institution Name" placeholder="e.g. Synergia University" {...register("institutionName", { required: true })} error={errors.institutionName} />
            <SelectInput label="Type of Institution" options={INSTITUTION_TYPES} {...register("institutionType", { required: true })} error={errors.institutionType} />
            <SelectInput label="Country" options={COUNTRIES} {...register("country", { required: true })} error={errors.country} />
            <TextInput label="City" placeholder="e.g. Douala" {...register("city", { required: true })} error={errors.city} />
            <TextInput label="Primary Contact Person" placeholder="Full Name" {...register("contactPerson", { required: true })} error={errors.contactPerson} />
            <TextInput label="Role/Position" placeholder="e.g. Director of Academics" {...register("role", { required: true })} error={errors.role} />
            <TextInput label="Email Address" type="email" placeholder="official@institution.edu" {...register("email", { required: true })} error={errors.email} />
            <TextInput label="Phone / WhatsApp" placeholder="+237 ..." {...register("phone", { required: true })} error={errors.phone} />
          </div>
        </FormSection>

        <FormSection title="Current Academic Structure" number="02">
          <div className="space-y-6">
            <CheckboxGroup label="Programs Currently Offered" name="programsOffered" options={PROGRAMS_OFFERED} control={control} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SelectInput label="Primary Language of Instruction" options={LANGUAGES} {...register("instructionLanguage", { required: true })} error={errors.instructionLanguage} />
              <SelectInput label="Current Tuition Range" options={TUITION_RANGES} {...register("currentTuitionRange", { required: true })} error={errors.currentTuitionRange} />
            </div>
          </div>
        </FormSection>

        <FormSection title="Strategic Interest" number="03">
          <div className="space-y-6">
            <CheckboxGroup label="Main objectives for international partnerships?" name="objectives" options={OBJECTIVES} control={control} />
            <CheckboxGroup label="Which types of programs are you most interested in?" name="interestedPrograms" options={INTERESTED_PROGRAMS} control={control} />
          </div>
        </FormSection>

        <FormSection title="Revenue Position" number="04">
          <div className="space-y-6">
            <RadioGroup label="What is the maximum tuition level your institution can realistically support for premium programs?" name="maxTuitionPotential" options={MAX_TUITIONS} control={control} />
            <RadioGroup label="Are you willing to introduce new premium international programs priced above your current tuition levels?" name="willingnessPremium" options={YES_POSSIBLY_NO} control={control} />
          </div>
        </FormSection>

        <FormSection title="Digital Capacity" number="05">
          <div className="space-y-6">
            <RadioGroup label="Does your institution currently support online or distance learning?" name="onlineSupport" options={ONLINE_SUPPORT} control={control} />
            <TextInput label="What platforms/tools do you currently use?" placeholder="e.g. Zoom, Moodle, Google Classroom..." {...register("toolsUsed", { required: true })} error={errors.toolsUsed} />

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <label className="block text-xs font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Internet Connectivity Quality
              </label>
              <Controller
                control={control}
                name="internetQuality"
                render={({ field }) => (
                  <div className="flex flex-col space-y-4">
                    <input type="range" min="1" max="5" step="1" className="w-full accent-[#0d72ff]" {...field} />
                    <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase">
                      <span>1 (Very Poor)</span><span>{field.value}</span><span>5 (Excellent)</span>
                    </div>
                  </div>
                )}
              />
            </div>

            <CheckboxGroup label="Do you have:" name="infrastructure" options={INFRASTRUCTURE} control={control} />
          </div>
        </FormSection>

        <FormSection title="Timeline" number="06">
          <div className="space-y-6">
            <RadioGroup label="When would your institution be ready to launch an international program?" name="launchTimeline" options={TIMELINES} control={control} />
            <RadioGroup label="Estimated number of students for pilot intake" name="pilotIntake" options={PILOT_INTAKES} control={control} />
          </div>
        </FormSection>

        <FormSection title="Internal Readiness" number="07">
          <div className="space-y-6">
            <RadioGroup label="Would your institution be open to participating in a pilot international program?" name="pilotOpenness" options={PILOT_OPENNESS} control={control} />
            <CheckboxGroup label="What internal support can your institution provide?" name="internalSupport" options={INTERNAL_SUPPORT} control={control} />
          </div>
        </FormSection>

        <FormSection title="Additional Info" number="08">
          <div>
            <label className="block text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider">
              Any additional information or expectations?
            </label>
            <textarea
              {...register("additionalInfo")}
              rows={4}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0d72ff] focus:border-[#0d72ff] transition-all"
              placeholder="Share any specific goals, concerns, or expectations for the partnership..."
            />
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

// Helper Components
export function FormSection({ title, number, children }: { title: string; number: string; children: React.ReactNode; }) {
  return (
    <div className="relative border-t border-slate-100 pt-6 mt-6 first:border-0 first:pt-0 first:mt-0">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs font-bold text-[#0d72ff] bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wider">{number}</span>
        <h3 className="text-base font-bold text-slate-900">{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
}

export const TextInput = React.forwardRef<HTMLInputElement, any>(
  ({ label, error, required = true, ...props }, ref) => (
    <div>
      <label className="block text-xs font-bold text-slate-900 mb-1.5 uppercase tracking-wider">
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input ref={ref} required={required} className={cn("w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0d72ff] focus:border-[#0d72ff] transition-all", error && "border-red-500 focus:ring-red-500 focus:border-red-500")} {...props} />
    </div>
  ),
);

export const SelectInput = React.forwardRef<HTMLSelectElement, any>(
  ({ label, options, error, required = true, ...props }, ref) => (
    <div>
      <label className="block text-xs font-bold text-slate-900 mb-1.5 uppercase tracking-wider">
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <select ref={ref} required={required} className={cn("w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 pr-10 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0d72ff] focus:border-[#0d72ff] transition-all appearance-none", error && "border-red-500 focus:ring-red-500 focus:border-red-500")} {...props}>
          <option value="">Select option...</option>
          {options.map((opt: any) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500"><ChevronDown className="h-4 w-4" /></div>
      </div>
    </div>
  ),
);

export function CheckboxGroup({ label, name, options, control, required }: { label: string; name: string; options: string[]; control: any; required?: boolean; }) {
  return (
    <div>
      <label className="block text-xs font-bold text-slate-900 mb-3 uppercase tracking-wider">
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <Controller control={control} name={name} render={({ field }) => (
          <>
            {options.map((opt) => (
              <label key={opt} className="relative flex cursor-pointer rounded-lg border border-slate-200 bg-white hover:bg-slate-50 p-3 transition-all hover:border-[#0d72ff]/30 has-[:checked]:border-[#0d72ff] has-[:checked]:bg-blue-50/50">
                <div className="flex items-start">
                  <div className="flex items-center justify-center relative mt-0.5">
                    <input type="checkbox" className="peer sr-only" value={opt} checked={field.value?.includes?.(opt) || false} onChange={(e) => { const val = e.target.value; const current = field.value || []; if (e.target.checked) field.onChange([...current, val]); else field.onChange(current.filter((x: string) => x !== val)); }} />
                    <div className="size-4 rounded-[4px] border border-slate-300 peer-checked:border-[#0d72ff] peer-checked:bg-[#0d72ff] transition-all" />
                    <Check className="absolute size-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="ml-2.5 text-[13px] font-medium text-slate-700 leading-tight">{opt}</span>
                </div>
              </label>
            ))}
          </>
        )} />
      </div>
    </div>
  );
}

export function RadioGroup({ label, name, options, control, required = true }: { label: string; name: string; options: string[]; control: any; required?: boolean; }) {
  return (
    <div>
      <label className="block text-xs font-bold text-slate-900 mb-3 uppercase tracking-wider leading-relaxed">
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="grid grid-cols-1 gap-2">
        <Controller control={control} name={name} rules={{ required }} render={({ field, fieldState }) => (
          <>
            {options.map((opt) => (
              <label key={opt} className={cn("relative flex cursor-pointer rounded-lg border border-slate-200 bg-white hover:bg-slate-50 p-3 transition-all hover:border-[#0d72ff]/30 has-[:checked]:border-[#0d72ff] has-[:checked]:bg-blue-50/50", fieldState.error && "border-red-300")}>
                <div className="flex items-center">
                  <input type="radio" className="peer sr-only" value={opt} checked={field.value === opt} onChange={() => field.onChange(opt)} />
                  <div className="size-4 rounded-full border border-slate-300 peer-checked:border-[#0d72ff] flex items-center justify-center transition-all bg-white shrink-0">
                    <div className="size-2 rounded-full bg-[#0d72ff] opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="ml-2.5 text-[13px] font-medium text-slate-700">{opt}</span>
                </div>
              </label>
            ))}
          </>
        )} />
      </div>
    </div>
  );
}
