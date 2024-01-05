const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const EventEmitter = require('events');
const emitter = new EventEmitter();
const port = 5100;
emitter.setMaxListeners(15);
const app = express();
const corsOptions = {
  origin: 'https://myfolio-frontend-chk58pxv8-pranjal-shuklas-projects.vercel.app',
  methods: ["POST", "GET"],
  credentials: true,
};



// Connect to MongoDB
mongoose.connect('mongodb+srv://pranjalshukla245:RgiDeemJ5JkE7DGt@cluster0.vtjn0jv.mongodb.net/Myfolio?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>{
    console.log("error connecting to mongodb",err);
});


const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const FormData = mongoose.model('Portfolio', formDataSchema);

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.get('/',(req,res)=>{
    res.send("Api running")
})
app.post('/api/submit-form', async (req, res) => {
  const formData = req.body;
  console.log(formData);

  try {
    // Create a new instance of the FormData model
    const newFormData = new FormData(formData);

    // Save the form data to MongoDB
    await newFormData.save();

    res.json({ success: true });
  } catch (error) {
    console.error('Error saving form data to MongoDB:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
