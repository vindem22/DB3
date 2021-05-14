import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'

export const Loading = () => {
    return (
        <>
            <Container className="mt-5 d-flex text-center flex-column justify-content-center align-items-center">
                <Spinner className="mb-3" animation="border" variant="primary"></Spinner>
                <h2>Your page is loading. Please wait a little</h2>
                <p>The page wiil be available in a moment. Sorry for the waiting</p>
            </Container>
        </>
    )
}

