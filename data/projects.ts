export interface Project {
  name: string;
  category: string;
  subtitle: string;
  description: string;
  challenges: Array<{ title: string; description: string }>;
  metrics: Array<{ value: string; label: string }>;
  tech: string[];
  github?: string;
  live?: string;
  preview?: string;
}

export const projects: Project[] = [
  {
    name: "Banter",
    category: "Distributed Real-Time Messaging Infrastructure",
    subtitle: "Production-grade websocket orchestration platform engineered for realtime communication at scale.",
    description: "Architected a distributed websocket orchestration platform handling 10K+ concurrent connections with Redis Pub/Sub event propagation, achieving sub-100ms message delivery across horizontally scaled Socket.IO instances. Production-grade infrastructure designed for high-availability realtime communication.",
    challenges: [
      {
        title: "Distributed State Consistency",
        description: "Engineered presence synchronization and read receipt orchestration across multiple websocket nodes with eventual consistency guarantees.",
      },
      {
        title: "Horizontal Scaling Architecture",
        description: "Implemented Redis Pub/Sub event propagation to distribute socket connections across multiple server instances without session loss.",
      },
      {
        title: "Optimistic UI with Rollback",
        description: "Designed instant user feedback mechanisms with intelligent delivery acknowledgment and automatic state reconciliation on failure.",
      },
    ],
    metrics: [
      { value: "<100ms", label: "Realtime Message Delivery" },
      { value: "99.9%", label: "Socket Availability" },
      { value: "10K+", label: "Concurrent Event Handling" },
    ],
    tech: ["Node.js", "Socket.IO", "Redis", "MongoDB", "TypeScript", "Express", "React", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    name: "WonderFest",
    category: "Event Planning Ecosystem",
    subtitle: "Designed and built a vendor discovery platform with optimized search infrastructure, complex budgeting engine, and scalable authentication architecture serving 500+ vendors.",
    description: "Architected a full-stack event planning platform featuring a vendor marketplace with advanced search workflows, real-time budgeting calculations, and JWT-based role authentication. Scaled to handle 500+ vendor listings with sub-2-second search response times.",
    challenges: [
      {
        title: "Search Infrastructure Optimization",
        description: "Designed efficient filtering and ranking algorithms for vendor discovery with complex multi-criteria matching.",
      },
      {
        title: "Real-Time Budgeting Engine",
        description: "Built complex calculation infrastructure handling dynamic category allocations, expense tracking, and real-time budget reconciliation.",
      },
      {
        title: "Role-Based Access Architecture",
        description: "Implemented secure JWT authentication with granular permission controls distinguishing vendor and planner access patterns.",
      },
    ],
    metrics: [
      { value: "500+", label: "Vendor Listings" },
      { value: "<2s", label: "Search Response Time" },
      { value: "99.8%", label: "Platform Uptime" },
    ],
    tech: ["MERN Stack", "JWT", "MongoDB Atlas", "Tailwind CSS", "Node.js", "React"],
    github: "#",
    live: "#",
  },
  {
    name: "Realtime Ride Coordination System",
    category: "Real-Time Mobility Platform",
    subtitle: "WebSocket-powered GPS synchronization infrastructure enabling sub-200ms location streaming with intelligent proximity-based driver matching.",
    description: "Architected a real-time mobility platform with continuous GPS location streaming, WebSocket event orchestration, and proximity-based driver-passenger matching algorithm. Engineered for sub-200ms update latency with 99.5% match success rate across distributed socket connections.",
    challenges: [
      {
        title: "High-Frequency Location Streaming",
        description: "Engineered WebSocket infrastructure handling continuous GPS updates with sub-200ms latency and minimal bandwidth overhead.",
      },
      {
        title: "Proximity-Based Matching Algorithm",
        description: "Designed real-time driver availability synchronization with geospatial queries and intelligent load distribution.",
      },
      {
        title: "Distributed Event Orchestration",
        description: "Coordinated complex state synchronization between driver location, passenger requests, and payment processing across multiple socket channels.",
      },
    ],
    metrics: [
      { value: "<200ms", label: "GPS Update Latency" },
      { value: "99.5%", label: "Match Success Rate" },
      { value: "Real-Time", label: "Payment Processing" },
    ],
    tech: ["React", "Node.js", "MongoDB", "WebSockets", "Stripe", "Google Maps API"],
    github: "#",
    live: "#",
  },
];
