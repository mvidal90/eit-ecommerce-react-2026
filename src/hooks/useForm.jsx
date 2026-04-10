import { useState } from 'react'

export default function useForm(initialValues, regexPatterns, errorMessages) {
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState(initialValues)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value})
        
        const regex = new RegExp(regexPatterns[name])

        if (!regex.test(value)) {
            setErrors({...errors, [name]: errorMessages[name]})
        } else {
            setErrors({...errors, [name]: ""})
        }
    }

    const resetForm = () => {
        setValues(initialValues)
        setErrors(initialValues)
    }

    return {
        values,
        errors,
        handleChange,
        resetForm
    }
}