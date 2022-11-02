const obj = {
    123: 'Juanito Alcachofa',
    456: 'Juanita Alcaparra',
};

function solution(usersObj){

    
    const usersArray = Object.entries(usersObj)
    const infoArray = [];
    
    usersArray.forEach(order => {

        infoArray.push({
            id: order[0],
            name: order[1],
        })
        
    })
    
    return infoArray
}

solution(obj);

