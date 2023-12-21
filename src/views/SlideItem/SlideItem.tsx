import {Avatar} from "@mui/material";

export function SlideItem({name, img, message}: props) {
    return (
        <div className="each-slide-effect">
            <div className="h-max flex flex-col justify-center items-center">
                <p className="px-[50px] text-center">{message}</p>
                <h1 className="text-2xl">{name}</h1>
                <Avatar
                    alt={name}
                    src={img}
                    sx={{width: 80, height: 80}}
                />
            </div>
        </div>
    );
}

type props = {
    name:string,
    img:string,
    message:string
}