const SOCKET_BASE_PATH = 'http://localhost:3090/'

// socket = io( SOCKET_BASE_PATH)
socket = io( SOCKET_BASE_PATH, { query: { name: "QuErY" } } )
