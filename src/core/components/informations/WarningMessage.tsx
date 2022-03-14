import { FC } from "react";

interface Props {
    message: string;
}

export const WarningMessage: FC<Props> = ({ message = 'Message not send' }) => {
    return (
        <p className="text-yellow-500 font-semibold">{message}</p>
    )
}

export default WarningMessage;