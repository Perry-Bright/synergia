import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import AfricanSchoolForm from "./AfricanSchoolForm";
import ForeignSchoolForm from "./ForeignSchoolForm";

export default function EOIForm() {
  const [selectedForm, setSelectedForm] = useState<"african" | "foreign">("african");

  return (
    <div id="apply-form" className="w-full scroll-mt-24">
      {/* Toggle */}
      <div className="flex flex-col items-center justify-center mb-12 z-10 relative">
        <div className="bg-slate-100 p-1.5 rounded-full flex gap-1 relative w-full max-w-[400px]">
          <motion.div
            className="absolute inset-y-1.5 left-1.5 bg-white rounded-full shadow border border-slate-200/60"
            layoutId="formToggle"
            initial={false}
            animate={{
              x: selectedForm === "african" ? "0%" : "calc(100% + 4px)"
            }}
            style={{ width: "calc(50% - 6px)" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
          <button
            onClick={() => setSelectedForm("african")}
            className={`relative z-10 w-1/2 rounded-full py-2.5 text-sm font-bold transition-colors ${
              selectedForm === "african" ? "text-slate-900" : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
            }`}
          >
            African School
          </button>
          <button
            onClick={() => setSelectedForm("foreign")}
            className={`relative z-10 w-1/2 rounded-full py-2.5 text-sm font-bold transition-colors ${
              selectedForm === "foreign" ? "text-slate-900" : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
            }`}
          >
            Foreign School
          </button>
        </div>
      </div>

      {/* Dynamic Headers */}
      <div className="mb-12 text-center">
        <AnimatePresence mode="wait">
          {selectedForm === "african" && (
            <motion.div
              key="african-intro"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
                 Expression of Interest
               </h2>
               <p className="text-base md:text-lg font-bold text-[#0d72ff] uppercase tracking-wider mb-4 md:mb-6">
                 International Academic Partnerships • 2026 Intake
               </p>
               <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-4">
                 Synergia is working with selected institutions to design and launch premium international academic programs. Completing this form assesses your institution's alignment and readiness.
               </p>
               <p className="text-slate-900 font-bold text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                 We work with a limited number of international institutions per academic cycle.
               </p>
            </motion.div>
          )}

          {selectedForm === "foreign" && (
            <motion.div
              key="foreign-intro"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
                 International Partnership Expression of Interest (EOI)
               </h2>
               <p className="text-sm sm:text-base md:text-lg font-bold text-[#0d72ff] uppercase tracking-wider mb-4 md:mb-6">
                 Expand Your Institution into High-Growth African Markets
               </p>
               <div className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-4 space-y-3">
                 <p>Synergia is an international academic partnership firm connecting institutions across Africa, Europe, the United States, and Asia.</p>
                 <p>We work with selected institutions to design and launch structured international programs including dual diplomas, joint degrees, and distance learning pathways.</p>
                 <p>This form is for institutions interested in expanding their academic programs into African markets through structured, revenue-generating partnerships.</p>
                 <p>Submissions are reviewed on a rolling basis for upcoming academic intakes.</p>
               </div>
               <p className="text-slate-900 font-bold text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-4">
                 We work with a limited number of international institutions per academic cycle.
               </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          {selectedForm === "african" && (
            <motion.div
              key="african"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <AfricanSchoolForm />
            </motion.div>
          )}

          {selectedForm === "foreign" && (
            <motion.div
              key="foreign"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <ForeignSchoolForm />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
