import { FC, useContext } from 'react';
import { LoadingContext } from '../../context/LoadingContext';

interface Props {

}

export const Loading: FC<Props> = () => {

    const { loadingState } = useContext(LoadingContext);

    if (!loadingState.loading) {
        return (<></>);
    }

    return (
        <div style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)"
        }}>

            <p style={{
                marginTop: '10px',
                marginLeft: '15px',
                color: 'white'
            }}>
                Loading...
            </p>

        </div>
    );
}

export default Loading;