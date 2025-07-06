// app/api/speech-to-text/route.js
export async function POST(request: Request) {
  const data = await request.json();
  return Response.json({ message: "Success!", data });
}

// Example: UI button click handler , i.e in .tsx file
async function handleClick() {
  const response = await fetch('/api/speech-to-text', {
    method: 'POST',
    body: JSON.stringify({ audio: "your_audio_data_here" }),
    headers: { 'Content-Type': 'application/json' },
  });
  const result = await response.json(); //<-- converting response to json format 
  console.log(result); // { message: "Success!", data: { audio: "..." } }
}