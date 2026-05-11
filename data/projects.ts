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
    description: "Scalable websocket orchestration platform with event-driven architecture, Redis-backed horizontal scaling, and low-latency realtime synchronization. Engineered for production-grade distributed communication.",
    challenges: [
      {
        title: "Realtime State Synchronization",
        description: "Maintaining consistent presence and read receipt state across distributed websocket instances.",
      },
      {
        title: "Horizontal Scaling",
        description: "Scaling Socket.IO connections using Redis Pub/Sub event propagation across multiple nodes.",
      },
      {
        title: "Optimistic UI Messaging",
        description: "Providing instant user feedback while handling delivery acknowledgement rollback.",
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
    subtitle: "Engineered a vendor discovery ecosystem with optimized search workflows and scalable authentication infrastructure.",
    description: "Full-stack wedding planning platform with vendor marketplace architecture, budgeting engine, and comprehensive user authentication system. Built for intuitive UX and scalable vendor discovery.",
    challenges: [
      {
        title: "Vendor Discovery Workflows",
        description: "Optimized search and filtering infrastructure for efficient vendor matching and comparison.",
      },
      {
        title: "Budgeting Engine Architecture",
        description: "Real-time budget calculations with complex category allocations and expense tracking.",
      },
      {
        title: "Authentication & Authorization",
        description: "Secure JWT-based authentication with role-based access control for vendors and planners.",
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
    subtitle: "WebSocket-powered GPS synchronization with low-latency driver-passenger matching infrastructure.",
    description: "Ride booking application with real-time GPS tracking, live ride status updates, integrated payments, and intelligent driver-passenger matching. Engineered for sub-200ms location streaming.",
    challenges: [
      {
        title: "Realtime GPS Streaming",
        description: "Continuous location updates with WebSocket streaming under 200ms latency.",
      },
      {
        title: "Low-Latency Driver Matching",
        description: "Proximity-based matching algorithm with real-time availability synchronization.",
      },
      {
        title: "Socket Event Synchronization",
        description: "Coordinated state management between driver, passenger, and payment systems.",
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
