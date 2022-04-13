import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:38642",
    headers: {'jx4SecretKey':'123', 'Jx4-dbkey': 'LOCAL'}
})