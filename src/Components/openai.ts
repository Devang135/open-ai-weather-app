import { Configuration, OpenAIApi } from "openai";


const configuration = new Configuration({
    organization: "org-44ms4jQWJNNY7RmGS0EklRMc",
    apiKey: process.env.OPENAPI,
});

const openai = new OpenAIApi(configuration);


export default openai;




