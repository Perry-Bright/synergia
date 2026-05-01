import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CheckCircle2,
  Globe2,
  Building2,
  TrendingUp,
  ShieldCheck,
  GraduationCap,
  XOctagon,
  CheckIcon,
  ChevronDown,
} from "lucide-react";
import EOIForm from "./EOIForm";
import Logo from "./Logo";

export default function Landing() {
  return (
    <div className="bg-white text-slate-900 font-sans flex flex-col min-h-screen selection:bg-[#0d72ff] selection:text-white">
      {/* Top Navigation / Trust Bar */}
      <nav className="px-6 md:px-12 py-4 border-b border-white/60 shadow-[0_4px_30px_rgba(0,0,0,0.03)] flex justify-between items-center bg-[#f2f7ff]/70 backdrop-blur-xl sticky top-0 z-50 shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center shrink-0 w-11 h-11">
            <Logo className="w-11 h-11 drop-shadow-sm" />
          </div>
          <span className="text-[1.6rem] font-display font-extrabold tracking-[-0.03em] capitalize text-[#17224d] pt-0.5">
            Synergia
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-[11px] md:text-sm font-semibold text-slate-500 uppercase tracking-widest hidden sm:block">
            2026 Partnership Intake
          </span>
          <div className="h-5 w-px bg-slate-200 hidden sm:block"></div>
          <a href="#apply" className="text-xs md:text-sm font-bold text-[#0d72ff] flex items-center gap-1 hover:text-blue-700 transition-colors">
            Apply Now
          </a>
        </div>
      </nav>

      <main className="flex-1 flex flex-col relative w-full overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden -z-10 pointer-events-none">
           <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[#0d72ff]/5 blur-[120px]" />
           <div className="absolute top-[30%] -left-[20%] w-[50%] h-[50%] rounded-full bg-blue-300/10 blur-[100px]" />
        </div>

        {/* Hero Section */}
        <section className="relative z-10 px-6 md:px-12 pt-20 pb-24 md:pt-32 md:pb-32 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-[55%] flex flex-col items-start text-left">
            <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 text-[#0d72ff] text-[10px] md:text-xs font-bold rounded-full uppercase tracking-wider mb-8 shadow-sm">
              Strategic Academic Partnership
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] font-black tracking-tight mb-6 md:mb-8">
              Turn Your Institution into an{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d72ff] to-[#0047b3] pb-1 block sm:inline">
                International School
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-500 mb-8 md:mb-10 max-w-2xl leading-relaxed font-medium">
              We help selected institutions launch premium international
              programs <span className="font-bold text-slate-900 border-b-2 border-slate-200 whitespace-nowrap">(4M–8M XAF)</span> with global university partners for the next academic intake.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
               <a href="#apply" className="px-8 py-4 bg-[#0d72ff] text-white font-bold rounded-full shadow-xl shadow-[#0d72ff]/30 hover:bg-blue-600 hover:shadow-[#0d72ff]/40 transition-all text-lg hover:-translate-y-0.5 w-full sm:w-auto text-center">
                 Submit Primary Interest
               </a>
            </div>
          </div>
          
          <div className="w-full lg:w-[45%] relative mt-12 lg:mt-0">
             <div className="aspect-[4/5] sm:aspect-square w-full rounded-[2.5rem] overflow-hidden relative shadow-2xl border border-slate-200/50 block">
                 <img 
                   src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                   alt="Students collaborating" 
                   className="w-full h-full object-cover" 
                 />
                 <div className="absolute inset-0 bg-[#0d72ff]/10 mix-blend-multiply" />
             </div>
             
             {/* Floating Trust Badge */}
             <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                   <ShieldCheck className="w-6 h-6 text-green-600" />
                 </div>
                 <div>
                   <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Institutional Risk</p>
                   <p className="text-sm text-slate-900 font-bold">Zero Rebuilding. 100% Alignment.</p>
                 </div>
             </div>
          </div>
        </section>

        {/* EOI Form Section */}
        <section id="apply" className="px-6 md:px-12 relative z-20 -mt-12 md:-mt-20 mb-20 md:mb-24">
             <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-8 md:mb-12">
                   <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
                     Expression of Interest
                   </h2>
                   <p className="text-base md:text-lg font-bold text-[#0d72ff] uppercase tracking-wider mb-4 md:mb-6">
                     International Academic Partnerships • 2026 Intake
                   </p>
                   <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                     Synergia is working with selected institutions to design and launch premium international academic programs. Completing this form assesses your institution's alignment and readiness.
                   </p>
                </div>

                <div className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(13,114,255,0.1)] p-6 sm:p-10 md:p-14 border border-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#0d72ff]/5 to-transparent pointer-events-none -z-10"></div>
                    <EOIForm />
                </div>
             </div>
        </section>

        {/* Value Features */}
        <section className="bg-white border-y border-slate-100 py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
                <div className="flex flex-col gap-3 items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                    <Globe2 className="w-7 h-7 text-[#0d72ff]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">High-Tuition Programs</h3>
                    <p className="text-sm text-slate-500 mt-1">Unlock premium revenue streams</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                    <Building2 className="w-7 h-7 text-[#0d72ff]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Institutional Prestige</h3>
                    <p className="text-sm text-slate-500 mt-1">Global status & partner matching</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-[#0d72ff]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Better Recruitment</h3>
                    <p className="text-sm text-slate-500 mt-1">Attract elite tier student profiles</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-[#0d72ff]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Zero Complexity</h3>
                    <p className="text-sm text-slate-500 mt-1">We manage the global integration</p>
                  </div>
                </div>
              </div>
            </div>
        </section>

        {/* Content Stacks */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 flex flex-col gap-32 md:gap-40">
            
            {/* Problem Section (Pain-Driven) */}
            <section className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1 relative">
                {/* Decorative blob */}
                <div className="absolute -left-10 -top-10 w-40 h-40 bg-red-100 rounded-full blur-3xl opacity-50 z-0"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] font-bold mb-6 md:mb-8 text-slate-900 tracking-tight">
                    The local education market is hitting a ceiling.
                  </h2>
                  <div className="p-6 sm:p-8 md:p-10 bg-white border border-slate-200 rounded-3xl shadow-xl shadow-slate-100/50">
                    <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-slate-600">
                      Most institutions remain local.{" "}
                      <span className="text-[#0d72ff] font-bold">
                        A few are becoming global.
                      </span>{" "}
                      <span className="block mt-4">
                        Which side of the divide will you be on?
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-6 w-full relative z-10">
                <PainPoint text="Student fees are capped at local levels, limiting growth." />
                <PainPoint text="Competition between local institutions is increasing every year." />
                <PainPoint text="International positioning is limited or nonexistent." />
              </div>
            </section>

            {/* Solution Section */}
            <section className="bg-[#0b1437] text-white p-8 md:p-12 lg:p-16 rounded-[40px] relative overflow-hidden shadow-2xl flex flex-col lg:flex-row gap-12 lg:items-center">
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0d72ff]/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Team meeting" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay pointer-events-none" />
              
              <div className="relative z-10 flex-1 lg:w-1/3">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-white tracking-tight">
                  We handle the complexity.<br />You focus on delivery.
                </h2>
                <p className="text-lg lg:text-xl text-blue-200 mt-6 mb-8 leading-relaxed">
                  Synergia helps institutions design and launch international
                  programs without disrupting existing operations.
                </p>
              </div>

              <div className="relative z-10 flex-1 lg:w-2/3 grid sm:grid-cols-2 gap-6 lg:gap-6">
                  <Step number="01" title="Program Design" text="We co-develop the curriculum and structure to meet international standards while fitting your local context." />
                  <Step number="02" title="Partner Matching" text="We connect you with matched, accredited global universities ready for collaboration." />
                  <Step number="03" title="Integration" text="We execute the operational rollout, ensuring a smooth pilot launch for your next intake." />
                  <Step number="04" title="Growth & Scale" text="We continuously optimize the program, providing ongoing support to boost enrollment and maximize revenue." />
              </div>
            </section>

            {/* Value Stack */}
            <section>
              <div className="flex flex-col lg:flex-row gap-8 lg:items-end mb-12 relative">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-slate-50 -z-10 rounded-full blur-3xl opacity-30"></div>
                <div className="flex-1">
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-5 tracking-tight text-slate-900">
                    The Financial & Strategic Upside
                  </h2>
                  <p className="text-lg lg:text-xl text-slate-500 max-w-2xl">
                    Partnering with Synergia isn't just an academic upgrade—it's a
                    complete repositioning of your institution's value.
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <ValueCard
                  title="Revenue Expansion"
                  description="Introduce programs priced 2–5x higher than your current offerings."
                />
                <ValueCard
                  title="Institutional Upgrade"
                  description="Stop competing on price with local schools and start competing on prestige."
                />
                <ValueCard
                  title="Enrollment Boost"
                  description="International partnerships create increased interest across standard programs."
                />
                <ValueCard
                  title="Global Network Access"
                  description="Connect your faculty and students to a worldwide ecosystem of top institutions."
                />
              </div>
            </section>

            {/* Why This Works (Logic) */}
            <section className="bg-blue-50/50 border border-blue-100 p-8 md:p-16 lg:p-24 rounded-[40px] text-center relative overflow-hidden">
               {/* Background & Styled Geometry */}
               <div className="absolute inset-0 pointer-events-none">
                 {/* Subtle Dot Grid */}
                 <div className="absolute inset-0 bg-[radial-gradient(#0d72ff15_1.5px,transparent_1.5px)] bg-[size:30px_30px]"></div>
                 
                 {/* Soft Ambient Glows */}
                 <div className="absolute top-[0%] left-[0%] w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-[100px]"></div>
                 <div className="absolute bottom-[0%] right-[0%] w-[500px] h-[500px] bg-[#0d72ff]/5 rounded-full blur-[100px]"></div>
                 
                 {/* Glassmorphic Ornaments */}
                 <div className="absolute top-12 left-10 lg:top-20 lg:left-20 w-28 h-28 lg:w-36 lg:h-36 bg-white/40 backdrop-blur-md border border-white/60 shadow-xl rounded-3xl transform -rotate-12 flex items-center justify-center opacity-70">
                   <div className="w-12 h-12 lg:w-16 lg:h-16 border-4 lg:border-[6px] border-[#0d72ff]/20 rounded-full"></div>
                 </div>
                 
                 <div className="absolute bottom-12 right-10 lg:bottom-20 lg:right-20 w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-white/60 to-white/10 backdrop-blur-md border border-white/50 shadow-2xl rounded-full flex items-center justify-center opacity-80">
                   <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#0d72ff]/10 rounded-xl transform rotate-45 border border-[#0d72ff]/20"></div>
                 </div>
               </div>

              <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 tracking-tight text-slate-900">Why This Works Perfectly</h2>

                  <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 lg:gap-10">
                    <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40 flex-1 text-left relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                        <Globe2 className="w-40 h-40" />
                      </div>
                      <div className="font-bold text-2xl mb-4 text-slate-900 relative z-10">Global Universities</div>
                      <p className="text-slate-500 text-lg leading-relaxed relative z-10">
                        Want low-risk access to fast-growing African markets without building campuses.
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center justify-center my-2 md:my-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0d72ff] text-white rounded-full flex items-center justify-center font-black text-xl shadow-2xl shadow-[#0d72ff]/30 z-10 relative">
                        VS
                      </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-3xl border border-blue-200 shadow-xl shadow-blue-100/50 flex-1 text-left relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity text-[#0d72ff]">
                        <Building2 className="w-40 h-40" />
                      </div>
                      <div className="font-bold text-2xl mb-4 text-[#0d72ff] relative z-10">
                        Local Institutions
                      </div>
                      <p className="text-slate-500 text-lg leading-relaxed relative z-10">
                        Want international positioning, prestige, and higher-tier program revenue.
                      </p>
                    </div>
                  </div>

                  <div className="mt-20 pt-10 border-t border-blue-200">
                    <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed max-w-4xl mx-auto">
                      <span className="font-bold text-[#0d72ff]">Synergia</span> acts as the architect. We structure the deal, ensure compliance,
                      and oversee execution so both sides win.
                    </p>
                  </div>
              </div>
            </section>

            {/* Objection Handling */}
            <section className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-[40%]">
                <div className="lg:sticky lg:top-32">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight text-slate-900 leading-tight">
                    Have concerns? <br className="hidden lg:block"/> Let's clear them up.
                    </h2>
                    <p className="text-base sm:text-lg text-slate-500 mb-8 max-w-xl">Direct answers to the most common questions we get from institution leadership.</p>
                </div>
              </div>
              <div className="lg:w-[60%] space-y-4">
                <FAQItem
                  question="We don't have any existing ties with international universities. Is that a problem?"
                  answer="Not at all. That is exactly why Synergia exists. We bring the accredited global partners to you, matching your institution's profile with international universities actively looking to expand into your region."
                />
                <FAQItem
                  question="Will we need to fly professors in? How is the curriculum delivered?"
                  answer="No. The programs are designed to be delivered via hybrid or distance learning models. Your local faculty will facilitate the sessions and manage operations on the ground, while the international partner provides the curriculum, digital resources, and overall academic governance."
                />
                <FAQItem
                  question="Will this disrupt our current academic programs or operations?"
                  answer="The new premium programs sit entirely alongside your current offerings. There is no need to restructure your existing operations or alter your current degrees. It acts as an additional, high-tier revenue stream without cannibalizing local enrollments."
                />
                <FAQItem
                  question="Do we need to make significant infrastructure upgrades to qualify?"
                  answer="We work with your existing infrastructure. As long as you have basic digital capacity and reliable internet, we can design a delivery model that fits your current capabilities. Infrastructure can scale gradually as the premium programs start generating significant revenue."
                />
                <FAQItem
                  question="Is there a high upfront cost to initiate the partnership?"
                  answer="Our model is built on shared success. While there may be minimal setup costs depending on the exact program structure, we prioritize revenue-sharing models that reduce institutional risk and align incentives for both parties."
                />
              </div>
            </section>
        </div>

      </main>

      <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800 shrink-0">
        <div className="px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 max-w-7xl mx-auto">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-lg overflow-hidden bg-white/5 p-1.5 border border-white/10">
                <Logo className="w-full h-full drop-shadow-md" />
              </div>
              <span className="text-2xl font-display font-extrabold tracking-[-0.03em] capitalize text-white pt-0.5">
                Synergia
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Structuring high-value international academic partnerships for leading educational institutions across emerging markets.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Contact Us</h4>
            <div className="space-y-4 text-sm text-slate-300">
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </span>
                +237 681 032 48 42
              </p>
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </span>
                aperrybright@gmail.com
              </p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Our Office</h4>
            <p className="flex items-start gap-3 text-sm text-slate-300">
              <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </span>
              Total Melen,<br/>Yaounde, Cameroon
            </p>
          </div>
        </div>
        <div className="px-6 md:px-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-widest font-bold text-slate-500 max-w-7xl mx-auto text-center md:text-left gap-4 md:gap-0">
          <span>Synergia Global Alliances © 2026</span>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 mt-2 md:mt-0">
            <span>Europe-US-Asia Partnerships</span>
            <span className="text-[#0d72ff]">Limited availability for 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helpers

function PainPoint({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-4 md:gap-6 bg-white p-5 md:p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50">
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
        <XOctagon className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
      </div>
      <p className="text-lg md:text-xl lg:text-2xl text-slate-700 font-medium leading-relaxed pt-1">{text}</p>
    </div>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="relative bg-[#ffffff08] border border-white/10 p-6 pt-7 md:p-8 md:pt-8 rounded-3xl text-left backdrop-blur-md hover:bg-[#ffffff0d] transition-colors">
      <div className="absolute -top-5 left-6 text-[#0d72ff] font-display font-black text-lg bg-white w-10 h-10 flex items-center justify-center rounded-xl shadow-lg">
        {number}
      </div>
      <h3 className="text-lg md:text-xl font-bold mb-2 text-white leading-tight">{title}</h3>
      <p className="text-blue-100/70 leading-relaxed text-sm">{text}</p>
    </div>
  );
}

function ValueCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-200 hover:shadow-lg transition-all relative overflow-hidden group">
      <div className="absolute right-0 top-0 w-2 h-full bg-[#0d72ff] transform translate-x-full group-hover:translate-x-0 transition-transform"></div>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
          <CheckIcon className="w-6 h-6 text-[#0d72ff]" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 leading-tight">{title}</h3>
      </div>
      <p className="text-slate-500 text-base leading-relaxed">{description}</p>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 shadow-sm hover:border-[#0d72ff]/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none"
      >
        <h3 className="font-bold text-lg text-slate-900 pr-8">{question}</h3>
        <div className={`w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-5 h-5 text-slate-400" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-8 pb-8"
          >
            <div className="text-base text-slate-600 leading-relaxed pt-4 border-t border-slate-100">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
