import MemberCard from '../components/MemberCard'

function Team() {
  return (
    <div className="min-h-screen ml-20 md:ml-64 bg-[#0a0a0a] text-white p-6 ">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-center text-blue-400 tracking-wide drop-shadow-[0_3px_1px_rgba(0,0,0,0.7)] drop-shadow-[0_5px_15px_rgba(59,130,246,0.8)]"
 >Meet the Team</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
       
        <MemberCard
          name="Manav Parmar"
          role="Aerodynamics Lead"
          institute="IIT Bombay"
          fact="A ‘no’ today saves a lifetime of wondering 🙃"
          linkedin="https://www.linkedin.com/in/manav-parmar-675544293/"
          instagram="https://www.instagram.com/_manav_1405/?hl=en"
          image="Manav.png"
        />
        <MemberCard
          name="Rohan Joshi"
          role="Mechatronics Lead"
          institute="IIT Bombay"
          fact="Engineering is where logic meets imagination — and I live in that intersection"
          linkedin="https://www.linkedin.com/in/rohan-joshi-845a16330/"
          instagram="https://www.instagram.com/rohanjoshi_2105"
          image="Rohan.png"
        />
        <MemberCard
          name="Divig Bansal"
          role="Mechatronics Sr. Engineer"
          institute="IIT Bombay"
          fact="Kismat likhne wale ko Bhagwan kehte hai, badalne wale ko Bholenath kehte hai"
          linkedin="https://www.linkedin.com/in/divig-bansal-6a2297287/"
          instagram="https://www.instagram.com/divigbansal51_iitb/?hl=en"
          image="Divig.png"
        />
        <MemberCard
          name="Prabhakar Yadav"
          role="Aerodynamics Sr. Engineer"
          institute="IIT Bombay"
          fact="Lift isn’t just physics — it’s the mindset that keeps you rising"
          linkedin="https://www.linkedin.com/in/prabhakar-yadav-25533a282"
          instagram="https://www.instagram.com/prabhakar.05_/?hl=en"
          image="Prabhakar.png"
        />
        <MemberCard
          name="Jeet Gurbani"
          role="Manager"
          institute="IIT Bombay"
          fact="Leadership isn’t about control — it’s about clarity, courage, and calm"
          linkedin="https://www.linkedin.com/in/jeet-gurbani-634561294/"
          instagram="https://www.instagram.com/jeet_111223/?hl=en"
          image="Jeet.png"
        />
        <MemberCard
          name="Prashant Vashisht"
          role="Manager"
          institute="IIT Bombay"
          fact="Currently looking for the plot — but already writing the legacy"
          linkedin="https://www.linkedin.com/in/theprashantvashisht/"
          instagram="https://www.instagram.com/prashantvshisht/?hl=en"
          image="Prashant.png"
        />
       
        <MemberCard
          name="Anjali Joshi"
          role="Manager"
          institute="IIT Bombay"
          fact="Grace in motion, strength in silence — that’s how I fly"
          linkedin="https://www.linkedin.com/in/anjali-joshi-697b17325/"
          instagram="https://www.instagram.com/anjali.g.joshi/?hl=en"
          image="Anjali.png"
        />
       
        <MemberCard
          name="Gokul"
          role="MPC Lead"
          institute="IIT Bombay"
          fact="God save the king — not just a crown, but a mindset"
          linkedin="https://www.linkedin.com/company/unmesh-mashruwala-innovation-cell-iit-bombay/"
          instagram="https://www.instagram.com/gokul_922005"
        />
        <MemberCard
          name="Deepak"
          role="MPC Sr. Engineer"
          institute="IIT Bombay"
          fact="Precision isn't just a skill — it's a mindset"
          linkedin="https://www.linkedin.com/company/unmesh-mashruwala-innovation-cell-iit-bombay/"
          instagram="https://www.instagram.com/umic_iitb"
        />
        <MemberCard
          name="Viraj"
          role="Manager"
          institute="IIT Bombay"
          fact="A steady mind and a clear goal — that’s how missions succeed"
          linkedin="https://www.linkedin.com/company/unmesh-mashruwala-innovation-cell-iit-bombay/"
          instagram="https://www.instagram.com/umic_iitb"
        />
      </div>
    </div>
  )
}

export default Team







