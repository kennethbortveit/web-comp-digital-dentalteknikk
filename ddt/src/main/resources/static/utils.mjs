export const pipe = (...funcs) => 
    (initialValue) => funcs.reduce(
            (accumulator, current) => current(accumulator),
            initialValue
        )

export const compose = (...funcs) => 
    (initialValue) => funcs.reverse().reduce(
            (accumulator, current) => current(accumulator),
            initialValue
        )