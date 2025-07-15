import TaskCard from '../components/TaskCard'

function Tasks() {
  const completed = [
    {
      title: "The Mothership",
      description:
        "The mothership is a 25 Kg autonomous hexacopter that deploys the daughter drone and returns home within 9 minutes. Built with a cage-like frame and powered by six MN1010 motors and four 16000 mAh LIPO batteries. Features include a mid-air launchpad and weight-optimized design.",
      image: "/assets/tasks/mothership.png"
    },
    {
      title: "Daughter Drone",
      description:
        "The 25 Kg autonomous coaxial-octocopter executes the module replacement task. Equipped with Pixhawk 4, Intel Realsense D435, Intel NUC 5i5RYH, Here3 GPS, and a 7-DOF robotic arm. It uses chains, gears, and suspended rope-based mounting to achieve aerodynamic efficiency and gripping stability.",
      image: "/assets/tasks/daughterdrone.png"
    },
    {
      title: "Replacement Mechanism",
      description:
        "Attached to the daughter drone, the mechanism features dual grippers with 2 DOF for mast grabbing and module replacement. Made with lightweight structural materials. Uses linear actuators and sliding grippers to extract and insert the communication module with precision during flight.",
      image: "/assets/tasks/gripper.png"
    }
  ]

  const todo = [
    {
      title: "Wind Tunnel Testing",
      description:
        "Evaluate aerodynamic stability of both drones and validate control algorithms in simulated airflows.",
      image: "/assets/tasks/mothership.png"
    },
    {
      title: "Gripper Sensor Calibration",
      description:
        "Improve detection accuracy and feedback latency of contact sensors during mast grabbing.",
      image: "/assets/tasks/gripper.png"
    },
    {
      title: "Module Auto-Lock Mechanism",
      description:
        "Design passive locking system for secure module placement during final docking phase.",
      image: "/assets/tasks/daughterdrone.png"
    }
  ]

  const inProgress = [
    {
      title: "Realtime Localisation System",
      description:
        "Combining GPS and vision-based tracking for precise mid-air hovering and mast alignment.",
      image: "/assets/tasks/daughterdrone.png"
    },
    {
      title: "Battery Optimization Analysis",
      description:
        "Testing battery configurations under load to improve flight endurance of Mothership and Daughter Drone.",
      image: "/assets/tasks/mothership.png"
    },
    {
      title: "Gripping Fail-safe Protocol",
      description:
        "Incorporating fallback strategies for mast grabbing failure — includes remote override and retry loop.",
      image: "/assets/tasks/gripper.png"
    }
  ]

  return (
    <div className="min-h-screen ml-16 md:ml-64 bg-[#0a0a0a] text-white px-4 sm:px-6 md:px-8 py-8 space-y-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-400">Mission Tasks</h2>
      <Section title="Completed" data={completed} />
      <Section title="To Do" data={todo} />
      <Section title="In Progress" data={inProgress} />
    </div>
  )
}

function Section({ title, data }) {
  return (
    <div>
      <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-400 text-center">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {data.map((task, index) => (
          <TaskCard
            key={index}
            title={task.title}
            description={task.description}
            image={task.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Tasks







