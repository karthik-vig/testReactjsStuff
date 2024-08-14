import {
    useMemo,
} from 'react'

export default function TestUseMemo({ nums }: { nums: number[] }) {

    const sum = useMemo(() => {
        return nums.reduce((total, currentNum) => {
            return total + currentNum;
        });
    }, [ nums, ]);

    return (
        <div>
            <p>The sum: {sum}</p>
        </div>
    );
}