const tasks = [
  {
    title: "The Mothership",
    description: "The mothership is the primary drone that carries the secondary daughter drone. It is an autonomous 25 Kg hexacopter with a cage-like structure. It deploys the daughter drone at the mast and returns home in 9 minutes.",
    assignedTo: "Mobirise",
    dueDate: "—",
    status: "completed",
    image: "/assets/mothership.png"
  },
  {
    title: "Daughter Drone",
    description: "A 25 kg autonomous coaxial-octocopter capable of launching mid-air. Equipped with Pixhawk 4, Intel Realsense D435, Intel NUC, GPS, and a robotic arm to replace the mast’s communication module.",
    assignedTo: "Mobirise",
    dueDate: "—",
    status: "completed",
    image: "/assets/daughter_drone.png"
  },
  {
    title: "Gripping Mechanism",
    description: "Attached to the daughter drone for module replacement. Contains two grippers with 2 degrees of freedom. Uses light materials, linear actuators, and gears to improve precision and reduce motion transfer.",
    assignedTo: "Mobirise",
    dueDate: "—",
    status: "completed",
    image: "/assets/gripping_mechanism.png"
  },
  {
    title: "Sensor Calibration",
    description: "Calibrating IMUs and barometers for flight accuracy.",
    assignedTo: "Team Lead",
    dueDate: "2025-07-25",
    status: "inprogress"
  },
  {
    title: "Testing Launchpad",
    description: "Simulating mid-air deployment system for daughter drone.",
    assignedTo: "Mech Team",
    dueDate: "2025-07-27",
    status: "inprogress"
  },
  {
    title: "Write Documentation",
    description: "Prepare detailed technical documentation for system architecture.",
    assignedTo: "Docs Team",
    dueDate: "2025-07-30",
    status: "todo"
  },
  {
    title: "Optimize Battery Usage",
    description: "Analyze flight logs and tune power draw during critical phases.",
    assignedTo: "Power Team",
    dueDate: "2025-08-02",
    status: "todo"
  }
];

export default tasks;
