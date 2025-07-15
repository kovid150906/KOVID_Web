import Purpose from '../sections/Purpose'
import Idea from '../sections/Idea'
import Announcement from '../sections/Announcement'

function Home() {
  return (
    <div className="min-h-screen ml-16 md:ml-64 text-white">
      <section
        className="min-h-[90vh] w-full bg-cover bg-center relative"
        style={{ backgroundImage: "url('/assets/homepage_bg.png')" }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
          <div className="mt-20 sm:mt-24 md:mt-32">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-blue-400">Team AeRoVe</h1>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-8">
              “A drone is often preferred for missions that are too ‘dull, dirty, or dangerous’ for manned aircraft.”<br /><br />
              Team AeRoVe of UMIC is on a never-ending pursuit of developing an ultimate system of autonomous fixed-wing as well as multirotor aircraft. Incorporating different subsystems — Mechatronics, Controls, Machine Learning, Perception, Path Planning, and Localisation — the team emphatically covers every aspect to forge a robust system of autonomous aerial vehicles.
            </p>
            <a
              href="#purpose"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-2 rounded-md shadow-md transition duration-300 text-sm sm:text-base"
            >
              Explore More
            </a>
          </div>
        </div>
      </section>

      <div className="bg-[#0a0a0a] px-4 sm:px-6 md:px-8 py-8 space-y-16">
        <div id="purpose"><Purpose /></div>
        <Idea />
        <Announcement />
      </div>
    </div>
  )
}

export default Home











