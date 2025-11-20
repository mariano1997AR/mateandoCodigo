import { useEffect, useState } from 'react';
import './Carrousel.css';

interface CarouselProps {
    images: string[];
    interval?: number;
}

export const Carrousel: React.FC<CarouselProps> = ({ images, interval = 3000 }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, interval);

        return ()=> clearInterval(timer);
    }, [images.length, interval])
    return (
        <>
            <section className="carousel-container">
                <article
                    className="carousel-slides"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {images.map((src, i) => (
                        <div className="carousel-slide" key={i}>
                            <img src={src} alt={`slide-${i}`} loading="lazy" />
                        </div>
                    ))}
                </article>

                {/* Botones de navegación */}
                <article className="carousel-dots">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            className={`dot ${i === index ? "active" : ""}`}
                            onClick={() => setIndex(i)}
                        />
                    ))}
                </article>
            </section>

        </>
    )
}