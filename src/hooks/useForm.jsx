import { useState } from 'react'

const formmatInitialErrorValues = (initialValues) => {
    const valuesKeys = Object.keys(initialValues)
    const errorValues = valuesKeys.reduce((acc, key) => {
        acc[key] = ""
        return acc
    }, {})
    return errorValues
}

export default function useForm(initialValues, regexAndValidationsPatterns, errorMessages) {
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState(formmatInitialErrorValues(initialValues))

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setValues({...values, [name]: type === "checkbox" ? checked : value})
        
        if (typeof value === "string") {
            const regex = new RegExp(regexAndValidationsPatterns[name])
    
            if (!regex.test(value)) {
                setErrors({...errors, [name]: errorMessages[name]})
            } else {
                setErrors({...errors, [name]: ""})
            }
        }
        if (typeof value === "number") {
            if (regexAndValidationsPatterns[name] && value > regexAndValidationsPatterns[name]) {
               setErrors({...errors, [name]: errorMessages[name]})
            } else {
                setErrors({...errors, [name]: ""})
            }
        }

    }

    const resetForm = () => {
        setValues(initialValues)
        setErrors(formmatInitialErrorValues(initialValues))
    }

    return {
        values,
        errors,
        handleChange,
        resetForm
    }
}