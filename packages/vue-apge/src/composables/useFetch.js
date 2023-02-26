import { ref, watchEffect } from "vue";
import axios from 'axios'
export function useFetch(url) {
    const data = ref(null);
    const loading = ref(false);
    const error = ref(null); 

    const getData = async () => {
        loading.value = true;
        data.value = null; 
        error.value = null;
        try { 
            let res = await axios.get(url);
            data.value = res.data 
            return data.value 
        } catch (err) { 
            error.value = err;
        }
        finally{
            loading.value = false;
        } 
    };

    watchEffect(getData)
    return {
        data, loading, error, getData 
    };
}