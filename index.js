const express = require ('express')
const bodyParser = require ('body-parser')
const cors = require ('cors')
require('dotenv').config();


const {OpenAI} = require ('openai');

const openai = new OpenAI({
  apiKey: ''
});

const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3080

app.post('/', async(req,res) => {
  const { message } = req.body;

  // Create an array of messages. If it's the beginning of a conversation,
  // it can start with an empty array or an initial message.
  const messages = [
      {
          role: "user",
          content: message
      }
  ];

  try {
      const chatCompletion = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: messages,  // Update this line
          max_tokens: 100,
          temperature: 0.5
      });

     
      // console.log(chatCompletion.choices[0].message);

      res.json({
          message: chatCompletion.choices[0].message.content
      });
  } catch (error) {
      console.error('Error:', error);
      res.status(500).send('An error occurred');
  }
});



// app.get('/models', async(req,res)=>{
//   const response = await openai.listEngines();
//   console.log(response.data.data);
//   res.json({
//     models: response.data.data
//   })
  
// });




app.listen(port,() =>{
    console.log(`Example app listening at http://localhost:${port}`);
});
