const pool = require('../config/connect');
const bcrypt = require('bcrypt');

const Signup = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        if (!username || !password) {
            return res.status(400).json({ error: "Username and password are required" });
        }

        const [existing] = await pool.query("SELECT * FROM users WHERE username = ?", [username]);

        if (existing.length > 0) {
            return res.status(400).json({ error: "Username already taken" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await pool.query("INSERT INTO users (username, password) VALUES (?, ?)", [
            username,
            hashedPassword,
        ]);

        res.status(201).json({ message: "Signup successful" });
    } catch (error) {
        res.status(500).json({error: 'Server Error'});
    }
};

module.exports = {
    Signup,
}