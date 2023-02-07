function filterByKey(arr, key, value) {
    return arr.filter(item => item[key] === value)
}

export { filterByKey }