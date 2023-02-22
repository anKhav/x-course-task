export const filterBooksByPrice = (selector, initialArr, setResult) => {
        if (selector === '0 < Price < 15') {
            setResult(initialArr.filter(({price}) => price > 0 && price < 15))
        } else if (selector === '15 < Price < 30') {
            setResult(initialArr.filter(({price}) => price > 15 && price < 30))
        } else if (selector === 'Price > 30') {
            setResult(initialArr.filter(({price}) => price > 30))
        } else {
            setResult(initialArr)
        }
    }