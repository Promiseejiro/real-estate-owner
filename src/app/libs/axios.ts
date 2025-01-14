import axios from "axios"

// Creating an axios instance to be used across the app
const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
})

export default instance
