function getUniqueItems(arr, key) {

    let res = arr.reduce((acc,item)=>{
        if(item[key]){
            acc.push(item[key])
        }
        return acc
    },[])
    return [...new Set(res)]
}

module.exports = getUniqueItems