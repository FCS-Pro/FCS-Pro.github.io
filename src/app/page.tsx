import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-black text-white relative overflow-hidden selection:bg-accent-cyan selection:text-black">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-transparent to-deep-black"></div>
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent-purple opacity-20 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto space-y-8 pt-20">
          <div className="inline-block border border-accent-cyan/30 bg-accent-cyan/5 px-3 py-1 rounded text-xs font-display tracking-widest text-accent-cyan mb-4 animate-pulse">
            SYSTEM STATUS: ONLINE
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-tight">
            BEYOND AUTOMATION.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              TRUE AUTONOMY
            </span>
            <span className="text-accent-cyan animate-pulse">_</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-text-dim font-body leading-relaxed">
            The first AI-Human Hybrid OS designed to orchestrate the next generation of industrial machines. 
            From Drones to AGVs—we give them a brain, not just a script.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-6">
            <button className="group relative px-8 py-4 bg-transparent border border-accent-cyan text-accent-cyan font-display font-bold tracking-wider hover:bg-accent-cyan hover:text-black transition-all duration-300 shadow-neon-cyan">
              <span className="absolute inset-0 w-full h-full bg-accent-cyan/20 blur-lg group-hover:blur-xl transition-all opacity-50 group-hover:opacity-100"></span>
              <span className="relative flex items-center gap-2">[ REQUEST DEMO ]</span>
            </button>
            <button className="px-8 py-4 border border-white/20 text-white/80 font-display font-bold tracking-wider hover:border-white hover:text-white transition-all duration-300 hover:bg-white/5">
              READ WHITEPAPER
            </button>
          </div>

          <div className="pt-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <p className="text-xs font-display text-text-dim tracking-widest mb-6 uppercase">Powered by & Compatible with</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 font-display font-bold text-xl">
              <span>NVIDIA <span className="text-green-500">JETSON</span></span>
              <span>Qualcomm</span>
              <span>ROS 2</span>
              <span>ArduPilot</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROBLEM SECTION ================= */}
      <section className="relative py-32 px-4 bg-deep-black border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 md:flex md:justify-between md:items-end border-l-2 border-red-500 pl-6">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white max-w-2xl leading-tight">
              THE "SMART" FACTORY <br/> 
              <span className="text-red-500">ISN'T SMART ENOUGH.</span>
            </h2>
            <p className="text-text-dim mt-4 md:mt-0 max-w-md text-sm md:text-base">
              Current automation is rigid. It breaks when the environment changes. 
              These aren't just bugs; they are systemic failures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 border border-white/10 bg-white/5 hover:border-red-500/50 hover:bg-red-500/5 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity text-red-500 font-display text-4xl">01</div>
              <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-red-400">Static Behavior</h3>
              <p className="text-text-dim text-sm leading-relaxed">Legacy robots follow static scripts. They cannot adapt to chaos, leading to downtime.</p>
            </div>
            <div className="group p-8 border border-white/10 bg-white/5 hover:border-red-500/50 hover:bg-red-500/5 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity text-red-500 font-display text-4xl">02</div>
              <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-red-400">High Latency</h3>
              <p className="text-text-dim text-sm leading-relaxed">Cloud dependency introduces lag. In critical industrial operations, milliseconds mean safety.</p>
            </div>
            <div className="group p-8 border border-white/10 bg-white/5 hover:border-red-500/50 hover:bg-red-500/5 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity text-red-500 font-display text-4xl">03</div>
              <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-red-400">Security Risks</h3>
              <p className="text-text-dim text-sm leading-relaxed">Constant data transmission exposes sensitive IP. Data should stay at the edge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SOLUTION SECTION ================= */}
      <section className="relative py-32 px-4 bg-deep-black border-t border-white/5">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-cyan opacity-5 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-accent-cyan tracking-[0.2em] text-sm font-display font-bold uppercase mb-4 block">The Architecture</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white">
              THE COUNCIL OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">MINDS</span>
            </h2>
            <p className="mt-6 text-text-dim max-w-2xl mx-auto">
              A decentralized ecosystem where specialized AI Agents work in perfect sync to deliver true autonomy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. AUTONOMY OS */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2 p-8 rounded-2xl border border-accent-cyan/20 bg-accent-cyan/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/20 blur-[50px] group-hover:bg-accent-cyan/30 transition-all"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 mb-6 rounded bg-accent-cyan/10 flex items-center justify-center border border-accent-cyan/30 text-accent-cyan">
                  <span className="font-bold text-xl">OS</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Autonomy OS™</h3>
                <p className="text-gray-400 text-sm mb-6">The Core Orchestrator. Manages hardware abstraction, mission planning, and agent communication in real-time.</p>
              </div>
            </div>

            {/* 2. ATHENA */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-accent-purple/50 transition-all group">
              <div className="w-10 h-10 mb-4 rounded bg-accent-purple/10 flex items-center justify-center border border-accent-purple/30 text-accent-purple">
                <span className="font-bold">AI</span>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2">Athena</h3>
              <p className="text-text-dim text-xs leading-relaxed mb-4">
                The Health Guardian. Predicts component failures before they happen.
              </p>
            </div>

            {/* 3. BOLT */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-yellow-500/50 transition-all group">
              <div className="w-10 h-10 mb-4 rounded bg-yellow-500/10 flex items-center justify-center border border-yellow-500/30 text-yellow-500">
                <span className="font-bold">UI</span>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2">BOLT</h3>
              <p className="text-text-dim text-xs leading-relaxed mb-4">
                The HUD Interface. AR visualization for human operators.
              </p>
            </div>

            {/* 4. ARGUS */}
            <div className="md:col-span-2 lg:col-span-4 p-8 rounded-2xl border border-white/10 bg-white/5 flex flex-col md:flex-row items-center gap-8 group hover:border-white/30 transition-all">
              <div className="flex-1">
                <div className="w-10 h-10 mb-4 rounded bg-green-500/10 flex items-center justify-center border border-green-500/30 text-green-500">
                   <span className="font-bold">CV</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Argus Vision</h3>
                <p className="text-text-dim text-sm max-w-xl">
                  Advanced Computer Vision module. Capable of object detection and SLAM mapping.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-12 bg-deep-black text-center">
        <h2 className="text-2xl font-display font-bold text-white mb-6">READY TO UPGRADE?</h2>
        <p className="text-text-dim mb-8">Join the revolution of autonomous machines.</p>
        <p className="text-xs text-gray-600">© 2024 FCS-Pro. All rights reserved. Built with Autonomy OS.</p>
      </footer>

    </main>
  );
}
