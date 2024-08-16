function processList(list) {
    // Tworzymy kopię listy, aby zachować oryginalne wartości
    const result = [...list];
    
    // Iterujemy przez listę od końca, zaczynając od przedostatniego elementu
    for (let i = list.length - 2; i >= 0; i -= 2) {
        // Pomnóż co drugą wartość od końca przez 2
        result[i] *= 2;

        // Dostosuj wartość przekraczającą 9
        if (result[i] > 9) {
            result[i] -= 9;
        }
    }

    return result;
}

// Przykład
const list = [1, 2, 3, 4, 5, 6];
const processedList = processList(list);

console.log(processedList); // [1, 4, 3, 8, 5, 6]