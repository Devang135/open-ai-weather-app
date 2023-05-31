"use client";
import { Card,Text,Subtitle,Divider } from "@tremor/react"
import Citypicker from "@/Components/Citypicker";
export default function Home() {
  return (

      <main>
      <div className="min-h-screen bg-gradient-to-r from-teal-500 to-blue-950 p-20 flex flex-col justify-center ">
      <Card className="text-center mb-10 max-w-4xl mx-auto  ">
      <Text className="text-4xl font-semibold" >AI WEATHER </Text>
      <Subtitle className="text-xl leading-relaxed">Powered by OpenAI</Subtitle>
      <Card className="bg-gradient-to-r from-teal-400 to-blue-500">
      <Citypicker/>
      </Card>
      </Card>
      </div>
      </main>
  );
}
