import React from 'react'
import Layout from './Components'
import 'bootstrap/dist/css/bootstrap.min.css'

const MyApp = ({Component, pageProps})=> {
    return(
        <Layout>
            <Component {...pageProps} />
        </Layout>  
    )
}

export default MyApp