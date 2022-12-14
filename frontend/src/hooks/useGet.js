import { useEffect, useState } from "react"

const useGet = (url, query, token) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, {headers: { "token": token } }).then(res => {
            if (!res.ok) return setError("Couldn't get the data.");
            return res.json();
        }).then(resData => {
            setData(resData);
            setIsPending(false);
        })
    }, [url]);

    return { data, isPending, error }

}

export default useGet;