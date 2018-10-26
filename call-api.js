var fetch = require("node-fetch");
async function callApi(arr, map) {
    arr = arr || [1]; // on first call create new map and make its value with 1
    map = map || new Map(); // on first call create new hash map
    for (let i = 0; i < arr.length; i++) {
        const id = arr[i];
        const url = `https://api.miconnexdev.com/test/${arr[i]}`; // create url variable 
        try {
            if (!map.get(id)) // to memoize 
            {
                const rs = await fetch(url); // create request 
                const values = await rs.json(); // convert response to json
                map.set(arr[i], values.value); //set value of request id on map  
                if (values.children && values.children.length > 0) {
                    // check if request has children
                    await callApi(values.children, map);
                }
            }

        } catch (err) {
            // log this err
            console.log(err);
        }
    }
    return map
}

const getAverage = async () => {
    return callApi().then(map => {
        let values = [...map.values()]; // convert map values to array 
        const sum = values.reduce((sum, item) => {
            return sum + item
        }, 0); //get array summation 

        return (sum / values.length) // calculate average 
    })
}

getAverage().then((rs) =>
    console.log(rs)
)