const User = require('../models/User');
const bcrypt = require('bcrypt');

// Handle user registration
exports.signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user already exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Optionally, insert the specific user for testing purposes
    if (email === 'sswethadhanam@gmail.com') {
      const specificUser = new User({
        email: 'sswethadhanam@gmail.com',
        password: hashedPassword, // Note: For production, consider a different approach for setting passwords.
      });
      await specificUser.save();
    }

    // Return success response
    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Registration failed' });
  }
};
