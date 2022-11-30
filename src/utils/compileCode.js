import axios from 'axios'

const url =
    !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
        ? 'http://localhost:2358/submissions'
        : 'https://judge0-ce.p.rapidapi.com/submissions'

axios.defaults.headers['X-RapidAPI-Host'] = 'judge0-ce.p.rapidapi.com'
axios.defaults.headers['X-RapidAPI-Key'] =
    '1a281e22f7msha15fd700062d9acp11e016jsn2b6312d6b1d6'

export const compileCode = async (code) => {
    return axios.post(
        url,
        {
            language_id: 63,
            source_code: code,
        },
        {
            params: {
                wait: true,
            },
        }
    )
}
