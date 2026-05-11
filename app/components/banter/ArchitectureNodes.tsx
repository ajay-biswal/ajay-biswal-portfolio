"use client";

import React, { memo } from "react";
import { Handle, Position, type Node } from "@xyflow/react";
import { Network, Server, Database, Zap, Users, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Custom React Flow nodes for Banter architecture visualization
 * Premium cinematic engineering nodes with dark glass aesthetic
 */

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  "client": MessageSquare,
  "gateway": Network,
  "redis": Zap,
  "service": Server,
  "database": Database,
  "presence": Users,
  "notification": Zap,
};

// Primary nodes get stronger styling
const primaryNodes = ["client", "gateway", "redis", "service", "database"];

interface ArchitectureNodeData {
  label: string;
  description: string;
  nodeType: string;
  statusColor: string;
}

/**
 * Premium Architecture Node Component
 * Dark glass surface with subtle glow and status indicators
 */
export const ArchitectureNode = memo(({ data }: { data: { label: string; description: string; nodeType: string; statusColor: string } }) => {
  const { label, description, nodeType, statusColor } = data;
  const isPrimary = primaryNodes.includes(nodeType);
  const Icon = iconMap[nodeType] || Server;

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
    >
      <div
        className={`rounded-2xl px-8 py-6 ${isPrimary ? "min-w-[280px]" : "min-w-[260px]"}`}
        style={{
          backgroundColor: "rgba(11, 17, 32, 0.7)",
          border: `1px solid ${isPrimary ? "rgba(6, 182, 212, 0.3)" : "rgba(148, 163, 184, 0.15)"}`,
          backdropFilter: "blur(16px)",
          boxShadow: isPrimary
            ? "0 0 40px rgba(6, 182, 212, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.05)"
            : "0 0 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.03)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Status indicator */}
        <div className="flex items-start gap-4">
          <div className="relative mt-1">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: statusColor }}
            />
            <div
              className="absolute inset-0 w-3 h-3 rounded-full animate-ping"
              style={{ backgroundColor: statusColor, opacity: 0.5 }}
            />
          </div>

          {/* Icon */}
          <div
            className="p-2.5 rounded-xl"
            style={{
              backgroundColor: `${statusColor}15`,
            }}
          >
            <Icon size={20} style={{ color: statusColor }} />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div
              className="text-lg font-bold mb-1"
              style={{ color: "#f8fafc" }}
            >
              {label}
            </div>
            <div
              className="text-sm"
              style={{ color: "#94a3b8" }}
            >
              {description}
            </div>
            
            {/* Service metadata */}
            {isPrimary && (
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mt-3 text-xs font-medium"
                style={{
                  backgroundColor: "rgba(6, 182, 212, 0.08)",
                  color: "rgba(6, 182, 212, 0.9)",
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: "rgba(6, 182, 212, 0.9)",
                  }}
                />
                Active Service
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Connection handles */}
      <Handle
        type="target"
        position={Position.Top}
        style={{
          width: "8px",
          height: "8px",
          backgroundColor: statusColor,
          border: "2px solid rgba(11, 17, 32, 0.9)",
        }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        style={{
          width: "8px",
          height: "8px",
          backgroundColor: statusColor,
          border: "2px solid rgba(11, 17, 32, 0.9)",
        }}
      />
    </motion.div>
  );
});

ArchitectureNode.displayName = "ArchitectureNode";
