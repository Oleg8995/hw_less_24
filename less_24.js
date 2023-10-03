// *********************************** LESS 24 *********************************************

// # 1 Timeout

const printNumber = (endNumber) => {
    
    let i = 1;

    setTimeout(function print() {

        console.log(i);

        if ( i > 0 && i < endNumber ) {
            
            setTimeout(print, 1000);
        }
        i++;

    }, 1000);
    
};

// ***************var 2 ******************

const printNumber2 = (endNumber) => {
    
    let i = 1;

   const timerId = setInterval(() => {
    console.log(i);
    if ( i === endNumber ) {
        clearInterval(timerId);
    }
    i++;
   }, 1000);
    
};

printNumber(5);
printNumber2(5);

// ===========================================================================

// # 2 Delayed loop

const delayedLoop = async() => {

    for (let i = 1; i <= 5; i++) {
        console.log(i);
        if (i < 5) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
};

delayedLoop();

// ===========================================================================

// # 3 Random

const randomPromise = () => {
  let promise = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber >= 0.5) {
      resolve(randomNumber);
    } else {
      reject('error!!!');
    }
  });
  return promise;
};
  
randomPromise().then(
  function(done) {
    console.log(done);
  },
  function(error) {
    console.log(error);
  }
)
  

// ===========================================================================

// # 4 Server

const users = [
    {
      id: 1,
      name: "Oleg",
      age: 30,
      movies: [],
    },
    {
      id: 2,
      name: "Kate",
      age: 45,
      movies: ["Titanic", "Avatar"],
    },
];
  
const getUserData = (id) => {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      let userFound = false;

      users.forEach((item) => {
        if ( item.id === id ) {
          userFound = true;
          resolve(item);
        }
       
      });

      if (!userFound) {
        reject('404 not found');
      }

    }, 1000);
  });

};

getUserData(2)
  .then((user) => {
    console.log(user);
})
.catch((error) => {
  console.log(error);
})




