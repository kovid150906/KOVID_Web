function Announcement() {
  return (
    <section className="flex flex-col lg:flex-row items-start gap-8 px-4 sm:px-6 md:px-8 py-8">
      <div className="w-full lg:w-1/2">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-400 tracking-wide  drop-shadow-[0_5px_15px_rgba(59,130,246,0.8)]"
>Announcement</h2>
          <img
            src="/assets/announcements.png"
            alt="Announcement thumbnail"
            className="block lg:hidden w-12 h-12 rounded shadow-md"
          />
        </div>

        <p className="text-sm sm:text-base text-white leading-relaxed">
          Team AeRoVe will be showcasing its autonomous drone system at the UMIC Showdown 2025. 
          Catch us live as we demonstrate precision, control, and the power of student innovation. 
          Our system combines real-time vision, intelligent control, and modular design to tackle 
          complex aerial challenges with elegance and efficiency.
        </p>
      </div>

      <div className="hidden lg:block lg:w-1/2">
        <img
          src="/assets/announcements.png"
          alt="Announcements full"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  )
}

export default Announcement


