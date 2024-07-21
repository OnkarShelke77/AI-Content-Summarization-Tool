const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/analyze', async (req, res) => {
  const { text } = req.body;
  const apiKey = 'YOUR_GOOGLE_CLOUD_API_KEY';
  try {
    const response = await axios.post(`https://language.googleapis.com/v1/documents:analyzeEntities?key=${apiKey}`, {
      document: {
        type: 'PLAIN_TEXT',
        content: text,
      },
    });
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error analyzing text');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
