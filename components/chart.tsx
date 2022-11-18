import type { language } from './time'
import { FunctionComponent } from 'react'

const chart: FunctionComponent<{ className: string; items: language[] }> = ({
    className,
    items,
}) => {
    return (
        <div className={className}>
            {items.map((item) => (
                <div
                    key={item.name}
                    style={{
                        width: item.percent + '%',
                        background: item.color,
                        minHeight: '100%',
                        display: 'block',
                    }}
                />
            ))}
        </div>
    )
}

export default chart
