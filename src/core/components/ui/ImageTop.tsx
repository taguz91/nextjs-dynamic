import { FC } from 'react';

interface Props {
    img: string;
    height: string;
    description?: string;
}

export const ImageTop: FC<Props> = ({ img, height, description = 'Image company' }) => {
    return (
        <img style={{
            height: height,
        }}
            className="mx-auto mt-5 mb-3"
            src={img} alt={description} />
    )
}

export default ImageTop;