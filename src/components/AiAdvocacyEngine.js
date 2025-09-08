
export async function getAIResponse(inputText) {
  const mockResponses = {
    'hello': 'Hi there! How can I help you today?',
    'did': 'DID stands for Decentralized Identifier.',
    'vote': 'You can vote through the Governance tab.',
  }

  const lower = inputText.toLowerCase()
  return (
    mockResponses[lower] ||
    "I'm your AI advocate. Let me know what you need!"
  )
}
