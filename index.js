
// const { Configuration, OpenAIApi } = require("openai");
const express = require ('express')
const bodyParser = require ('body-parser')
const cors = require ('cors')



// const configuration = new Configuration({
//     organization: "org-sJY0pb2zHk225uL6KG7nPekI",
//     apiKey: "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",
// });
// const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

const {OpenAI} = require ('openai');

const openai = new OpenAI({
  apiKey: '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' // This is also the default, can be omitted
});

const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3080

app.post('/', async(req,res)=>{
    const {message} = req.body;
   console.log(message, "message")
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5,
      });
      console.log()
      res.json({
        // data:response.data
        message:response.data.choices[0].text,
      })
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































