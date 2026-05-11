"use client";

/**
 * ArchitectureVisualization - Full Immersive Distributed System Topology
 * PHASE 4A FIX: Full-width React Flow canvas with cinematic spacing
 * React Flow occupies ENTIRE section - NO nested containers
 */

import React, { useCallback, useMemo } from "react";
import {
  ReactFlow,
  Background,
  type Node,
  type Edge,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { ArchitectureNode } from "./ArchitectureNodes";

/**
 * Full Immersive Architecture Visualization
 * React Flow fills the ENTIRE 1100px container
 */

// Node types registry
const nodeTypes = {
  architectureNode: ArchitectureNode,
};

// Cinematic node positioning - original spacing
const initialNodes: Node[] = [
  {
    id: "client",
    type: "architectureNode",
    position: { x: 900, y: 80 },
    data: {
      label: "Client Applications",
      description: "React + TypeScript UI",
      nodeType: "client",
      statusColor: "rgba(6, 182, 212, 0.9)",
    },
  },
  {
    id: "gateway",
    type: "architectureNode",
    position: { x: 900, y: 260 },
    data: {
      label: "Socket Gateway",
      description: "WebSocket Orchestration",
      nodeType: "gateway",
      statusColor: "rgba(168, 85, 247, 0.9)",
    },
  },
  {
    id: "redis",
    type: "architectureNode",
    position: { x: 500, y: 500 },
    data: {
      label: "Redis Pub/Sub",
      description: "Message Broker Layer",
      nodeType: "redis",
      statusColor: "rgba(6, 182, 212, 0.9)",
    },
  },
  {
    id: "message",
    type: "architectureNode",
    position: { x: 1300, y: 500 },
    data: {
      label: "Message Service",
      description: "Event Processing Engine",
      nodeType: "message",
      statusColor: "rgba(168, 85, 247, 0.9)",
    },
  },
  {
    id: "presence",
    type: "architectureNode",
    position: { x: 300, y: 700 },
    data: {
      label: "Presence Engine",
      description: "Realtime Status Sync",
      nodeType: "presence",
      statusColor: "rgba(6, 182, 212, 0.9)",
    },
  },
  {
    id: "notification",
    type: "architectureNode",
    position: { x: 1500, y: 700 },
    data: {
      label: "Notification Queue",
      description: "Async Task Processing",
      nodeType: "notification",
      statusColor: "rgba(168, 85, 247, 0.9)",
    },
  },
  {
    id: "database",
    type: "architectureNode",
    position: { x: 900, y: 900 },
    data: {
      label: "MongoDB",
      description: "Message Persistence",
      nodeType: "database",
      statusColor: "rgba(6, 182, 212, 0.9)",
    },
  },
];

// Animated edges with flowing packet simulation
const initialEdges: Edge[] = [
  {
    id: "e-client-gateway",
    source: "client",
    target: "gateway",
    type: "smoothstep",
    animated: true,
    style: { 
      stroke: "rgba(6, 182, 212, 0.4)", 
      strokeWidth: 3, 
      strokeDasharray: "8 8",
      animation: "edgeFlow 2s linear infinite",
    },
    markerEnd: { type: MarkerType.ArrowClosed, color: "rgba(6, 182, 212, 0.7)", width: 20, height: 20 },
  },
  {
    id: "e-gateway-redis",
    source: "gateway",
    target: "redis",
    type: "smoothstep",
    animated: true,
    style: { 
      stroke: "rgba(168, 85, 247, 0.4)", 
      strokeWidth: 3, 
      strokeDasharray: "8 8",
      animation: "edgeFlow 2.5s linear infinite",
    },
    markerEnd: { type: MarkerType.ArrowClosed, color: "rgba(168, 85, 247, 0.7)", width: 20, height: 20 },
  },
  {
    id: "e-gateway-message",
    source: "gateway",
    target: "message",
    type: "smoothstep",
    animated: true,
    style: { 
      stroke: "rgba(6, 182, 212, 0.4)", 
      strokeWidth: 3, 
      strokeDasharray: "8 8",
      animation: "edgeFlow 2.2s linear infinite",
    },
    markerEnd: { type: MarkerType.ArrowClosed, color: "rgba(6, 182, 212, 0.7)", width: 20, height: 20 },
  },
  {
    id: "e-redis-presence",
    source: "redis",
    target: "presence",
    type: "smoothstep",
    animated: true,
    style: { 
      stroke: "rgba(6, 182, 212, 0.4)", 
      strokeWidth: 3, 
      strokeDasharray: "8 8",
      animation: "edgeFlow 2.8s linear infinite",
    },
    markerEnd: { type: MarkerType.ArrowClosed, color: "rgba(6, 182, 212, 0.7)", width: 20, height: 20 },
  },
  {
    id: "e-message-notification",
    source: "message",
    target: "notification",
    type: "smoothstep",
    animated: true,
    style: { 
      stroke: "rgba(168, 85, 247, 0.4)", 
      strokeWidth: 3, 
      strokeDasharray: "8 8",
      animation: "edgeFlow 2.4s linear infinite",
    },
    markerEnd: { type: MarkerType.ArrowClosed, color: "rgba(168, 85, 247, 0.7)", width: 20, height: 20 },
  },
  {
    id: "e-presence-database",
    source: "presence",
    target: "database",
    type: "smoothstep",
    animated: true,
    style: { 
      stroke: "rgba(6, 182, 212, 0.4)", 
      strokeWidth: 3, 
      strokeDasharray: "8 8",
      animation: "edgeFlow 3s linear infinite",
    },
    markerEnd: { type: MarkerType.ArrowClosed, color: "rgba(6, 182, 212, 0.7)", width: 20, height: 20 },
  },
  {
    id: "e-notification-database",
    source: "notification",
    target: "database",
    type: "smoothstep",
    animated: true,
    style: { 
      stroke: "rgba(168, 85, 247, 0.4)", 
      strokeWidth: 3, 
      strokeDasharray: "8 8",
      animation: "edgeFlow 2.6s linear infinite",
    },
    markerEnd: { type: MarkerType.ArrowClosed, color: "rgba(168, 85, 247, 0.7)", width: 20, height: 20 },
  },
];

export function ArchitectureVisualization() {
  // Edge styles with enhanced animation
  const edges = useMemo(
    () =>
      initialEdges.map((edge) => ({
        ...edge,
        style: {
          ...edge.style,
          strokeDasharray: "8 8",
        },
      })),
    []
  );

  return (
    <div className="absolute inset-0">
      <ReactFlow
        nodes={initialNodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{
          padding: 0.05,
          minZoom: 0.5,
          maxZoom: 1,
        }}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnDoubleClick={false}
        panOnScroll={false}
        preventScrolling={true}
      >
        {/* Background grid */}
        <Background
          color="rgba(6, 182, 212, 0.03)"
          gap={40}
          size={1}
        />
      </ReactFlow>
    </div>
  );
}
