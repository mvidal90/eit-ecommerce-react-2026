import Text from "../components/Text"
import Form from "../components/form/Form"
import Grid from "../layout/components/Grid"
import Col from "../layout/components/Col"

import useForm from "../hooks/useForm"

import { regexPatternsUpload, contactErrorsUpload } from "../validations/upload"
import { postProducts } from "../api/products"

const initialValues = {
    name: "",
    price: 0,
    stock: 0,
    brand: "",
    category: "",
    shortDescription: "",
    largeDescription: "",
    freeDelivery: false,
    ageFrom: 0,
    ageTo: 0,
    image: "",
}

function Upload() {

    const { values, handleChange, errors, resetForm } = useForm(
        initialValues,
        regexPatternsUpload, 
        contactErrorsUpload
    );

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await postProducts(values)
            resetForm()
        } catch (error) {
            alert( error.message || "Hubo un error al cargar el producto. Por favor, intenta nuevamente." )
        }
    }

    return (
        <>
            <Text as="h2">Cargar producto</Text>
            <Grid>
                <Col size={{xs: 12, md: 6, lg: 5}}>
                    <Form
                        inputList={[
                            { id: "name", label: "Nombre del producto", type: "text", required: true },
                            { id: "price", label: "Precio", type: "number", required: true },
                            { id: "stock", label: "Stock", type: "number", required: true },
                            { id: "brand", label: "Marca", type: "text", required: true },
                            { id: "category", label: "Categoría", type: "text", required: true },
                            { id: "shortDescription", label: "Descripción corta", type: "textarea", required: true },
                            { id: "largeDescription", label: "Descripción larga", type: "textarea"},
                            { id: "freeDelivery", label: "Envío sin cargo", type: "checkbox"},
                            { id: "ageFrom", label: "Edad desde", type: "number" },
                            { id: "ageTo", label: "Edad hasta", type: "number" },
                            { id: "image", label: "Image", type: "text" },
                        ]}
                        buttonLabel="Cargar Producto"
                        onSubmit={handleSubmit}
                        onChange={handleChange}
                        values={values}
                        errors={errors}
                    />
                </Col>
            </Grid>
        </>
    )
}

export default Upload