import { FC } from "react";

interface Props {

}

export const SubmitInput: FC<Props> = () => {
    return (
        <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded" />
    );
}

export default SubmitInput;