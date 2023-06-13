import React from 'react'
import Layout from '../components/layout'
import Svg from '../components/svg'
import Link from 'next/link'

export default function Pagina404 () {

    return (
        <Layout
            title={'Pagina no encontrada'}
            description={'Pagina no encontrada'}
        >
            <main className='conetendor-error contenedor'>
                <Svg />
                <div className="message-box">
                    <h1>¡Oh no!</h1>
                    <h2>404</h2>
                    <p className="error">
                        Pagina no encontrada
                    </p>
                    <div className="buttons-con">
                        <div className="action-link-wrap">
                            <Link
                                href='/'
                                className="link-button">
                      Go to Home Page
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )

}
