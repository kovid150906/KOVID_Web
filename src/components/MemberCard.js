import { FaLinkedin, FaInstagram } from 'react-icons/fa'

function MemberCard({ name, role, institute, linkedin, instagram, fact }) {
  return (
    <div className="w-full max-w-xs bg-[#111] rounded-lg overflow-hidden shadow-md text-white text-center transform transition-transform duration-300 hover:scale-105">
      <img
        src="/assets/team/member_placeholder.png"
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-lg sm:text-xl font-semibold truncate">{name}</h3>
        <p className="text-blue-400 text-xs sm:text-sm">{role}</p>
        <p className="text-gray-400 text-xs sm:text-sm">{institute}</p>
        <p className="text-gray-300 text-xs italic">"{fact}"</p>
        <div className="flex justify-center gap-4 text-blue-400 text-base sm:text-lg mt-2">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  )
}

export default MemberCard

