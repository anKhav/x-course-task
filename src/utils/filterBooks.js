export const filterBooksByPrice = (selector, initialArr, setResult) => {
        if (selector === '0-15') {
            setResult(initialArr.filter(({price}) => price > 0 && price < 15))
        } else if (selector === '15-30') {
            setResult(initialArr.filter(({price}) => price > 15 && price < 30))
        } else if (selector === '30+') {
            setResult(initialArr.filter(({price}) => price > 30))
        } else {
            setResult(initialArr)
        }
    }