import CircularProgress, {
    circularProgressClasses,
} from '@mui/material/CircularProgress';

function CircleLoading() {
    return (
        <>
            <CircularProgress
                variant="indeterminate"
                disableShrink
                sx={{
                    color: '#333333',
                    animationDuration: '800ms',
                    left: 0,
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round',
                    },
                }}
                size={50}
                thickness={5}
            />
        </>
    );
}
export default CircleLoading;