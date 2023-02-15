import { ref, watch, watchEffect } from "vue";
import axios from 'axios'
export function useFetch(url) {
    const data = ref(null);
    const loading = ref(false);
    const error = ref(null);
    const test = ref('0');

    const getData = async () => {
        loading.value = true;
        data.value = null;
        test.value = '100'
        error.value = null;
        try {

            let res = await axios.get(url);
            data.value = res.data 
            return data.value

        } catch (err) {
            console.log(err, 'er');
            error.value = err;
        }
        loading.value = false;
    };

    watchEffect(getData)
    return {
        data, loading, error, getData 
    };
}