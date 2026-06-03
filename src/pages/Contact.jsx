import { useState } from "react"
import Grid from '../layout/components/Grid'
import Col from '../layout/components/Col'

import Form from '../components/form/Form'
import Text from '../components/Text'

import useForm from '../hooks/useForm'

import { contactErrorsMessages, regexPatternsContact } from '../validations/contact'

import { postContacts } from '../api/contact'
import Box from '../components/Box'

const initialValues = {
    name: "",
    email: "",
    subject: "",
    body: "",
}

function Contact() {

    const { values, handleChange, errors, resetForm } = useForm(
        initialValues,
        regexPatternsContact,
        contactErrorsMessages
    )
    const [result, setResult] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { ok, msg } = await postContacts(values)
            setResult({
                success: ok,
                message: msg
            })
            resetForm()
            setTimeout(() => {
                setResult(null)
            }, 5000)
        } catch (error) {
            setResult({
                success: false,
                message: error.message || "Ocurrió un error al enviar el formulario. Por favor, intenta nuevamente."
            })
            setTimeout(() => {
                setResult(null)
            }, 5000)
        }
    }

    return (
        <>
            <Text as="h2">Contactanos</Text>
            <Text as="p">Nos vamos a estar contactando a la brevedad.</Text>
            <Grid>
                <Col size={{xs: 12, md: 6, lg: 5}}>
                    {result && (
                        <Box className={`banner__${result.success ? "success" : "error"}`}>
                            <Text as="span" color="success">{result.message}</Text>
                        </Box>
                    )}
                    <Form
                        inputList={[
                            { id: "name", label: "Nombre", type: "text", required: true },
                            { id: "email", label: "Correo electrónico", type: "email", required: true },
                            { id: "subject", label: "Asunto", type: "text", required: true },
                            { id: "body", label: "Mensaje", type: "textarea", required: true },
                        ]}
                        buttonLabel="Enviar"
                        onChange={handleChange}
                        values={values}
                        errors={errors}
                        onSubmit={handleSubmit}
                    />
                </Col>
            </Grid>
        </>
    )
}

export default Contact