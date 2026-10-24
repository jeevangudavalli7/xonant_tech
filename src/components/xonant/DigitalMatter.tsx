"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * XONANT / DIGITAL MATTER
 *
 * Visual direction:
 * - lightweight futuristic wireframe shell
 * - dimensional orbital rings
 * - faceted glowing energy core
 * - subtle internal network
 * - atmospheric particles
 * - soft fake bloom without post-processing
 */

export const DIGITAL_MATTER_CONFIG = {
  spinSpeed: 0.075,
  mouseEase: 0.035,
  scrollMultiplier: 0.18,

  shellColor: 0x9cff22,
  coreColor: 0xb4ff39,

  shellOpacity: 0.42,
  innerLineOpacity: 0.16,

  coreSize: 0.58,
  particleCount: 90,
};

interface DigitalMatterProps {
  className?: string;
  variant?: "hero" | "about" | "cta";
}

const DigitalMatter: React.FC<DigitalMatterProps> = ({
  className,
  variant = "hero",
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // =========================================================
    // SCENE
    // =========================================================

    const scene = new THREE.Scene();

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const isMobile = window.innerWidth < 768;

    const camera = new THREE.PerspectiveCamera(
      isMobile ? 48 : 40,
      width / Math.max(height, 1),
      0.1,
      100
    );

    camera.position.set(
      variant === "about" ? 0 : 0.12,
      0,
      variant === "about" ? 5.2 : 5.0
    );

    // Slightly below center gives the sculpture more "hero" presence.
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2)
    );

    renderer.setSize(width, height);

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    mount.appendChild(renderer.domElement);

    // =========================================================
    // MASTER OBJECT
    // =========================================================

    const sculpture = new THREE.Group();
    scene.add(sculpture);

    // =========================================================
    // OUTER WIREFRAME SHELL
    // =========================================================

    const shellGeometry = new THREE.IcosahedronGeometry(1.72, 1);

    const shellEdges = new THREE.EdgesGeometry(shellGeometry);

    const shellMaterial = new THREE.LineBasicMaterial({
      color: DIGITAL_MATTER_CONFIG.shellColor,
      transparent: true,
      opacity: DIGITAL_MATTER_CONFIG.shellOpacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const shell = new THREE.LineSegments(shellEdges, shellMaterial);

    sculpture.add(shell);

    // A second slightly smaller geometry gives the object real depth.
    const innerGeometry = new THREE.IcosahedronGeometry(1.48, 1);
    const innerEdges = new THREE.EdgesGeometry(innerGeometry);

    const innerMaterial = new THREE.LineBasicMaterial({
      color: DIGITAL_MATTER_CONFIG.shellColor,
      transparent: true,
      opacity: DIGITAL_MATTER_CONFIG.innerLineOpacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const innerShell = new THREE.LineSegments(innerEdges, innerMaterial);

    innerShell.rotation.set(0.2, 0.35, -0.1);

    sculpture.add(innerShell);

    // =========================================================
    // SUBTLE LATITUDE / LONGITUDE STYLE LINES
    // =========================================================

    const globeLines = new THREE.Group();
    sculpture.add(globeLines);

    const globeLineMaterial = new THREE.MeshBasicMaterial({
      color: DIGITAL_MATTER_CONFIG.shellColor,
      transparent: true,
      opacity: 0.09,
      wireframe: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const globeSphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.54, 16, 10),
      globeLineMaterial
    );

    globeSphere.scale.set(1.0, 0.95, 0.92);

    globeLines.add(globeSphere);

    // =========================================================
    // ORBITAL RINGS
    // =========================================================

    const orbitGroup = new THREE.Group();
    sculpture.add(orbitGroup);

    const orbitMaterial = new THREE.MeshBasicMaterial({
      color: 0xbfc5ca,
      transparent: true,
      opacity: 0.38,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const orbitMaterialDim = new THREE.MeshBasicMaterial({
      color: 0x767b7e,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    // Main horizontal orbit.
    const orbit1 = new THREE.Mesh(
      new THREE.TorusGeometry(1.43, 0.012, 8, 160),
      orbitMaterial
    );

    orbit1.rotation.x = Math.PI / 2;

    orbitGroup.add(orbit1);

    // Tilted orbit.
    const orbit2 = new THREE.Mesh(
      new THREE.TorusGeometry(1.48, 0.009, 8, 160),
      orbitMaterial
    );

    orbit2.rotation.x = 0.92;
    orbit2.rotation.z = -0.42;

    orbitGroup.add(orbit2);

    // Another orbit in a different plane.
    const orbit3 = new THREE.Mesh(
      new THREE.TorusGeometry(1.35, 0.007, 8, 160),
      orbitMaterialDim
    );

    orbit3.rotation.y = Math.PI / 2;
    orbit3.rotation.z = 0.55;

    orbitGroup.add(orbit3);

    // Smaller internal orbit.
    const orbit4 = new THREE.Mesh(
      new THREE.TorusGeometry(0.93, 0.006, 8, 128),
      orbitMaterialDim
    );

    orbit4.rotation.x = 1.15;
    orbit4.rotation.y = 0.5;

    orbitGroup.add(orbit4);

    // =========================================================
    // ENERGY CORE
    // =========================================================

    const coreGroup = new THREE.Group();
    sculpture.add(coreGroup);

    // Main faceted core.
    const coreGeometry = new THREE.IcosahedronGeometry(
      DIGITAL_MATTER_CONFIG.coreSize,
      1
    );

    const coreMaterial = new THREE.MeshStandardMaterial({
      color: DIGITAL_MATTER_CONFIG.coreColor,
      emissive: DIGITAL_MATTER_CONFIG.coreColor,
      emissiveIntensity: 1.8,
      roughness: 0.2,
      metalness: 0.05,
      flatShading: true,
    });

    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    coreGroup.add(core);

    // Inner bright diamond-like nucleus.
    const nucleusGeometry = new THREE.OctahedronGeometry(0.23, 0);

    const nucleusMaterial = new THREE.MeshBasicMaterial({
      color: 0xe8ffb5,
      transparent: true,
      opacity: 0.92,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const nucleus = new THREE.Mesh(
      nucleusGeometry,
      nucleusMaterial
    );

    coreGroup.add(nucleus);

    // =========================================================
    // FAKE BLOOM / CORE AURA
    // =========================================================

    const auraGeometry = new THREE.SphereGeometry(0.92, 32, 32);

    const auraMaterial = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,

      uniforms: {
        uColor: {
          value: new THREE.Color(DIGITAL_MATTER_CONFIG.coreColor),
        },
      },

      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vWorldPosition;

        void main() {
          vNormal = normalize(normalMatrix * normal);

          vec4 worldPosition =
            modelMatrix * vec4(position, 1.0);

          vWorldPosition = worldPosition.xyz;

          gl_Position =
            projectionMatrix *
            viewMatrix *
            worldPosition;
        }
      `,

      fragmentShader: `
        uniform vec3 uColor;

        varying vec3 vNormal;
        varying vec3 vWorldPosition;

        void main() {
          vec3 viewDirection =
            normalize(cameraPosition - vWorldPosition);

          float fresnel =
            pow(
              1.0 - abs(dot(viewDirection, vNormal)),
              2.2
            );

          float glow = fresnel * 0.75;

          gl_FragColor = vec4(
            uColor,
            glow
          );
        }
      `,
    });

    const aura = new THREE.Mesh(
      auraGeometry,
      auraMaterial
    );

    coreGroup.add(aura);

    // =========================================================
    // INTERNAL ENERGY NODES
    // =========================================================

    const nodesGroup = new THREE.Group();
    sculpture.add(nodesGroup);

    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: DIGITAL_MATTER_CONFIG.coreColor,
      transparent: true,
      opacity: 0.72,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const nodePositions = [
      [0.82, 0.64, 0.5],
      [-0.9, 0.42, 0.65],
      [0.72, -0.8, 0.25],
      [-0.75, -0.72, -0.25],
      [0.15, 1.02, -0.55],
      [0.62, 0.12, -1.0],
      [-0.35, -0.2, 1.05],
      [1.03, -0.05, 0.1],
    ];

    const nodeGeometry = new THREE.OctahedronGeometry(
      0.06,
      0
    );

    nodePositions.forEach(([x, y, z]) => {
      const node = new THREE.Mesh(
        nodeGeometry,
        nodeMaterial
      );

      node.position.set(x, y, z);

      const scale =
        0.8 + Math.random() * 0.9;

      node.scale.setScalar(scale);

      nodesGroup.add(node);
    });

    // =========================================================
    // INTERNAL CONNECTION LINES
    // =========================================================

    const networkGroup = new THREE.Group();
    sculpture.add(networkGroup);

    const networkMaterial = new THREE.LineBasicMaterial({
      color: DIGITAL_MATTER_CONFIG.shellColor,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const networkPoints: THREE.Vector3[] =
      nodePositions.map(([x, y, z]) =>
        new THREE.Vector3(x, y, z)
      );

    // Hand-picked connections make the network feel deliberate,
    // rather than like random spaghetti.
    const connections = [
      [0, 1],
      [0, 2],
      [0, 4],
      [0, 5],
      [1, 3],
      [1, 4],
      [1, 6],
      [2, 3],
      [2, 5],
      [2, 7],
      [3, 6],
      [4, 5],
      [4, 6],
      [5, 7],
      [6, 7],
    ];

    connections.forEach(([a, b]) => {
      const geometry =
        new THREE.BufferGeometry().setFromPoints([
          networkPoints[a],
          networkPoints[b],
        ]);

      const line = new THREE.Line(
        geometry,
        networkMaterial
      );

      networkGroup.add(line);
    });

    // =========================================================
    // PARTICLES / FLOATING ENERGY
    // =========================================================

    const particleCount =
      isMobile
        ? 45
        : DIGITAL_MATTER_CONFIG.particleCount;

    const particlePositions = new Float32Array(
      particleCount * 3
    );

    const particleSizes = new Float32Array(
      particleCount
    );

    for (let i = 0; i < particleCount; i++) {
      const theta =
        Math.random() * Math.PI * 2;

      const phi =
        Math.acos(
          THREE.MathUtils.randFloatSpread(2)
        );

      const radius =
        0.35 + Math.random() * 1.4;

      const x =
        radius *
        Math.sin(phi) *
        Math.cos(theta);

      const y =
        radius *
        Math.sin(phi) *
        Math.sin(theta);

      const z =
        radius *
        Math.cos(phi);

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      particleSizes[i] =
        0.025 + Math.random() * 0.045;
    }

    const particleGeometry =
      new THREE.BufferGeometry();

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        particlePositions,
        3
      )
    );

    particleGeometry.setAttribute(
      "size",
      new THREE.BufferAttribute(
        particleSizes,
        1
      )
    );

    const particleMaterial =
      new THREE.PointsMaterial({
        color: 0xd8ff9a,
        size: 0.035,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      });

    const particles = new THREE.Points(
      particleGeometry,
      particleMaterial
    );

    sculpture.add(particles);

    // =========================================================
    // SMALL GLOWING LIGHTS
    // =========================================================

    const lightsGroup = new THREE.Group();
    sculpture.add(lightsGroup);

    const createGlow = (
      size: number,
      opacity: number,
      color: number
    ) => {
      const geometry =
        new THREE.SphereGeometry(
          size,
          16,
          16
        );

      const material =
        new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });

      return new THREE.Mesh(
        geometry,
        material
      );
    };

    const glowA =
      createGlow(0.045, 0.95, 0xffffff);

    glowA.position.set(
      0.9,
      0.75,
      0.65
    );

    lightsGroup.add(glowA);

    const glowAHalo =
      createGlow(0.16, 0.12, 0xffffff);

    glowAHalo.position.copy(
      glowA.position
    );

    lightsGroup.add(glowAHalo);

    const glowB =
      createGlow(0.04, 0.9, 0x7dd7ff);

    glowB.position.set(
      -0.95,
      -0.62,
      0.62
    );

    lightsGroup.add(glowB);

    const glowBhalo =
      createGlow(0.14, 0.1, 0x5ab8ff);

    glowBhalo.position.copy(
      glowB.position
    );

    lightsGroup.add(glowBhalo);

    // =========================================================
    // LIGHTING
    // =========================================================

    const ambient =
      new THREE.AmbientLight(
        0xffffff,
        0.12
      );

    scene.add(ambient);

    const key =
      new THREE.PointLight(
        0xffffff,
        3.0,
        9
      );

    key.position.set(
      3,
      3,
      4
    );

    scene.add(key);

    const lime =
      new THREE.PointLight(
        DIGITAL_MATTER_CONFIG.coreColor,
        4.0,
        7
      );

    lime.position.set(
      -2.5,
      0.2,
      2.5
    );

    scene.add(lime);

    const blue =
      new THREE.PointLight(
        0x4d86ff,
        1.4,
        8
      );

    blue.position.set(
      2,
      -2,
      -2
    );

    scene.add(blue);

    // =========================================================
    // MOUSE / SCROLL INTERACTION
    // =========================================================

    const mouse = {
      x: 0,
      y: 0,
    };

    let scrollY = 0;

    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (
      event: MouseEvent
    ) => {
      mouse.x =
        (event.clientX /
          window.innerWidth) *
          2 -
        1;

      mouse.y =
        -(
          (event.clientY /
            window.innerHeight) *
            2 -
          1
        );
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener(
      "mousemove",
      onMouseMove,
      { passive: true }
    );

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );

    // =========================================================
    // ANIMATION
    // =========================================================

    const clock =
      new THREE.Clock();

    let frameId = 0;

    const animate = () => {
      frameId =
        requestAnimationFrame(
          animate
        );

      const t =
        clock.getElapsedTime();

      if (!isReducedMotion) {
        // Smooth cursor movement.
        targetY +=
          (mouse.x * 0.35 -
            targetY) *
          DIGITAL_MATTER_CONFIG.mouseEase;

        targetX +=
          (mouse.y * 0.25 -
            targetX) *
          DIGITAL_MATTER_CONFIG.mouseEase;

        // Main object motion.
        sculpture.rotation.y =
          t *
            DIGITAL_MATTER_CONFIG.spinSpeed +
          targetY;

        sculpture.rotation.x =
          targetX +
          Math.sin(t * 0.3) *
            0.025;

        sculpture.position.y =
          Math.sin(t * 0.55) *
          0.025;

        // Very subtle scroll reaction.
        const scrollInfluence =
          Math.min(
            scrollY / 1800,
            1
          );

        sculpture.rotation.z =
          scrollInfluence *
          DIGITAL_MATTER_CONFIG
            .scrollMultiplier;

        // Shell counter rotation.
        shell.rotation.y =
          -t * 0.025;

        innerShell.rotation.y =
          t * 0.045;

        globeSphere.rotation.y =
          -t * 0.02;

        // Orbits move independently.
        orbit1.rotation.z =
          t * 0.10;

        orbit2.rotation.y =
          -t * 0.13;

        orbit2.rotation.z =
          -0.42 +
          Math.sin(t * 0.4) *
            0.08;

        orbit3.rotation.x =
          t * 0.08;

        orbit4.rotation.y =
          -t * 0.18;

        // Core breathing.
        const pulse =
          1 +
          Math.sin(t * 1.8) *
            0.045;

        core.scale.setScalar(
          pulse
        );

        nucleus.rotation.x =
          t * 0.65;

        nucleus.rotation.y =
          -t * 0.5;

        aura.scale.setScalar(
          1 +
            Math.sin(t * 1.4) *
              0.06
        );

        // Particle cloud.
        particles.rotation.y =
          t * 0.025;

        particles.rotation.x =
          Math.sin(t * 0.15) *
          0.05;

        // Node motion.
        nodesGroup.rotation.y =
          t * 0.035;

        nodesGroup.rotation.x =
          Math.sin(t * 0.2) *
          0.035;

        networkGroup.rotation.y =
          t * 0.035;

        networkGroup.rotation.x =
          Math.sin(t * 0.2) *
          0.035;

        // Light intensity breathing.
        lime.intensity =
          3.4 +
          Math.sin(t * 1.6) *
            0.7;
      }

      renderer.render(
        scene,
        camera
      );
    };

    animate();

    // =========================================================
    // RESIZE
    // =========================================================

    const onResize = () => {
      if (!mount) return;

      const w =
        mount.clientWidth;

      const h =
        mount.clientHeight;

      if (!w || !h) return;

      camera.aspect =
        w / h;

      camera.updateProjectionMatrix();

      renderer.setSize(
        w,
        h
      );
    };

    window.addEventListener(
      "resize",
      onResize
    );

    // =========================================================
    // CLEANUP
    // =========================================================

    return () => {
      cancelAnimationFrame(
        frameId
      );

      window.removeEventListener(
        "mousemove",
        onMouseMove
      );

      window.removeEventListener(
        "scroll",
        onScroll
      );

      window.removeEventListener(
        "resize",
        onResize
      );

      // Dispose geometries/materials.
      shellGeometry.dispose();
      shellEdges.dispose();
      shellMaterial.dispose();

      innerGeometry.dispose();
      innerEdges.dispose();
      innerMaterial.dispose();

      globeSphere.geometry.dispose();
      globeLineMaterial.dispose();

      orbit1.geometry.dispose();
      orbit2.geometry.dispose();
      orbit3.geometry.dispose();
      orbit4.geometry.dispose();

      orbitMaterial.dispose();
      orbitMaterialDim.dispose();

      coreGeometry.dispose();
      coreMaterial.dispose();

      nucleusGeometry.dispose();
      nucleusMaterial.dispose();

      auraGeometry.dispose();
      auraMaterial.dispose();

      nodeGeometry.dispose();
      nodeMaterial.dispose();

      networkMaterial.dispose();

      particleGeometry.dispose();
      particleMaterial.dispose();

      lightsGroup.children.forEach(
        (child) => {
          if (
            child instanceof THREE.Mesh
          ) {
            child.geometry.dispose();

            if (
              Array.isArray(
                child.material
              )
            ) {
              child.material.forEach(
                (material) =>
                  material.dispose()
              );
            } else {
              child.material.dispose();
            }
          }
        }
      );

      renderer.dispose();

      if (
        mount.contains(
          renderer.domElement
        )
      ) {
        mount.removeChild(
          renderer.domElement
        );
      }
    };
  }, [variant, isReducedMotion]);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[620px] max-w-full overflow-hidden select-none pointer-events-none ${
        className || ""
      }`}
      style={{
        touchAction: "none",
      }}
    />
  );
};

export const XonantCore3D = DigitalMatter;

export { DigitalMatter };

export default DigitalMatter;