
function linarySearchExample(): void {
    const array: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    let count = 0;
    function linarySearch(array, item): number | null {
        for (let index = 0; index < array.length; index++) {
            count++;
            if (array[index] === item) {
                return index
            }
        }
        return null;
    }
    const result = linarySearch(array, 5)
    console.log(result)
    console.log(count)
}

linarySearchExample()


function binarySearchExample(): void {
    const array: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    let count = 0;
    function binarySearch(array, item): number | null {
        let start = 0;
        let end = array.length;
        let found = false;
        let position = null;
        let middle;
        while (found === false && start <= end) {
            count++;
            middle = Math.floor((start + end) / 2);
            if (array[middle] === item) {
                found = true;
                position = middle;
                return position;
            }

            if (item < array[middle]) {
                end = middle - 1;
            } else {
                start = middle + 1;
            }
        }

        return position;
    }
    function binarySearchRecursive(array, item, start, end): number | null {
        const middle = Math.floor((start + end) / 2);
        const middleValue = array[middle];
        count++;
        if (item === middleValue) {
            return middle;
        }
        if (item < middleValue) {
            return binarySearchRecursive(array, item, start, middle - 1)
        } else {
            return binarySearchRecursive(array, item, middle + 1, end)

        }
    }
    let result = binarySearch(array, 13)
    console.log(result, count)
    count = 0
    result = binarySearchRecursive(array, 13, 0, array.length)
    console.log('with recursive, ', result, count)
}
binarySearchExample()
function selectionSortExample(): void {
    // const array: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const array: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].sort(() => Math.random() - 0.5)
    console.log('array', array)
    let count = 0;
    function selectionSort(array): number[] {
        for (let index = 0; index < array.length; index++) {
            let indexMinValue = index;
            for (let j = index + 1; j < array.length; j++) {
                if (array[indexMinValue] > array[j]) {
                    indexMinValue = j;
                }
                count++;
            }
            let tmp = array[index];
            array[index] = array[indexMinValue];
            array[indexMinValue] = tmp;

        }
        return array;
    }
    const result = selectionSort(array)
    console.log(result)
    console.log(count)
}
selectionSortExample()
function bubbleSortExample(): void {
    // const array: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const array: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].sort(() => Math.random() - 0.5)
    console.log('array', array)
    let count = 0;
    function bubbleSort(array): number[] {
        for (let index = 0; index < array.length; index++) {
            for (let j = 0; j < array.length; j++) {
                if (array[j] < array[j + 1]) {
                    let tmp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = tmp;
                }
                count++;
            }

        }
        return array;
    }
    const result = bubbleSort(array)
    console.log(result)
    console.log(count)
}
bubbleSortExample()
function quickSortExample(): void {
    const factorial = (n): number => {
        if (n === 1) {
            return n;

        }
        return n * factorial(n - 1);
    }
    // console.log(factorial(5));
    const fibonachi = (n) => {
        //1,1,2,3,5,8,13,21
        if (n === 1 || n === 2) {
            return 1;
        }
        return fibonachi(n - 1) + fibonachi(n - 2);
    }
    // console.log(fibonachi(16))
    // const array: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const array: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].sort(() => Math.random() - 0.5)
    // console.log('array', array)
    let count = 0;
    function quickSort(array): number[] {
        if (array.length <= 1) {
            return array;
        }
        const pivotIndex = Math.floor(array.length / 2);
        const pivot = array[pivotIndex];
        const less = [];
        const greater = [];
        for (let index = 0; index < array.length; index++) {
            count++;
            if (index === pivotIndex) {
                continue;
            }
            if (array[index] < pivot) {
                less.push(array[index]);
            } else {
                greater.push(array[index]);
            }

        }
        return [...quickSort(less), pivot, ...quickSort(greater)];
    }
    const result = quickSort(array)
    console.log(result)
    console.log(count)
}
quickSortExample()
