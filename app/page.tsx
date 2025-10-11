"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { getWeatherAction } from "./actions"

// The submit button will be disabled while the form is submitting.
function SubmitButton() {
  const { pending } = useFormStatus()
  // Added console log to track button state
  console.log("SubmitButton render - pending:", pending)
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full px-4 py-2 text-white bg-blue-600 rounded-md disabled:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {pending ? "Getting Weather..." : "Get Weather"}
    </button>
  )
}

export default function Page() {
  // Use useActionState to handle form submission and state.
  const [state, formAction] = useActionState(getWeatherAction, {
    result: "",
  })

  // Added console log to track page state
  console.log("Page render - current state:", state)

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Weather Agent</h1>
          <p className="mt-2 text-gray-600">
            Ask for the weather in any city! Try &quot;What&apos;s the weather like in London?&quot;
          </p>
        </div>

        <form action={formAction} className="space-y-4">
          <div>
            <label htmlFor="prompt" className="sr-only">
              Your Prompt
            </label>
            <input
              id="prompt"
              name="prompt"
              type="text"
              required
              className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., How's the weather in Paris?"
            />
          </div>
          <SubmitButton />
        </form>

        {state.result && (
          <div className="p-4 mt-6 text-gray-800 bg-gray-100 border border-gray-200 rounded-md">
            <h2 className="font-semibold">Agent&apos;s Response:</h2>
            <p className="mt-1">{state.result}</p>
          </div>
        )}
      </div>
    </main>
  )
}
