import Box from "../Box"
import Text from "../Text"

import cx from 'classnames'

function FormInput({
    id,
    label,
    type = "text",
    required = false,
    value,
    error,
    onChange,
}) {
    return (
        <Box className={cx("form__input-group", {form__checkbox: type === "checkbox"})}>
            <Text as="label" htmlFor={id}>{`${label}${required ? " *" : ""}`}</Text>
            {
                type === "textarea" ? (
                    <textarea 
                        id={id}
                        name={id}
                        type={type}
                        className={
                            cx(
                                "form__input",
                                { "input-error": error }
                            )
                        }
                        onChange={onChange}
                        value={value}
                        required={required}/>
                ) : (
                    <input 
                        id={id}
                        name={id}
                        type={type}
                        className={
                            cx(
                                "form__input",
                                { "input-error": error }
                            )
                        }
                        onChange={onChange}
                        value={value}
                        required={required}/>
                )
            }
            {
                error && <Text as="span" className="form__input-helper">{error}</Text>
            }
        </Box>
    )
}

export default FormInput