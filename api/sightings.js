import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

// Path to store user sightings data
const DATA_DIR = join(process.cwd(), 'data');
const DATA_FILE = join(DATA_DIR, 'sightings.json');

// Ensure data directory exists
function ensureDataDir() {
    if (!existsSync(DATA_DIR)) {
        mkdirSync(DATA_DIR, { recursive: true });
    }
}

// Load all sightings data
function loadSightingsData() {
    ensureDataDir();
    if (!existsSync(DATA_FILE)) {
        return {};
    }
    try {
        const data = readFileSync(DATA_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error loading sightings data:', error);
        return {};
    }
}

// Save all sightings data
function saveSightingsData(data) {
    ensureDataDir();
    try {
        writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
        return true;
    } catch (error) {
        console.error('Error saving sightings data:', error);
        return false;
    }
}

// GET - Load sightings for a user
export function GET(request) {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    
    if (!email) {
        return new Response(
            JSON.stringify({ error: 'Email is required' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }
    
    const allSightings = loadSightingsData();
    const userSightings = allSightings[email] || [];
    
    return new Response(
        JSON.stringify({ sightings: userSightings }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
}

// POST - Save sightings for a user
export async function POST(request) {
    try {
        const body = await request.json();
        const { email, sightings } = body;
        
        if (!email) {
            return new Response(
                JSON.stringify({ error: 'Email is required' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }
        
        if (!Array.isArray(sightings)) {
            return new Response(
                JSON.stringify({ error: 'Sightings must be an array' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }
        
        const allSightings = loadSightingsData();
        allSightings[email] = sightings;
        
        const saved = saveSightingsData(allSightings);
        
        if (saved) {
            return new Response(
                JSON.stringify({ success: true, count: sightings.length }),
                { status: 200, headers: { 'Content-Type': 'application/json' } }
            );
        } else {
            return new Response(
                JSON.stringify({ error: 'Failed to save sightings' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }
    } catch (error) {
        console.error('Error processing request:', error);
        return new Response(
            JSON.stringify({ error: 'Invalid request body' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
