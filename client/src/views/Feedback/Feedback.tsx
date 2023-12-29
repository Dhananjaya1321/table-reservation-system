import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {SlideItem} from "../SlideItem/SlideItem";
import img from "../../assets/image/logo.png";

export function Feedback() {
    return (
        <section id="feedback-section" className="h-max">
            <h1 className="text-3xl text-center">Feedback's</h1>
            <p className="text-center">What customers are saying about our services and table reservation system </p>
            <div className="w-full h-max mt-5">
                <Slide>
                    <SlideItem
                        name={"Isuru Dhananjaya"}
                        img={img}
                        message={"A nice place to relax, relieve stress and this system was easy to book tables and saved time"}
                    />
                    <SlideItem
                        name={"Isuru Dhananjaya"}
                        img={img}
                        message={"A nice place to relax, relieve stress and this system was easy to book tables and saved time"}
                    />
                    <SlideItem
                        name={"Isuru Dhananjaya"}
                        img={img}
                        message={"A nice place to relax, relieve stress and this system was easy to book tables and saved time"}
                    />
                    <SlideItem
                        name={"Isuru Dhananjaya"}
                        img={img}
                        message={"A nice place to relax, relieve stress and this system was easy to book tables and saved time"}
                    />
                </Slide>
            </div>
        </section>
    );
}