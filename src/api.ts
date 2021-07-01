import axios from 'axios';

export const addSubscriber = async (formId: string, email: string, source: string) => {
    const { data } = await axios.post(`https://api.convertkit.com/v3/forms/${formId}>/subscribe`, {
        api_key: 'oWkVCEF1mXPTQPuc54bn6g',
        email,
        fields: {
            source: source
        }
    });

    return data;
}