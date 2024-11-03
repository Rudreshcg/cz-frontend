import http from "../Services/http";


export const getContents = () => http.get('contents/')