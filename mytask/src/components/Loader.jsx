import { Container, Spinner } from "react-bootstrap";

function Loader() {
    return (
        <Container className="mt-5">
            <Spinner animation="border" variant='dark' />
            <span className="ms-1">Loading...</span>
        </Container>

    );
}

export default Loader;