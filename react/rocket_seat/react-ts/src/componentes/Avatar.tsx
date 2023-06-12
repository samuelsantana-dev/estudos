import { ImgHTMLAttributes } from 'react';
import Style from './avatar.module.css'

interface PropsAvatar extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
}

export function Avatar({hasBorder = true, ...props}:PropsAvatar){
    //Ou seja se nao tiver escriot na imagem de avatar a frases hasBorder a imagem vai ter uma borda verde aqui foi usado a logica de programçao se nao tiver um vai ter o outro
    //const hasBorder = props.hasBorder === false;
    return(
        <div>
            <img 
            className={hasBorder ? Style.avatarWidthBorder : Style.avatar} 
            {...props}
            /> 
        </div>
    )
}