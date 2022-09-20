import { _axios } from "./_axios";
import { ref } from "vue";

export default function advice() {
    const advice = ref([]);
    const path = 'advice'
    const errors = ref('')

    const getRandomAdvice = async () => {
        let response = await _axios.get(path).catch((error) => {
            errors.value = error
        })
        advice.value = response.data.slip
    }

    return {advice, errors, getRandomAdvice}
}