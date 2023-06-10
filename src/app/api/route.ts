import { NextResponse } from "next/server";
import  openai from "@/Components/openai";


export  async function POST (request: Request) {
    const {weatherData} = await request.json()

    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo-0301",
        messages: [
            {
                role:'system', 
                content: `Pretend  you are a weather news forecast.`
                /*presenting weather information.
        energetic and full charisma Introduce yourself as a Devang and presenting live weather forecast from India Zone. give summary of 
        weather forecast. make it easier to understand and prepare for weather conditions such as Sunglasss and give recomendations according to current time. 
        if the weather is rainy recommend for Umbrella or Raincoat*/
    },
        {
            role:'user',
            content:`Hi, can i get summary of Todays weather forecast, use the following information to get weather data:${JSON.stringify(weatherData)}`,
            }
        ],
    });

    const {data} = response;
    
    console.log("Data is ", data);

return NextResponse.json(data.choices[0].message);
}   