import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {Avatar} from "@mui/material";
import img from "../../assets/image/logo.png";

export function Feedback() {
    return (
        <section id="feedback-section" className="h-max">
            <h1 className="text-3xl text-center">Feedback's</h1>
            <p className="text-center">What customers are saying about our services and table reservation system </p>
            <div className="w-full h-max mt-5">
                <Slide>
                    <div className="each-slide-effect">
                        <div className="h-max flex flex-col justify-center items-center">
                            <p className="px-[50px] text-center"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet, aut consequatur deserunt, ducimus id incidunt laboriosam, magni officiis porro praesentium vel veritatis voluptatum. Beatae eum mollitia officiis quasi qui.</span><span>Cumque, illo ut! Ab ad eveniet hic illo natus nesciunt nulla pariatur qui reiciendis, reprehenderit! Assumenda blanditiis laborum minima minus modi molestias nisi officia reiciendis suscipit temporibus? Culpa facilis, quis?</span><span>A accusantium alias amet asperiores dolorem, iste obcaecati praesentium quo, rem sapiente similique sint ullam voluptatibus. Accusamus animi cumque earum enim eos, error est nobis odit officiis quia quibusdam rerum.</span>
                            </p>
                            <Avatar
                                alt="Remy Sharp"
                                src={img}
                                sx={{width: 80, height: 80}}
                            />
                            <h1 className="text-2xl">Isuru Dhananjaya</h1>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div className="h-max flex flex-col justify-center items-center">
                            <p className="px-[50px] text-center"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet, aut consequatur deserunt, ducimus id incidunt laboriosam, magni officiis porro praesentium vel veritatis voluptatum. Beatae eum mollitia officiis quasi qui.</span><span>Cumque, illo ut! Ab ad eveniet hic illo natus nesciunt nulla pariatur qui reiciendis, reprehenderit! Assumenda blanditiis laborum minima minus modi molestias nisi officia reiciendis suscipit temporibus? Culpa facilis, quis?</span><span>A accusantium alias amet asperiores dolorem, iste obcaecati praesentium quo, rem sapiente similique sint ullam voluptatibus. Accusamus animi cumque earum enim eos, error est nobis odit officiis quia quibusdam rerum.</span>
                            </p>
                            <Avatar
                                alt="Remy Sharp"
                                src={img}
                                sx={{width: 80, height: 80}}
                            />
                            <h1 className="text-2xl">Isuru Dhananjaya</h1>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div className="h-max flex flex-col justify-center items-center">
                            <p className="px-[50px] text-center"><span>Cumque, illo ut! Ab ad eveniet hic illo natus nesciunt nulla pariatur qui reiciendis, reprehenderit! Assumenda blanditiis laborum minima minus modi molestias nisi officia reiciendis suscipit temporibus? Culpa facilis, quis?</span><span>A accusantium alias amet asperiores dolorem, iste obcaecati praesentium quo, rem sapiente similique sint ullam voluptatibus. Accusamus animi cumque earum enim eos, error est nobis odit officiis quia quibusdam rerum.</span>
                            </p>
                            <Avatar
                                alt="Remy Sharp"
                                src={img}
                                sx={{width: 80, height: 80}}
                            />
                            <h1 className="text-2xl">Isuru Dhananjaya</h1>
                        </div>
                    </div>
                </Slide>
            </div>
        </section>
    );
}