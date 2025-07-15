import MemberCard from '../components/MemberCard'

function Team() {
  return (
    <div className="min-h-screen ml-20 md:ml-64 bg-[#0a0a0a] text-white p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">Meet the Team</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        <MemberCard
          name="Kovid Sharma"
          role="Frontend Developer — UI/UX Subsystem"
          institute="IIT Bombay"
          fact="Loves blending dark themes with vibrant animations."
          linkedin="https://www.linkedin.com/company/unmesh-mashruwala-innovation-cell-iit-bombay/"
          instagram="https://www.instagram.com/umic_iitb/?igshid=1vialpckb3scy"
        />
        <MemberCard
          name="Riya Kapoor"
          role="ML Engineer — Perception Subsystem"
          institute="IIT Bombay"
          fact="Trains models faster than she runs sprints."
          linkedin="https://www.linkedin.com/company/unmesh-mashruwala-innovation-cell-iit-bombay/"
          instagram="https://www.instagram.com/umic_iitb/?igshid=1vialpckb3scy"
        />
        <MemberCard
          name="Arjun Verma"
          role="Controls Lead — Mechatronics Subsystem"
          institute="IIT Bombay"
          fact="Tunes PID controllers like a musician."
          linkedin="https://www.linkedin.com/company/unmesh-mashruwala-innovation-cell-iit-bombay/"
          instagram="https://www.instagram.com/umic_iitb/?igshid=1vialpckb3scy"
        />
        <MemberCard
          name="Neha Mehta"
          role="Vision Engineer — Perception Subsystem"
          institute="IIT Bombay"
          fact="Detects masts faster than you detect sarcasm."
          linkedin="https://www.linkedin.com/company/unmesh-mashruwala-innovation-cell-iit-bombay/"
          instagram="https://www.instagram.com/umic_iitb/?igshid=1vialpckb3scy"
        />
        <MemberCard
          name="Ishan Malik"
          role="Systems Architect — Integration Subsystem"
          institute="IIT Bombay"
          fact="Connects subsystems better than Bluetooth."
          linkedin="https://www.linkedin.com/company/unmesh-mashruwala-innovation-cell-iit-bombay/"
          instagram="https://www.instagram.com/umic_iitb/?igshid=1vialpckb3scy"
        />
        <MemberCard
          name="Ayesha Singh"
          role="CAD Designer — Mechanical Subsystem"
          institute="IIT Bombay"
          fact="Thinks in splines and dreams in SolidWorks."
          linkedin="https://www.linkedin.com/company/unmesh-mashruwala-innovation-cell-iit-bombay/"
          instagram="https://www.instagram.com/umic_iitb/?igshid=1vialpckb3scy"
        />
        <MemberCard
          name="Siddharth Rao"
          role="Embedded Dev — Controls Subsystem"
          institute="IIT Bombay"
          fact="Codes motor logic while sipping chai."
          linkedin="https://www.linkedin.com/company/unmesh-mashruwala-innovation-cell-iit-bombay/"
          instagram="https://www.instagram.com/umic_iitb/?igshid=1vialpckb3scy"
        />
        <MemberCard
          name="Tanvi Joshi"
          role="Perception Researcher — ML Subsystem"
          institute="IIT Bombay"
          fact="Optimizes neural nets faster than Google Maps."
          linkedin="https://www.linkedin.com/company/unmesh-mashruwala-innovation-cell-iit-bombay/"
          instagram="https://www.instagram.com/umic_iitb/?igshid=1vialpckb3scy"
        />
        <MemberCard
          name="Omkar Desai"
          role="Drone Tester — Flight Subsystem"
          institute="IIT Bombay"
          fact="Flies test drones like they're paper planes."
          linkedin="https://www.linkedin.com/company/unmesh-mashruwala-innovation-cell-iit-bombay/"
          instagram="https://www.instagram.com/umic_iitb/?igshid=1vialpckb3scy"
        />
        <MemberCard
          name="Mehul Jain"
          role="WebOps — UI + DevOps Subsystem"
          institute="IIT Bombay"
          fact="Pushes commits with zero merge conflicts."
          linkedin="https://www.linkedin.com/company/unmesh-mashruwala-innovation-cell-iit-bombay/"
          instagram="https://www.instagram.com/umic_iitb/?igshid=1vialpckb3scy"
        />
      </div>
    </div>
  )
}

export default Team







