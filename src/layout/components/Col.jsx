import Box from '../../components/Box'
import cx from 'classnames'

// Size: {
//    xs: 12
//    sm: 6,
//    md: 4,
//    lg: 3,
// }

function Col({
    as = "div",
    children,
    size = {},
    offset = {},
    className,
    ...props
}) {
    const sizeIsNumber = typeof size === "number"
    const offsetIsNumber = typeof offset === "number"

    return (
        <Box
            as={as}
            className={cx(
                {
                    [`col-${size}`]: sizeIsNumber,
                    [`col-xs-${size.xs}`]: !sizeIsNumber && size.xs,
                    [`col-sm-${size.sm}`]: !sizeIsNumber && size.sm,
                    [`col-md-${size.md}`]: !sizeIsNumber && size.md,
                    [`col-lg-${size.lg}`]: !sizeIsNumber && size.lg,
                    [`col-xl-${size.xl}`]: !sizeIsNumber && size.xl,
                    [`col-xxl-${size.xxl}`]: !sizeIsNumber && size.xxl,
                },
                {
                    [`col-offset-${size}`]: offsetIsNumber,
                    [`col-offset-xs-${size.xs}`]: !offsetIsNumber && offset.xs,
                    [`col-offset-sm-${size.sm}`]: !offsetIsNumber && offset.sm,
                    [`col-offset-md-${size.md}`]: !offsetIsNumber && offset.md,
                    [`col-offset-lg-${size.lg}`]: !offsetIsNumber && offset.lg,
                    [`col-offset-xl-${size.xl}`]: !offsetIsNumber && offset.xl,
                    [`col-offset-xxl-${size.xxl}`]: !offsetIsNumber && offset.xxl,
                },
                className
            )}
            {...props}
        >
            {children}
        </Box>
    )
}

export default Col