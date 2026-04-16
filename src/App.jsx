import AppRoutes from "./routes/AppRoutes";
import ProductCartProvider from "./context/ProductCartProvider";

function App() {
    return (
        <ProductCartProvider>
            <AppRoutes />
        </ProductCartProvider>
    )
}

export default App