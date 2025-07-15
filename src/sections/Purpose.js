function Purpose() {
  return (
    <section className="flex flex-col lg:flex-row items-start gap-8 px-4 sm:px-6 md:px-8 py-8">
      <div className="w-full lg:w-1/2">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400">Purpose</h2>
          <img
            src="/assets/purpose.png"
            alt="Purpose thumbnail"
            className="block lg:hidden w-12 h-12 rounded shadow-md"
          />
        </div>

        <p className="text-sm sm:text-base text-white leading-relaxed">
          At Team AeRoVe, we always look for problems that challenge, excite, and motivate us to grow intellectually.
          Our purpose is to further the boundaries of autonomous aerial technology and realize the true potential of this field.
          We aim to contribute and start the culture of creating cutting edge technology through indigenous innovation.
          The International Aerial Robotics Competition, the longest-running aerial robotics competition in the world,
          is the kind of problem that has pushed us to the best of our capabilities and made us think in ways like never before,
          providing us with an international platform to display our aptitudes.
          In addition to the past technologies, Mission 9 required us to work on novel objectives like long-distance outdoor navigation,
          manipulation of large objects using actuators attached to our drones, interaction with moving frames of reference and 100% onboard computations.
          These tasks posed us with stimulating challenges and provided the team with the opportunity to improve its technical expertise.
          Despite the ongoing pandemic, we braved our way through and not only succeeded to create a collaborative environment,
          but also thoroughly enjoyed working on a collective goal — the IARC Mission 9 challenge.
        </p>
      </div>

      <div className="hidden lg:block lg:w-1/2">
        <img
          src="/assets/purpose.png"
          alt="Purpose full"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  )
}

export default Purpose




