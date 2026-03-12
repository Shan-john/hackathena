/**
 * server.js – Express + Socket.IO Multiplayer Backend
 * Handles real-time world sync, chat, and room management.
 *
 * Run: node backend/server.js
 */

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] },
});

// ─────────────────────────────────────────
//  In-memory rooms (replace with DB later)
// ─────────────────────────────────────────
const rooms = new Map();

function getOrCreateRoom(roomCode) {
  if (!rooms.has(roomCode)) {
    rooms.set(roomCode, {
      code: roomCode,
      players: [],
      objects: [],
      timeOfDay: 'day',
    });
  }
  return rooms.get(roomCode);
}

// ─────────────────────────────────────────
//  REST Endpoints
// ─────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', rooms: rooms.size });
});

app.get('/api/rooms/:code', (req, res) => {
  const room = rooms.get(req.params.code);
  if (!room) return res.status(404).json({ error: 'Room not found' });
  res.json(room);
});

// ─────────────────────────────────────────
//  Socket.IO Events
// ─────────────────────────────────────────
io.on('connection', (socket) => {
  console.log(`[Socket] Connected: ${socket.id}`);

  // ── Join World ──
  socket.on('join-world', ({ roomCode, playerName }) => {
    const room = getOrCreateRoom(roomCode);
    socket.join(roomCode);

    const player = { id: socket.id, name: playerName || 'Explorer' };
    room.players.push(player);

    console.log(`[Room ${roomCode}] ${player.name} joined (${room.players.length} players)`);

    // Send current world state to the new player
    socket.emit('world-state', {
      objects: room.objects,
      timeOfDay: room.timeOfDay,
      players: room.players,
    });

    // Tell others someone joined
    socket.to(roomCode).emit('player-joined', player);
  });

  // ── Place Object ──
  socket.on('place-object', ({ roomCode, object }) => {
    const room = rooms.get(roomCode);
    if (!room) return;

    room.objects.push(object);
    // Broadcast to everyone else in the room
    socket.to(roomCode).emit('object-placed', object);
  });

  // ── Move Object ──
  socket.on('move-object', ({ roomCode, objectId, newPosition }) => {
    const room = rooms.get(roomCode);
    if (!room) return;

    const obj = room.objects.find(o => o.id === objectId);
    if (obj) {
      obj.position = newPosition;
    }
    socket.to(roomCode).emit('object-moved', { objectId, newPosition });
  });

  // ── Quick Chat Message ──
  socket.on('chat-message', ({ roomCode, messageKey, senderName, emoji }) => {
    console.log(`[Chat ${roomCode}] ${senderName}: ${messageKey}`);
    // Broadcast to everyone in room (including sender for confirmation)
    io.to(roomCode).emit('chat-broadcast', {
      senderId: socket.id,
      senderName,
      messageKey,
      emoji,
      timestamp: Date.now(),
    });
  });

  // ── Change Time of Day ──
  socket.on('change-time', ({ roomCode, timeOfDay }) => {
    const room = rooms.get(roomCode);
    if (!room) return;

    room.timeOfDay = timeOfDay;
    io.to(roomCode).emit('time-changed', { timeOfDay });
  });

  // ── Disconnect ──
  socket.on('disconnect', () => {
    console.log(`[Socket] Disconnected: ${socket.id}`);

    // Remove from all rooms
    for (const [code, room] of rooms) {
      const idx = room.players.findIndex(p => p.id === socket.id);
      if (idx !== -1) {
        const removed = room.players.splice(idx, 1)[0];
        io.to(code).emit('player-left', { id: socket.id, name: removed.name });
        console.log(`[Room ${code}] ${removed.name} left`);

        // Clean up empty rooms
        if (room.players.length === 0) {
          rooms.delete(code);
          console.log(`[Room ${code}] Deleted (empty)`);
        }
      }
    }
  });
});

// ─────────────────────────────────────────
//  Start
// ─────────────────────────────────────────
server.listen(PORT, () => {
  console.log(`\n🌳 HackAthena Server running on http://localhost:${PORT}`);
  console.log(`   WebSocket ready for multiplayer!\n`);
});
