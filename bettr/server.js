const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');  // Use 'cors' not 'cor' for consistency and readability
const multer = require('multer');
const app = express();

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// Use body-parser to handle JSON data with a higher size limit for images
app.use(bodyParser.json({ limit: '50mb' })); 

// MongoDB URI - ensure your credentials are secured and not hard-coded in production
const mongoURI = 'mongodb+srv://new_ash:hackku24@cluster.pasqmvg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster';

// Create a MongoDB connection using Mongoose
const conn = mongoose.createConnection(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define a schema for storing image data
const imageSchema = new mongoose.Schema({
  id: String,
  tag: String,
  description: String,
  base64: String // This field stores the Base64 encoded image data
});

// Create a model based on the schema
const Image = conn.model('Image', imageSchema); // Ensure the model uses the 'conn' connection

// Configure Multer for file storage management
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads'); // Make sure the 'uploads' directory exists
  },
  filename: function(req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname); // Generate a unique file name
  }
});

const upload = multer({ storage: storage });
app.get('/')

// Add an endpoint to handle file uploads
app.post('/upload', upload.single('image'), (req, res) => {
console.log('recieved POST request /upload');

  let base64Data = req.body.base64;
    if (!base64Data.startsWith('data:image/jpeg;base64,')) {
        base64Data = `data:image/jpeg;base64,${base64Data}`;
    }

    const newImage = new Image({
        id: req.body.id,
        tag: req.body.tag,
        description: req.body.description,
        base64: base64Data // Store the complete data URI
    });

    // Save the image to the database
    newImage.save()
      .then(() => res.status(201).json({ message: 'Image uploaded successfully' }))
      .catch(err => res.status(500).json({ error: err.message }));
});
app.get('/images', async (req, res) => {
    try {
        const images = await Image.find();
        const formattedImages = images.map(image => ({
            id: image.id,
            tag: image.tag,
            description: image.description,
            uri: image.base64,
        }));
        
        res.json(formattedImages);
    } catch (error) {
        console.log("Here's the error")
        res.status(500).send(error.message);
    }
});
    
// Start the server
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});