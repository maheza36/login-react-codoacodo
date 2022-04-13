import { useEffect, useState } from "react";
import httpClienteInstance from "./HttpClienteInstance";

export const Post = (endpoint, request) => {
    const [data, setData] = useState({
        loading: true,
        error: null,
        data: null
    });

    useEffect(() => {
        postEvent();
    });

    const postEvent = async () => {
        try{
            const res = await httpClienteInstance.post(endpoint, {request}); 
            setData({
                loading: false,
                error: null,
                data: res.data
            })       
        }catch(e){
            setData({
                loading: false,
                error: e,
                data: []
            });
        }
    }

    return [data.loading, data.error, data.data];
}