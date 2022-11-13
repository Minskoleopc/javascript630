
// for 

// for(intilization ; conditionCheck ; increment/decrement){
//     // statements
// }

for(let i = 1 ; i < 4 ; i++){ // 2 // 3 // 4
    //console.log('hello')
    console.log(i) // 1 , 2 ,3
}

// print 3 to 1
for(let i = 3 ; i >= 1 ; i--){
    console.log(i)
}
// table of two 
for(let i = 2 ; i <=20 ; i = i + 2){
    console.log(i)
}

for(let i = 1 ; i <= 5 ; i++){ // 2 // 3
    console.log(i) //1 // 2 // 3
    if(i == 3){
       break
    }
}
// continue statement

for(let i = 0 ; i < 5 ; i++){ //1 //2 // 3 // 4 // 5
    if(i == 3){
        continue;
    }
    console.log(i) // 0 //1 // 2 // 4
}

for(let i = 1 ; i < 3 ;i++){ // 2 // 3
    if(i == 2){
        continue;
    }
    console.log(i); //1
}
//------------------------------------------------
// while loop
// intialzation 
// while(condition){
//     // statement 
//     // increment / decrement
// }

let i1 = 1
while(i1 <= 5){
    console.log(i1) // 1 2 3 // 4 // 5
    i1 ++;  // 2 // 3 // 4 // 5 // 6
}



let i2 = 5
while(i2 >= 1){
    console.log(i2) // 5 // 4 // 3 // 2 // 1
    i2 -- // 4 // 3 // 2 // 1 // 0
}

let i3 = 2
while(i3 <= 20){
    console.log(i3)
    i3 = i3 + 2
}


let i4 = 10
while(i4 >= 1){
    console.log(i4)
    i4--
}


let i5  = 5

while(i5 >= 1){
    if(i5 == 2){
        break
    }
    console.log(i5) // 5 // 4 // 3
    i5 -- // 4 // 3 // 2
}

let i6 = 1
while(i6 <= 5){
    if(i6 == 3){
        i6 ++ // 4
        continue
    }
    console.log(i6) // 1 // 2 // 4 // 5
    i6 ++ // 2 // 3 // 5 //6
}


// ------------------------------------------




























//----------------------------------------------------------------------------




