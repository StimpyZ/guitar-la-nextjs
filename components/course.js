/* eslint-disable react/no-unknown-property */
import React from 'react'
import styles from '../styles/course.module.css'

export default function Course ({ course }) {

    console.log(course)

    const { title, content, image } = course
    const imageUrl = image.data.attributes.url

    return (
        <section className={`${styles.curso} curso`}>
            <style jsx>
                {`
          .curso {
            background-image: linear-gradient(to right, rgb(0 0 0 / 0.65), rgb(0 0 0 / 0.7)), url(${imageUrl});
          }
        `}
            </style>
            <div className={`contenedor ${styles.grid}`}>
                <div className={styles.contenido}>
                    <h2 className='heading'>{title}</h2>
                    <p className='texto'>{content}</p>
                </div>
            </div>
        </section>
    )

}
