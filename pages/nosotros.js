import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/nosotros.module.css'

export default function Nosotros () {

    return (
        <Layout
            title={'Nosotros'}
            description={'Sobre nosotros y nuestra tienda'}
        >
            <main className={`contenedor ${styles.nosotros}`}>
                <h1 className="heading">Nosotros</h1>
                <div className={styles.contenido}>
                    <Image
                        src="/img/nosotros.jpg"
                        width={1000}
                        height={800}
                        alt="Imagen de nosotros de GuitarLA"
                    />
                    <div>
                        <p>
                            Somos una página dedicada a las guitarras. Nuestro
                            objetivo es ofrecer a los amantes de la música una
                            plataforma en línea donde puedan encontrar y
                            adquirir guitarras de alta calidad. Trabajamos con
                            fabricantes reconocidos y brindamos contenido
                            educativo para ayudar a los guitarristas a mejorar
                            sus habilidades y mantenerse actualizados. ¡Únete a
                            nuestra comunidad y descubre tu guitarra perfecta!
                            Somos un equipo apasionado de músicos y amantes de
                            las guitarras.
                        </p>
                        <p>
                            Ofrecemos una amplia selección de guitarras de alta
                            calidad y brindamos contenido inspirador y consejos
                            prácticos para ayudarte a explorar y disfrutar del
                            mundo de las guitarras. Únete a nuestra comunidad y
                            descubre la pasión por la música que compartimos.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )

}
