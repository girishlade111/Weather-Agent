"use server"

export async function getWeatherAction(_previousState: { result: string }, formData: FormData) {
  console.log("[SERVER] getWeatherAction invoked")

  const prompt = (formData.get("prompt") as string | null)?.trim() ?? ""
  console.log("[SERVER] prompt:", prompt)

  if (!prompt) {
    return { result: "Please enter a prompt." }
  }

  // Very naive location extraction: grab everything after the last “in ”
  // e.g. “What’s the weather in London?” -> “London”
  // Falls back to the entire prompt if no “in ” found.
  const lower = prompt.toLowerCase()
  let location = prompt
  const idx = lower.lastIndexOf(" in ")
  if (idx !== -1 && idx + 4 < prompt.length) {
    location = prompt
      .slice(idx + 4)
      .replace(/[?.,]/g, "")
      .trim()
  }
  // Capitalise first letter
  location = location.charAt(0).toUpperCase() + location.slice(1)

  // Fake temperature between 5 °C and 35 °C
  const temperature = Math.floor(Math.random() * 31) + 5
  const sentence = `The current weather in ${location} is ${temperature}°C.`

  console.log("[SERVER] sentence:", sentence)

  return { result: sentence }
}
