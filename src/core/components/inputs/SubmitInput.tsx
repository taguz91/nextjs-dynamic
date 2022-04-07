import { FC } from "react";

interface Props {

}

export const SubmitInput: FC<Props> = () => {
    return (
        <div className='mx-auto w-24 my-5'>
            <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded" />
        </div>
    );
}

export default SubmitInput;