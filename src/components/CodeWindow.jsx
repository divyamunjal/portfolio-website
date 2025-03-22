import React from 'react'

const CodeWindow = () => {
  return (
    <div className="bg-bg-secondary rounded-lg overflow-hidden w-full shadow-xl shadow-black/30">
      <div className="bg-bg-primary/80 px-4 py-3 flex items-center">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-[#f87171] rounded-full"></div>
          <div className="w-3 h-3 bg-[#facc15] rounded-full"></div>
          <div className="w-3 h-3 bg-[#4ade80] rounded-full"></div>
        </div>
        <div className="flex-1 text-center font-mono text-sm text-text-secondary">divya-profile.ts</div>
      </div>
      
      <div className="p-6 font-mono text-sm leading-relaxed">
        <div className="flex mb-2">
          <span className="text-[#64748b] mr-4">1</span>
          <span className="text-[#f472b6]">class</span> <span className="text-[#818cf8]">Developer</span> 
        </div>
        <div className="flex mb-2">
          <span className="text-[#64748b] mr-4">2</span>
          <span>&nbsp;&nbsp;</span><span className="text-[#38bdf8]">name</span>: <span className="text-[#f472b6]">string</span> = <span className="text-[#4ade80]">'Divya Munjal'</span>;
        </div>
        <div className="flex mb-2">
          <span className="text-[#64748b] mr-4">3</span>
          <span>&nbsp;&nbsp;</span><span className="text-[#38bdf8]">role</span>: <span className="text-[#f472b6]">string</span> = <span className="text-[#4ade80]">'Front-end Developer'</span>;
        </div>
        <div className="flex mb-2">
          <span className="text-[#64748b] mr-4">4</span>
          <span>&nbsp;&nbsp;</span><span className="text-[#38bdf8]">experience</span>: <span className="text-[#f472b6]">number</span> = <span>6.5</span>;
        </div>
        <div className="flex mb-2">
          <span className="text-[#64748b] mr-4">5</span>
          <span>&nbsp;&nbsp;</span><span className="text-[#38bdf8]">skills</span>: <span className="text-[#f472b6]">string</span>[] = [
        </div>
        <div className="flex mb-2">
          <span className="text-[#64748b] mr-4">6</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#4ade80]">'Angular'</span>,
          <span className="text-[#4ade80]">'React Native'</span>,
        </div>
        <div className="flex mb-2">
          <span className="text-[#64748b] mr-4">7</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#4ade80]">'HTML'</span>,
          <span className="text-[#4ade80]">'CSS'</span>,
          <span className="text-[#4ade80]">'JavaScript'</span>
        </div>
        <div className="flex mb-2">
          <span className="text-[#64748b] mr-4">8</span>
          <span>&nbsp;&nbsp;</span>];
        </div>
        <div className="flex mb-2">
          <span className="text-[#64748b] mr-4">9</span>
          <span>&nbsp;&nbsp;</span><span className="text-[#64748b] italic">// Currently building mobile applications</span>
        </div>
        <div className="flex mb-2">
          <span className="text-[#64748b] mr-4">10</span>
          <span>&nbsp;&nbsp;</span><span className="text-[#f472b6]">constructor</span>() 
        </div>
        <div className="flex mb-2">
          <span className="text-[#64748b] mr-4">11</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#f472b6]">this</span>.<span className="text-[#818cf8]">buildAwesomeExperiences</span>();
        </div>
        <div className="flex mb-2">
          <span className="text-[#64748b] mr-4">12</span>
          <span>&nbsp;&nbsp;</span>
        </div>
        <div className="flex mb-2">
          <span className="text-[#64748b] mr-4">13</span>
          
        </div>
        <div className="flex">
          <span className="text-[#64748b] mr-4">14</span>
          <span className="text-[#f472b6]">const</span> <span className="text-[#38bdf8]">divya</span> = <span className="text-[#f472b6]">new</span> <span className="text-[#818cf8]">Developer</span>()
          <span className="inline-block w-2 h-4 bg-accent animate-blink align-middle"></span>
        </div>
      </div>
    </div>
  )
}

export default CodeWindow