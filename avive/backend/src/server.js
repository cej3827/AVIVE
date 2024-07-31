const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('@elastic/elasticsearch');

const app = express();
const port = 3001;

app.use(bodyParser.json());

const client = new Client({ node: 'http://localhost:9200' });

app.post('/search', async (req, res) => {
  const { query } = req.body;

  try {
    const result = await client.search({
      index: 'your-index-name',
      body: {
        query: {
          match: { content: query }
        }
      }
    });

    res.send(result.body.hits.hits);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
