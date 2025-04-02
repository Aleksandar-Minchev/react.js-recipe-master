import { toast } from "react-toastify";

export const requester = async (url, data, method, options = {}) => {
    options.method = method;

    const authData = JSON.parse(localStorage.getItem('auth'));

    if (authData.accessToken) {
        options = {
            ...options,
            headers: {
                'X-Authorization': authData.accessToken,
                ...options.headers,
            },
        }
    }

    if (data) {
        options = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            body: JSON.stringify(data),
        }
    }

    try {
        const response = await fetch(url, options);     
        const responseContentType = response.headers.get('Content-Type');
        if (!responseContentType) {
            return;
        };
    
        if (!response.ok){
            const error = await response.json();
            throw error;
        };
    
        const result = await response.json();
    
        return result;
        
    } catch (err) {      
        toast.error(err.message);
    } 
   
   
}