import { DragHandleVerticalIcon } from '@radix-ui/react-icons';
import { Flex } from '@radix-ui/themes';
import { useSpring, animated, easings } from '@react-spring/web';
import '../styles/global.css';

export const SpinningIcon = () => {
    const [springs] = useSpring(
        () => ({
            from: { transform: 'rotate(0deg)' },
            to: { transform: 'rotate(360deg)' }, // Updated to rotate for 360 degrees
            config: {
                easing: easings.steps(4),
            },
            loop: true,
        }),
        []
    );

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <animated.div style={{...springs, width: '32px'}}>
                <Flex justify='center' align='center'>
                    <DragHandleVerticalIcon height="32" width="32" />
                </Flex>
            </animated.div>
        </div>
    );
};