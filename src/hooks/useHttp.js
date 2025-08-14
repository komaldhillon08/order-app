async function sendHttpRequest(url, config) {
    const response = await fetch(url, config)

    if (!response.ok) {
        throw new Error("Something went wrong  failed to send request ")
    }

}
export default function useHttp() {

}