function Idea() {
  return (
    <section className="flex flex-col lg:flex-row-reverse items-start gap-8 px-4 sm:px-6 md:px-8 py-8">
      <div className="w-full lg:w-1/2">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-400 tracking-wide drop-shadow-[0_5px_15px_rgba(59,130,246,0.8)]"
>The Idea</h2>
          <img
            src="/assets/idea.png"
            alt="Idea thumbnail"
            className="block lg:hidden w-12 h-12 rounded shadow-md"
          />
        </div>

        <p className="text-sm sm:text-base text-white leading-relaxed">
          For tackling the IARC 2020 Challenge, Team AeRoVe decided to go with a Mothership-Daughtership configuration, 
          which would increase effectiveness and save time. A key constraint governing our strategy of module replacement 
          is time constraint. The major drawback of using a single drone is that it decreases the time available for communication 
          module replacement. Therefore a mother-daughter drone configuration will buy us the time of the entire return flight. 
          Also, the weight of the Mothership decreases during return flight which allows it to achieve a higher maximum speed. 
          The mothership carries the daughtership up to the drop point, and then circles back to the start point. Meanwhile, 
          the daughtership undertakes the arduous task of replacing the communication module on the swaying mast.
        </p>
      </div>

      <div className="hidden lg:block lg:w-1/2">
        <img
          src="/assets/idea.png"
          alt="Idea full"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  )
}

export default Idea



