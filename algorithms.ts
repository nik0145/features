//TODO depth first search поиск в глубину
//TODO breadth first search поиск в ширину (done)
//TODO merge sort сортировка слиянием
//TODO insertion sort сортировка вставками
//TODO longest common subsequence решить задачку
function linarySearchExample(): void {
  const array: number[] = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ];

  let count = 0;
  function linarySearch(array, item): number | null {
    for (let index = 0; index < array.length; index++) {
      count++;
      if (array[index] === item) {
        return index;
      }
    }
    return null;
  }
  const result = linarySearch(array, 5);
  console.log(result);
  console.log(count);
}

linarySearchExample();

function binarySearchExample(): void {
  const array: number[] = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ];

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
      return binarySearchRecursive(array, item, start, middle - 1);
    } else {
      return binarySearchRecursive(array, item, middle + 1, end);
    }
  }
  let result = binarySearch(array, 13);
  console.log(result, count);
  count = 0;
  result = binarySearchRecursive(array, 13, 0, array.length);
  console.log("with recursive, ", result, count);
}
binarySearchExample();
function selectionSortExample(): void {
  // const array: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const array: number[] = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ].sort(() => Math.random() - 0.5);
  console.log("array", array);
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
  const result = selectionSort(array);
  console.log(result);
  console.log(count);
}
selectionSortExample();
function bubbleSortExample(): void {
  // const array: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const array: number[] = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ].sort(() => Math.random() - 0.5);
  console.log("array", array);
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
  const result = bubbleSort(array);
  console.log(result);
  console.log(count);
}
bubbleSortExample();
function quickSortExample(): void {
  const factorial = (n): number => {
    if (n === 1) {
      return n;
    }
    return n * factorial(n - 1);
  };
  // console.log(factorial(5));
  const fibonachi = (n) => {
    //1,1,2,3,5,8,13,21
    if (n === 1 || n === 2) {
      return 1;
    }
    return fibonachi(n - 1) + fibonachi(n - 2);
  };
  // console.log(fibonachi(16))
  // const array: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const array: number[] = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ].sort(() => Math.random() - 0.5);
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
  const result = quickSort(array);
  console.log(result);
  console.log(count);
}
quickSortExample();
//@ts-ignore *Повторяющаяся реализация функции
function breadthFirstSearchExamples(): void {
  const graph: Record<string, string[]> = {};
  graph.a = ["b", "c"];
  graph.b = ["f"];
  graph.c = ["d", "e"];
  graph.d = ["f"];
  graph.e = ["f"];
  graph.f = ["g"];
  function breadthFirstSearch(graph, start, end): boolean {
    //* существует ли путь от вершини start до вершины end
    let queue = [];
    queue.push(start);
    while (queue.length > 0) {
      const current = queue.shift();
      if (!graph[current]) {
        graph[current] = [];
      }
      if (graph[current].includes(end)) {
        return true;
      } else {
        queue = [...queue, ...graph[current]];
      }
    }
    return false;
  }
  const isbreadthFirstSearch = breadthFirstSearch(graph, "a", "g");
  console.log(isbreadthFirstSearch);
}
breadthFirstSearchExamples();
function dijkstraAlgorithmExample(): void {
  let maxValue = 1000000;
  const graph: Record<string, Record<string, number>> = {};
  graph.a = { b: 2, c: 1 };
  graph.b = { f: 7 };
  graph.c = { d: 5, e: 2 };
  graph.d = { f: 2 };
  graph.e = { f: 1 };
  graph.f = { g: 1 };
  graph.g = {};
  function dijkstraAlgorithm(graph, start, end) {
    //* за какую минимальную стоимость можно добраться до end
    //* и с какой минимальной стоимостью можно добраться до каждого узла
    const costs = {};
    const processed = [];
    let neighbors = {};
    const findNodeLowestCost = (costs, processed): number => {
      let lowestCost = maxValue;
      let lowestNode;
      Object.keys(costs).forEach((node) => {
        let cost = costs[node];
        if (cost < lowestCost && !processed.includes(node)) {
          lowestCost = cost;
          lowestNode = node;
        }
      });
      return lowestNode;
    };
    Object.keys(graph).forEach((node) => {
      if (node !== start) {
        let value = graph[start][node];
        costs[node] = value || maxValue;
      }
    });
    let node = findNodeLowestCost(costs, processed);
    console.log(node);
    while (node) {
      const cost = costs[node];
      neighbors = graph[node];
      Object.keys(neighbors).forEach((neighbor) => {
        let newCost = cost + neighbors[neighbor];
        if (newCost < costs[neighbor]) {
          costs[neighbor] = newCost;
        }
      });
      processed.push(node);
      node = findNodeLowestCost(costs, processed);
    }
    return { costs, costsEnd: { [end]: costs[end] } };
  }
  const { costs, costsEnd } = dijkstraAlgorithm(graph, "a", "g");
  console.log(costs, costsEnd);
}
dijkstraAlgorithmExample();
function binaryTreeExample(): void {
    const tree = [
        {
            v: 5,
            c: [
                {
                    v: 10,
                    c: [
                        {
                            v: 11,
                        },
                    ],
                },
                {
                    v: 7,
                    c: [
                        {
                            v: 5,
                            c: [
                                {
                                    v: 1,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            v: 5,
            c: [
                {
                    v: 10,
                },
                {
                    v: 15,
                },
            ],
        },
    ];
    function binaryTreeRecursive(tree) {
        //* рекурсивно пробегаемся по дереву и считаем сумму всех узлов
        let sum = 0;
        tree.forEach((node) => {
            sum += node.v;
            if (!node.c) {
                return node.v;
            }
            sum += binaryTreeRecursive(node.c);
        });
        return sum;
    }
    const value = binaryTreeRecursive(tree); // *69
    console.log(value);
    function binaryTreeIteration(tree) {
        //* делаем тоже самое только итеративно
        if (!tree.length) {
            return 0;
        }
        let sum = 0;
        let stack = [];

        tree.forEach((node) => {
            stack.push(node);
        });
        while (stack.length) {
            const node = stack.pop();
            sum += node.v;
            if (node.c) {
                node.c.forEach((child) => stack.push(child));
            }
        }
        return sum;
    }
    const valueIter = binaryTreeIteration(tree);//* 69
    console.log(valueIter)
}
binaryTreeExample();
