function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const dogWalked = true;
            if(dogWalked){
                resolve("You walk the dog");
            }
            else{
                reject("You didn't walk the dog");
            }
        }, 1500);
    });
}
function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("You clean the kitchen");
            }
            else{
                reject("You didn't clean the kitchen");
            }
        }, 2500);
    });
}
function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const trashTakenOut = false;
            if(trashTakenOut){
                resolve("You take out the trash");
            }
            else{
                reject("You didn't take out the trash");
            }
        }, 500);
    });
}

async function doChores(){
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
        console.log("Finished");
    }
    catch(error){
        console.error("You didn't walk the dog");
    }
}

doChores();

/*
walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("Finished");})
         .catch(error => console.error(error));
*/

/* 
walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => console.log("Finished"));
    });
}); 
*/