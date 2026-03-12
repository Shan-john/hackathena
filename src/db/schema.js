/**
 * schema.js – MongoDB / Mongoose Schemas
 * For the HackAthena accessible isometric game
 */

const mongoose = require('mongoose');

// ─────────────────────────────────────────
//  Player Schema
// ─────────────────────────────────────────
const PlayerSchema = new mongoose.Schema({
  username:   { type: String, required: true, trim: true, maxlength: 30 },
  avatar:     { type: String, default: 'bunny' }, // sprite key: 'bunny', 'deer', 'bird', etc.

  accessibilitySettings: {
    inputMethods: {
      type: [String],
      enum: ['eye', 'gesture', 'voice', 'tap'],
      default: ['tap'],
    },
    ttsEnabled:  { type: Boolean, default: true },
    ttsSpeed:    { type: Number,  default: 0.85, min: 0.5, max: 1.5 },
    uiScale:     { type: Number,  default: 1.5,  min: 1, max: 3 },
    dwellTimeMs: { type: Number,  default: 1200, min: 500, max: 3000 },
    highContrast:{ type: Boolean, default: false },
  },

  progress: {
    miniGamesCompleted: { type: Number, default: 0 },
    objectsPlaced:      { type: Number, default: 0 },
    worldLevel:         { type: Number, default: 1 }, // 1=meadow, 2=forest, 3=village, 4=castle, 5=fantasy
  },

  currentWorldId: { type: mongoose.Schema.Types.ObjectId, ref: 'World', default: null },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// ─────────────────────────────────────────
//  World Object (embedded sub-document)
// ─────────────────────────────────────────
const WorldObjectSchema = new mongoose.Schema({
  objectType: {
    type: String,
    required: true,
    enum: ['tree', 'flower', 'house', 'rock', 'bridge', 'river_tile',
           'grass_patch', 'butterfly', 'bunny', 'deer', 'bird', 'hill',
           'castle_tower', 'fence', 'path_tile', 'lamp', 'bench'],
  },
  position: {
    x: { type: Number, required: true },
    y: { type: Number, default: 0 },   // Height / isometric Z axis
    z: { type: Number, required: true },
  },
  rotation: { type: Number, default: 0 },   // 0, 90, 180, 270 degrees
  scale:    { type: Number, default: 1 },
  state:    { type: String, default: 'idle', enum: ['idle', 'growing', 'sleeping', 'awake', 'sparkling'] },
  placedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', default: null },
  placedAt: { type: Date, default: Date.now },
});

// ─────────────────────────────────────────
//  World Schema
// ─────────────────────────────────────────
const WorldSchema = new mongoose.Schema({
  name:    { type: String, required: true, trim: true },
  roomCode:{ type: String, unique: true },  // Short join code like "MAGIC42"
  seed:    { type: String },                // For procedural generation consistency

  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
  maxPlayers: { type: Number, default: 8 },

  objects: [WorldObjectSchema],

  // World evolution stage
  stage: {
    type: String,
    enum: ['meadow', 'forest', 'village', 'castle', 'fantasy'],
    default: 'meadow',
  },

  // Time of day (cosmetic)
  timeOfDay: {
    type: String,
    enum: ['morning', 'day', 'sunset', 'night'],
    default: 'day',
  },

  createdAt:   { type: Date, default: Date.now },
  lastUpdated: { type: Date, default: Date.now },
});

// ─────────────────────────────────────────
//  Chat Message Schema
// ─────────────────────────────────────────
const ChatMessageSchema = new mongoose.Schema({
  worldId:  { type: mongoose.Schema.Types.ObjectId, ref: 'World', required: true },
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
  senderName: { type: String },

  // Pre-defined message key (Among Us style), NOT free-text
  messageKey: {
    type: String,
    required: true,
    enum: ['hello', 'look_here', 'follow_me', 'help_me',
           'lets_build', 'good_job', 'thank_you', 'wow_beautiful'],
  },

  createdAt: { type: Date, default: Date.now },
});

// ─────────────────────────────────────────
//  Exports
// ─────────────────────────────────────────
module.exports = {
  Player:      mongoose.model('Player', PlayerSchema),
  World:       mongoose.model('World', WorldSchema),
  ChatMessage: mongoose.model('ChatMessage', ChatMessageSchema),
};
