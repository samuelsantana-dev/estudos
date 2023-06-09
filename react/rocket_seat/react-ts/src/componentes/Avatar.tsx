import Style from './avatar.module.css'

interface PropsAvatar {
    hasBorder?: boolean;
    src: string
    alt?: string
}

export function Avatar({hasBorder = true, src, alt}:PropsAvatar){
    //Ou seja se nao tiver escriot na imagem de avatar a frases hasBorder a imagem vai ter uma borda verde aqui foi usado a logica de programçao se nao tiver um vai ter o outro
    //const hasBorder = props.hasBorder === false;
    return(
        <div>
            <img 
            src={src}
            className={hasBorder ? Style.avatarWidthBorder : Style.avatar} 
            alt={alt}
            /> 
        </div>
    )
}