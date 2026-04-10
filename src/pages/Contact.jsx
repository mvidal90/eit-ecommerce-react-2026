
import Grid from '../layout/components/Grid'
import Col from '../layout/components/Col'

import Form from '../components/form/Form'
import Text from '../components/Text'

import useForm from '../hooks/useForm'

import { contactErrorsMessages, regexPatternsContact } from '../validations/contact'

import { postContacts } from '../api/contact'

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

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await postContacts(values)
            resetForm()
        } catch (error) {
            alert(error.message || "Ocurrió un error al enviar el formulario. Por favor, intenta nuevamente.")
        }
    }

    return (
        <>
            <Text as="h2">Contactanos</Text>
            <Text as="p">Nos vamos a estar contactando a la brevedad.</Text>
            <Grid>
                <Col size={{xs: 12, md: 6, lg: 5}}>
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