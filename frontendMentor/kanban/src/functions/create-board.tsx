interface Board {
  name: string
  columns: string[]
}

export async function createBoard(board: Board): Promise<Board> {
  const response = await fetch('https://sua-api.com/boards', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(board),
  })

  if (!response.ok) {
    throw new Error('Falha ao criar o quadro')
  }

  return response.json()
}
