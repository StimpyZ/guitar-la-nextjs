import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/header.module.css'
import { useRouter } from 'next/router'

export default function Header () {

    const router = useRouter()
    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/img/logo.svg"
                        width={300}
                        height={40}
                        alt="Logo de GuitarLA"
                    />
                </Link>
                <nav className={styles.navegacion}>
                    <Link
                        className={`${
                            router.pathname === '/' ? styles.active : ''
                        }`}
                        href="/"
                    >
                        Inicio
                    </Link>
                    <Link
                        className={`${
                            router.pathname === '/tienda' ? styles.active : ''
                        }`}
                        href="/tienda"
                    >
                        Tienda
                    </Link>
                    <Link
                        className={`${
                            router.pathname === '/nosotros' ? styles.active : ''
                        }`}
                        href="/nosotros"
                    >
                        Nosotros
                    </Link>
                    <Link
                        className={`${
                            router.pathname === '/blog' ? styles.active : ''
                        }`}
                        href="/blog"
                    >
                        Blog
                    </Link>

                    <Link href='/cart'>
                        <Image width={30} height={25} src='/img/carrito.png' alt='imagen del carrito de compras' />
                    </Link>
                </nav>
            </div>
        </header>
    )

}
