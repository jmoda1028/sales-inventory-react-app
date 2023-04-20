const Credential = () => {
    return(
    <section className="credential">
        <div className="container">
            <h2>Credential</h2>
            <div className="creds">
                <p>Email: <span>admin@example.com</span></p>
                <p>Password: <span>pass1234</span></p>
            </div>
           <div className="line-separate"></div>
            <div className="creds">
                <p>Email: <span>cashier@example.com</span></p>
                <p>Password: <span>pass1234</span></p>
            </div>
        </div>
    </section>
    )
}

export default Credential;