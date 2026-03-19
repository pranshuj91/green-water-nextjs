"use client"


import React, { useEffect, useRef } from 'react';

const LogisticsAnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Mobile detection
    const isMobile = window.innerWidth <= 768;
    
    // Hide animation completely on mobile
    if (isMobile) {
      return;
    }
    
    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Desktop full animation
    const allCountries = ['spain', 'uae', 'india', 'usa', 'china', 'singapore', 'brazil'] as const;
    
    // Ship objects with different types and behaviors
    const ships: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      type: 'cargo' | 'container' | 'tanker' | 'plane';
      targetX: number;
      targetY: number;
      origin: 'spain' | 'uae' | 'india' | 'usa' | 'china' | 'singapore' | 'brazil';
      destination: 'spain' | 'uae' | 'india' | 'usa' | 'china' | 'singapore' | 'brazil';
      progress: number; // 0 to 1, how far along the journey
    }[] = [];
    
    // Stars/distant lights for night sky effect - concentrated at bottom and sides
    const stars: {
      x: number;
      y: number;
      radius: number;
      opacity: number;
      blinkSpeed: number;
    }[] = [];
    
    // Hub positions based on global map coordinates - with 50px top padding and increased horizontal spread
    const getSpainPosition = () => ({ x: canvas.width * 0.45, y: canvas.height * 0.68 + 50 });
    const getUAEPosition = () => ({ x: canvas.width * 0.67, y: canvas.height * 0.65 + 50 });
    const getIndiaPosition = () => ({ x: canvas.width * 0.78, y: canvas.height * 0.72 + 50 });
    const getUSAPosition = () => ({ x: canvas.width * 0.15, y: canvas.height * 0.58 + 50 });
    const getChinaPosition = () => ({ x: canvas.width * 0.88, y: canvas.height * 0.55 + 50 });
    const getSingaporePosition = () => ({ x: canvas.width * 0.83, y: canvas.height * 0.78 + 50 });
    const getBrazilPosition = () => ({ x: canvas.width * 0.22, y: canvas.height * 0.75 + 50 });
    
    // Create ships with bidirectional traffic - increased by 20%
    const createShips = () => {
      const baseShipCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 50000));
      const shipCount = Math.floor(baseShipCount * 0.78); // Increased from 0.65 to 0.78 (20% increase)
      const shipTypes: ('cargo' | 'container' | 'tanker' | 'plane')[] = ['cargo', 'container', 'tanker', 'plane'];
      
      // Plane routes - bidirectional between Spain and other countries
      const planeRoutes = [
        { from: 'spain', to: 'usa' },
        { from: 'usa', to: 'spain' },
        { from: 'spain', to: 'china' },
        { from: 'china', to: 'spain' },
        { from: 'spain', to: 'india' },
        { from: 'india', to: 'spain' }
      ];
      
      // Ship routes - bidirectional between Spain and all countries
      const shipRoutes = [
        { from: 'spain', to: 'usa' },
        { from: 'usa', to: 'spain' },
        { from: 'spain', to: 'uae' },
        { from: 'uae', to: 'spain' },
        { from: 'spain', to: 'india' },
        { from: 'india', to: 'spain' },
        { from: 'spain', to: 'china' },
        { from: 'china', to: 'spain' },
        { from: 'spain', to: 'singapore' },
        { from: 'singapore', to: 'spain' },
        { from: 'spain', to: 'brazil' },
        { from: 'brazil', to: 'spain' }
      ];
      
      for (let i = 0; i < shipCount; i++) {
        const size = Math.random() * 4 + 2.5; 
        const type = shipTypes[Math.floor(Math.random() * shipTypes.length)];
        
        let origin: typeof allCountries[number];
        let destination: typeof allCountries[number];
        
        // Special handling for planes - bidirectional routes with Spain
        if (type === 'plane') {
          const route = planeRoutes[Math.floor(Math.random() * planeRoutes.length)];
          origin = route.from as typeof allCountries[number];
          destination = route.to as typeof allCountries[number];
        } else {
          // Ships use bidirectional routes between Spain and all countries
          const route = shipRoutes[Math.floor(Math.random() * shipRoutes.length)];
          origin = route.from as typeof allCountries[number];
          destination = route.to as typeof allCountries[number];
        }
        
        const getHubPosition = (hub: typeof origin) => {
          switch (hub) {
            case 'spain': return getSpainPosition();
            case 'uae': return getUAEPosition();
            case 'india': return getIndiaPosition();
            case 'usa': return getUSAPosition();
            case 'china': return getChinaPosition();
            case 'singapore': return getSingaporePosition();
            case 'brazil': return getBrazilPosition();
          }
        };
        
        const originPos = getHubPosition(origin);
        const targetPos = getHubPosition(destination);
        
        // Calculate direction
        const dx = targetPos.x - originPos.x;
        const dy = targetPos.y - originPos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Normalize and set speed - significantly increased plane speed
        const baseSpeed = type === 'plane' ? 
          (Math.random() * 0.3 + 0.08) * 1.5 : // Increased plane speed significantly (from 1.125 to 1.5)
          (Math.random() * 0.2 + 0.05) * 0.4; // Ship speed remains the same
        const speedX = (dx / distance) * baseSpeed;
        const speedY = (dy / distance) * baseSpeed;
        
        ships.push({
          x: originPos.x,
          y: originPos.y,
          size: size,
          speedX: speedX,
          speedY: speedY,
          color: type === 'cargo' ? '#4D8CBD' : 
                type === 'container' ? '#D96941' : 
                type === 'tanker' ? '#6B8E23' : '#FF6B35', // Orange for planes
          opacity: 1.0, // Start fully opaque
          type: type,
          targetX: targetPos.x,
          targetY: targetPos.y,
          origin: origin,
          destination: destination,
          progress: 0 // Start at beginning of journey
        });
      }
    };
    
    // Create stars/distant lights - concentrated at bottom and sides
    const createStars = () => {
      const starCount = Math.min(60, Math.floor((canvas.width * canvas.height) / 18000));
      
      for (let i = 0; i < starCount; i++) {
        // Distribute stars more toward bottom half and sides
        let x, y;
        const distribution = Math.random();
        
        // Bottom-heavy distribution (more stars toward bottom)
        y = canvas.height * (0.4 + Math.random() * 0.5);
        
        // Side-heavy distribution (more stars toward sides)
        if (distribution < 0.4) {
          // Left side
          x = Math.random() * (canvas.width * 0.3);
        } else if (distribution > 0.6) {
          // Right side
          x = canvas.width * 0.7 + Math.random() * (canvas.width * 0.3);
        } else {
          // Some in middle but fewer
          x = Math.random() * canvas.width;
        }
        
        stars.push({
          x: x,
          y: y,
          radius: Math.random() * 1.8 + 0.8,
          opacity: Math.random() * 0.4 + 0.2,
          blinkSpeed: Math.random() * 0.01 + 0.002
        });
      }
    };
    
    createShips();
    createStars();
    
    // Animation time tracking
    let time = 0;
    
    // Animation loop
    const animate = () => {
      time += 0.01;
      
      // Create a dark blue ocean background gradient with cleaner top area
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#0A1128'); // Darker at top for cleaner look
      gradient.addColorStop(0.4, '#0A1128'); // Keep top area clean
      gradient.addColorStop(0.65, '#001F54'); // Start transition lower
      gradient.addColorStop(1, '#003566');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars with subtle twinkling effect
      stars.forEach(star => {
        const currentOpacity = star.opacity + Math.sin(time * star.blinkSpeed * 10) * 0.2;
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        ctx.beginPath();
        // Ensure radius is positive
        const radius = Math.max(0.1, star.radius);
        ctx.arc(star.x, star.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Draw subtle wave patterns - concentrated in bottom half
      drawWaves(ctx, canvas.width, canvas.height, time);
      
      // Add a subtle moon - positioned higher for cleaner top section
      const moonRadius = Math.max(0.1, Math.min(canvas.width, canvas.height) * 0.025);
      const moonX = canvas.width * 0.85;
      const moonY = canvas.height * 0.2; // Higher position
      
      const moonGlow = ctx.createRadialGradient(moonX, moonY, 0, moonX, moonY, moonRadius * 1.5);
      moonGlow.addColorStop(0, 'rgba(255, 255, 255, 0.5)');
      moonGlow.addColorStop(0.5, 'rgba(255, 255, 255, 0.08)');
      moonGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = moonGlow;
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius * 1.5, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw all seven hubs: Spain, UAE, India, USA, China, Singapore, and Brazil
      drawHub(ctx, getSpainPosition(), 'SPAIN', 'Main Hub', '#AA151B', '#FFDA44', true);
      drawHub(ctx, getUAEPosition(), 'UAE', 'Middle East Hub', '#00732F', '#FFFFFF', false);
      drawHub(ctx, getIndiaPosition(), 'INDIA', 'South Asia Hub', '#FF9933', '#138808', false);
      drawHub(ctx, getUSAPosition(), 'USA', 'Americas Hub', '#B31942', '#FFFFFF', false);
      drawHub(ctx, getChinaPosition(), 'CHINA', 'East Asia Hub', '#DE2910', '#FFDE00', false);
      drawHub(ctx, getSingaporePosition(), 'SINGAPORE', 'Southeast Asia Hub', '#ED2939', '#FFFFFF', false);
      drawHub(ctx, getBrazilPosition(), 'BRAZIL', 'South America Hub', '#009739', '#FFDF00', false);
      
      // Update and draw ships with fade-out logic
      ships.forEach(ship => {
        // Calculate progress (0 to 1)
        const getHubPosition = (hub: typeof ship.origin) => {
          switch (hub) {
            case 'spain': return getSpainPosition();
            case 'uae': return getUAEPosition();
            case 'india': return getIndiaPosition();
            case 'usa': return getUSAPosition();
            case 'china': return getChinaPosition();
            case 'singapore': return getSingaporePosition();
            case 'brazil': return getBrazilPosition();
          }
        };
        
        const originPos = getHubPosition(ship.origin);
        const totalDistance = Math.sqrt(
          Math.pow(ship.targetX - originPos.x, 2) + 
          Math.pow(ship.targetY - originPos.y, 2)
        );
        const currentDistance = Math.sqrt(
          Math.pow(ship.x - originPos.x, 2) + 
          Math.pow(ship.y - originPos.y, 2)
        );
        ship.progress = Math.min(1, currentDistance / totalDistance);
        
        // Calculate fade-out opacity (starts at 1, fades to 0 as it approaches destination)
        ship.opacity = Math.max(0, 1 - ship.progress);
        
        // Move ship towards destination
        ship.x += ship.speedX;
        ship.y += ship.speedY;
        
        // Check if ship reached destination or faded out completely
        const distanceToTarget = Math.sqrt(
          Math.pow(ship.targetX - ship.x, 2) + 
          Math.pow(ship.targetY - ship.y, 2)
        );
        
        if (distanceToTarget < 10 || ship.opacity <= 0.01) {
          // Reset ship with new random origin and destination
          
          // Special handling for planes - bidirectional routes with Spain
          if (ship.type === 'plane') {
            const planeRoutes = [
              { from: 'spain', to: 'usa' },
              { from: 'usa', to: 'spain' },
              { from: 'spain', to: 'china' },
              { from: 'china', to: 'spain' },
              { from: 'spain', to: 'india' },
              { from: 'india', to: 'spain' }
            ];
            const route = planeRoutes[Math.floor(Math.random() * planeRoutes.length)];
            ship.origin = route.from as typeof allCountries[number];
            ship.destination = route.to as typeof allCountries[number];
          } else {
            // Ships use bidirectional routes between Spain and all countries
            const shipRoutes = [
              { from: 'spain', to: 'usa' },
              { from: 'usa', to: 'spain' },
              { from: 'spain', to: 'uae' },
              { from: 'uae', to: 'spain' },
              { from: 'spain', to: 'india' },
              { from: 'india', to: 'spain' },
              { from: 'spain', to: 'china' },
              { from: 'china', to: 'spain' },
              { from: 'spain', to: 'singapore' },
              { from: 'singapore', to: 'spain' },
              { from: 'spain', to: 'brazil' },
              { from: 'brazil', to: 'spain' }
            ];
            const route = shipRoutes[Math.floor(Math.random() * shipRoutes.length)];
            ship.origin = route.from as typeof allCountries[number];
            ship.destination = route.to as typeof allCountries[number];
          }
          
          const newOriginPos = getHubPosition(ship.origin);
          const newTargetPos = getHubPosition(ship.destination);
          
          ship.x = newOriginPos.x;
          ship.y = newOriginPos.y;
          ship.targetX = newTargetPos.x;
          ship.targetY = newTargetPos.y;
          ship.progress = 0;
          ship.opacity = 1.0;
          
          // Recalculate direction with updated speeds (50% faster for planes)
          const dx = ship.targetX - ship.x;
          const dy = ship.targetY - ship.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const speed = ship.type === 'plane' ? 
            (Math.random() * 0.3 + 0.08) * 1.5 : // Increased plane speed significantly (from 1.125 to 1.5)
            (Math.random() * 0.2 + 0.05) * 0.4; // Ship speed remains the same
          ship.speedX = (dx / distance) * speed;
          ship.speedY = (dy / distance) * speed;
        }
        
        // Determine direction for ship drawing
        const facingRight = ship.speedX > 0;
        
        // Draw ship with fade-out opacity
        drawShip(ctx, ship.x, ship.y, ship.size * 5, ship.color, ship.opacity, facingRight, ship.type);
      });
      
      // Add subtle moon reflection on water - positioned in bottom half
      const reflectionX = moonX;
      const reflectionStartY = canvas.height * 0.6;
      const reflectionHeight = canvas.height * 0.3;
      
      const reflectionGradient = ctx.createLinearGradient(0, reflectionStartY, 0, reflectionStartY + reflectionHeight);
      reflectionGradient.addColorStop(0, 'rgba(255, 255, 255, 0.08)');
      reflectionGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = reflectionGradient;
      ctx.beginPath();
      const radiusX = Math.max(0.1, moonRadius * 0.8);
      const radiusY = Math.max(0.1, reflectionHeight / 3);
      ctx.ellipse(reflectionX, reflectionStartY + reflectionHeight / 2, radiusX, radiusY, 0, 0, Math.PI * 2);
      ctx.fill();
      
      requestAnimationFrame(animate);
    };
    
    // Function to draw a hub (Spain, UAE, India, USA, or China)
    const drawHub = (
      ctx: CanvasRenderingContext2D,
      position: { x: number; y: number },
      name: string,
      description: string,
      color1: string,
      color2: string,
      isMainHub: boolean
    ) => {
      const { x: centerX, y: centerY } = position;
      
      // Hub glow effects
      const hubGlow1 = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, isMainHub ? 40 : 30);
      hubGlow1.addColorStop(0, `${color1}CC`);
      hubGlow1.addColorStop(0.5, `${color1}4D`);
      hubGlow1.addColorStop(1, `${color1}00`);
      
      ctx.fillStyle = hubGlow1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, isMainHub ? 40 : 30, 0, Math.PI * 2);
      ctx.fill();
      
      // Pulsing ring
      const pulseRadius = (isMainHub ? 25 : 20) + Math.sin(time * 2) * 5;
      ctx.strokeStyle = `${color1}99`;
      ctx.lineWidth = isMainHub ? 3 : 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2);
      ctx.stroke();
      
      // Hub circle
      ctx.fillStyle = color1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, isMainHub ? 15 : 12, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = color2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, isMainHub ? 10 : 8, 0, Math.PI * 2);
      ctx.fill();
      
      // Hub labels
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.font = isMainHub ? 'bold 16px Arial' : 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(name, centerX, centerY - (isMainHub ? 35 : 30));
      ctx.font = isMainHub ? '12px Arial' : '11px Arial';
      ctx.fillText(description, centerX, centerY + (isMainHub ? 45 : 40));
    };
    
    // Function to draw different ship types
    const drawShip = (
      ctx: CanvasRenderingContext2D, 
      x: number, 
      y: number, 
      size: number,
      color: string,
      opacity: number,
      facingRight: boolean,
      type: 'cargo' | 'container' | 'tanker' | 'plane'
    ) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      
      // Ship body
      ctx.fillStyle = color;
      
      // Drawing different ship types
      if (type === 'cargo') {
        // Large cargo ship
        drawCargoShip(ctx, x, y, size, facingRight);
      } else if (type === 'container') {
        // Container vessel with container stacks
        drawContainerShip(ctx, x, y, size, facingRight);
      } else if (type === 'tanker') {
        // Tanker ship
        drawTankerShip(ctx, x, y, size, facingRight);
      } else if (type === 'plane') {
        // Plane
        drawPlane(ctx, x, y, size, facingRight);
      }
      
      // Add a wake behind the ship (not for planes)
      if (type !== 'plane') {
        drawWake(ctx, x, y, size, facingRight);
      }
      
      ctx.restore();
    };
    
    // Draw cargo ship
    const drawCargoShip = (
      ctx: CanvasRenderingContext2D,
      x: number, 
      y: number, 
      size: number,
      facingRight: boolean
    ) => {
      const direction = facingRight ? 1 : -1;
      
      // Main hull
      ctx.beginPath();
      ctx.moveTo(x - size * direction, y);
      ctx.lineTo(x + size * direction, y);
      ctx.lineTo(x + size * 0.8 * direction, y - size * 0.4);
      ctx.lineTo(x - size * 0.8 * direction, y - size * 0.4);
      ctx.closePath();
      ctx.fill();
      
      // Cabin/bridge structure (at the back of the ship)
      ctx.fillStyle = '#34495e';
      ctx.beginPath();
      ctx.rect(
        facingRight ? x - size * 0.8 : x + size * 0.3, 
        y - size * 0.4, 
        size * 0.5, 
        -size * 0.6
      );
      ctx.closePath();
      ctx.fill();
    };
    
    // Draw container ship
    const drawContainerShip = (
      ctx: CanvasRenderingContext2D,
      x: number, 
      y: number, 
      size: number,
      facingRight: boolean
    ) => {
      const direction = facingRight ? 1 : -1;
      
      // Main hull
      ctx.beginPath();
      ctx.moveTo(x - size * direction, y);
      ctx.lineTo(x + size * 1.2 * direction, y);
      ctx.lineTo(x + size * 1 * direction, y - size * 0.3);
      ctx.lineTo(x - size * 0.8 * direction, y - size * 0.3);
      ctx.closePath();
      ctx.fill();
      
      // Draw container stacks
      const colors = ['#3498db', '#e74c3c', '#f1c40f', '#16a085'];
      const containerWidth = size * 0.2;
      const containerHeight = size * 0.15;
      
      // Front containers (3 rows, 5 columns)
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 5; col++) {
          ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
          ctx.beginPath();
          ctx.rect(
            x - size * 0.6 * direction + col * containerWidth * direction, 
            y - size * 0.3 - containerHeight * (row + 1), 
            containerWidth * 0.9, 
            containerHeight * 0.9
          );
          ctx.closePath();
          ctx.fill();
          
          // Container outline
          ctx.strokeStyle = 'rgba(0,0,0,0.3)';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
      
      // Bridge structure (at the back of the ship)
      ctx.fillStyle = '#34495e';
      ctx.beginPath();
      ctx.rect(
        facingRight ? x - size * 0.9 : x + size * 0.7, 
        y - size * 0.3, 
        size * 0.3, 
        -size * 0.5
      );
      ctx.closePath();
      ctx.fill();
    };
    
    // Draw tanker ship
    const drawTankerShip = (
      ctx: CanvasRenderingContext2D,
      x: number, 
      y: number, 
      size: number,
      facingRight: boolean
    ) => {
      const direction = facingRight ? 1 : -1;
      
      // Main hull
      ctx.beginPath();
      ctx.moveTo(x - size * direction, y);
      ctx.lineTo(x + size * 1.1 * direction, y);
      ctx.lineTo(x + size * 0.9 * direction, y - size * 0.2);
      ctx.lineTo(x - size * 0.8 * direction, y - size * 0.2);
      ctx.closePath();
      ctx.fill();
      
      // Deck structures
      ctx.fillStyle = '#7f8c8d';
      
      // Main deck
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.rect(
          x - size * 0.7 * direction + i * size * 0.5 * direction, 
          y - size * 0.2, 
          size * 0.4, 
          -size * 0.15
        );
        ctx.closePath();
        ctx.fill();
      }
      
      // Bridge structure
      ctx.fillStyle = '#34495e';
      ctx.beginPath();
      ctx.rect(
        facingRight ? x - size * 0.9 : x + size * 0.6, 
        y - size * 0.2, 
        size * 0.3, 
        -size * 0.4
      );
      ctx.closePath();
      ctx.fill();
    };
    
    // Draw plane - enhanced realistic design
    const drawPlane = (
      ctx: CanvasRenderingContext2D,
      x: number, 
      y: number, 
      size: number,
      facingRight: boolean
    ) => {
      const direction = facingRight ? 1 : -1;
      
      // Main fuselage - elongated and more realistic proportions
      ctx.fillStyle = '#E8E8E8'; // Light gray fuselage
      ctx.beginPath();
      ctx.ellipse(x, y, Math.abs(size * 1.2), Math.abs(size * 0.12), 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Fuselage highlight - top reflection
      ctx.fillStyle = '#F5F5F5';
      ctx.beginPath();
      ctx.ellipse(x, y - size * 0.05, Math.abs(size * 1.1), Math.abs(size * 0.06), 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Main wings - positioned at fuselage center with realistic shape
      ctx.fillStyle = '#D0D0D0';
      ctx.beginPath();
      ctx.ellipse(
        x - size * 0.1 * direction, 
        y, 
        Math.abs(size * 0.8), 
        Math.abs(size * 0.06), 
        facingRight ? Math.PI * 0.05 : -Math.PI * 0.05, 
        0, 
        Math.PI * 2
      );
      ctx.fill();
      
      // Wing tips - darker color for realism
      ctx.fillStyle = '#A0A0A0';
      ctx.beginPath();
      ctx.ellipse(
        x - size * 0.1 * direction + size * 0.7 * direction, 
        y, 
        Math.abs(size * 0.15), 
        Math.abs(size * 0.04), 
        0, 
        0, 
        Math.PI * 2
      );
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(
        x - size * 0.1 * direction - size * 0.7 * direction, 
        y, 
        Math.abs(size * 0.15), 
        Math.abs(size * 0.04), 
        0, 
        0, 
        Math.PI * 2
      );
      ctx.fill();
      
      // Tail section - vertical stabilizer
      ctx.fillStyle = '#C0C0C0';
      ctx.beginPath();
      ctx.moveTo(x - size * 1.0 * direction, y);
      ctx.lineTo(x - size * 1.2 * direction, y - size * 0.25);
      ctx.lineTo(x - size * 1.1 * direction, y - size * 0.02);
      ctx.closePath();
      ctx.fill();
      
      // Horizontal stabilizer (tail wings)
      ctx.fillStyle = '#D0D0D0';
      ctx.beginPath();
      ctx.ellipse(
        x - size * 1.05 * direction, 
        y, 
        Math.abs(size * 0.25), 
        Math.abs(size * 0.03), 
        0, 
        0, 
        Math.PI * 2
      );
      ctx.fill();
      
      // Cockpit windows - realistic blue tint
      ctx.fillStyle = '#1E3A8A'; // Dark blue
      ctx.beginPath();
      ctx.ellipse(x + size * 0.8 * direction, y, Math.abs(size * 0.15), Math.abs(size * 0.08), 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Cockpit window highlight
      ctx.fillStyle = '#3B82F6'; // Lighter blue reflection
      ctx.beginPath();
      ctx.ellipse(x + size * 0.85 * direction, y - size * 0.02, Math.abs(size * 0.08), Math.abs(size * 0.04), 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Engine under wing - more realistic positioning
      ctx.fillStyle = '#808080';
      ctx.beginPath();
      ctx.ellipse(
        x - size * 0.2 * direction, 
        y + size * 0.08, 
        Math.abs(size * 0.12), 
        Math.abs(size * 0.04), 
        0, 
        0, 
        Math.PI * 2
      );
      ctx.fill();
      
      // Engine intake - dark center
      ctx.fillStyle = '#404040';
      ctx.beginPath();
      ctx.ellipse(
        facingRight ? x - size * 0.08 : x - size * 0.32, 
        y + size * 0.08, 
        Math.abs(size * 0.04), 
        Math.abs(size * 0.02), 
        0, 
        0, 
        Math.PI * 2
      );
      ctx.fill();
      
      // Airline stripe along fuselage
      ctx.strokeStyle = '#DC2626'; // Red airline stripe
      ctx.lineWidth = size * 0.02;
      ctx.beginPath();
      ctx.moveTo(x - size * 0.8 * direction, y);
      ctx.lineTo(x + size * 0.6 * direction, y);
      ctx.stroke();
      
      // Navigation lights - red and green wingtips
      // Red light (port - left wing when facing forward)
      ctx.fillStyle = '#DC2626';
      ctx.beginPath();
      ctx.arc(
        x - size * 0.1 * direction - size * 0.75 * direction, 
        y, 
        Math.abs(size * 0.02), 
        0, 
        Math.PI * 2
      );
      ctx.fill();
      
      // Green light (starboard - right wing when facing forward)
      ctx.fillStyle = '#16A34A';
      ctx.beginPath();
      ctx.arc(
        x - size * 0.1 * direction + size * 0.75 * direction, 
        y, 
        Math.abs(size * 0.02), 
        0, 
        Math.PI * 2
      );
      ctx.fill();
    };
    
    // Draw wake behind the ship
    const drawWake = (
      ctx: CanvasRenderingContext2D,
      x: number, 
      y: number, 
      size: number,
      facingRight: boolean
    ) => {
      const wakeSize = size / 2;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      
      if (facingRight) {
        // Wake for right-moving ship
        ctx.moveTo(x - size * 1.2, y + size / 4);
        ctx.lineTo(x - size * 1.8, y);
        ctx.moveTo(x - size * 1.2, y - size / 4);
        ctx.lineTo(x - size * 2, y - size / 3);
      } else {
        // Wake for left-moving ship
        ctx.moveTo(x + size * 1.2, y + size / 4);
        ctx.lineTo(x + size * 1.8, y);
        ctx.moveTo(x + size * 1.2, y - size / 4);
        ctx.lineTo(x + size * 2, y - size / 3);
      }
      
      ctx.stroke();
    };
    
    // Function to draw subtle wave patterns - concentrated in bottom part
    const drawWaves = (
      ctx: CanvasRenderingContext2D, 
      width: number, 
      height: number,
      time: number
    ) => {
      // Start waves lower on the screen
      const startYPosition = height * 0.45;
      
      ctx.strokeStyle = 'rgba(77, 140, 189, 0.08)';
      ctx.lineWidth = 1;
      
      // Draw several wave patterns with different frequencies
      for (let i = 0; i < 6; i++) {
        const yOffset = startYPosition + (height * 0.4 * i / 5);
        const amplitude = 6 + i * 3;
        const frequency = 0.005 - i * 0.001;
        
        ctx.beginPath();
        
        for (let x = 0; x < width; x += 20) {
          const y = yOffset + Math.sin((x * frequency) + time + i) * amplitude;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
      }
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Don't render canvas on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  
  if (isMobile) {
    return null;
  }
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0"
      style={{ background: '#0A1128' }} 
    />
  );
};

export default LogisticsAnimatedBackground;
