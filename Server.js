// Basic Framework for Web-Based USANA Dashboard

// Import required dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
ap.use(bodyParser.json());

// Google Sheets API Setup
const auth = new google.auth.GoogleAuth({
    keyFile: "google-credentials.json", // Replace with your credentials file
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
});

const sheets = google.sheets({ version: "v4", auth });
const SPREADSHEET_ID = process.env.SPREADSHEET_ID; // Set your Google Sheets ID in .env

// User Login & Signup (Placeholder, needs authentication system)
app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    // Logic for storing user info (to be implemented)
    res.send("Signup successful (Placeholder)");
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Logic for authenticating user (to be implemented)
    res.send("Login successful (Placeholder)");
});

// Set & Get Business Centers
app.post('/set-business-centers', async (req, res) => {
    try {
        const { userId, businessCenters } = req.body;
        const range = `Users!A${userId}:B${userId}`;
        
        await sheets.spreadsheets.values.update({
            spreadsheetId: SPREADSHEET_ID,
            range,
            valueInputOption: "RAW",
            resource: { values: [[userId, businessCenters]] },
        });
        
        res.send("Business centers updated successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/get-business-centers/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const range = `Users!A${userId}:B${userId}`;
        
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range,
        });
        
        res.json(response.data.values);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Set & Get Points for Business Centers
app.post('/set-points', async (req, res) => {
    try {
        const { userId, points } = req.body;
        const range = `Users!C${userId}`;
        
        await sheets.spreadsheets.values.update({
            spreadsheetId: SPREADSHEET_ID,
            range,
            valueInputOption: "RAW",
            resource: { values: [[points]] },
        });
        
        res.send("Points updated successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/get-points/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const range = `Users!C${userId}`;
        
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range,
        });
        
        res.json(response.data.values);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
