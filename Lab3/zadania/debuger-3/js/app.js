let sum = 0;
users.forEach(user => {
    if(typeof user.payment === 'string'){
        user.payment = parseInt(user.payment);
    }else{
        sum += user.payment;
    }
})
console.log(`Zarobki wszystkich użytkowników: ${sum}`);