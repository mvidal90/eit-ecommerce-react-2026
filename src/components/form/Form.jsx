import Button from "../Button"
import FormInput from "./FormInput"

function Form({
    onSubmit,
    onChange,
    inputList = [],
    values = {},
    errors = {},
    buttonLabel
}) {

    const isValidForm = 
        Object.values(errors).every(error => !error) && 
        Object.values(values).every(value => value)

    return (
        <form onSubmit={onSubmit} className="form__container" novalidate>
            {
                inputList.map(input => (
                    <FormInput 
                        key={input.id}
                        {...input}
                        onChange={onChange}
                        value={values[input.id] || ""}
                        error={errors[input.id]}
                    />
                ))
            }
            <Button type="submit" text={buttonLabel} color="secondary" disabled={!isValidForm} />
        </form>
    )
}

export default Form