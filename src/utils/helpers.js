//returns num b/t 1-9 inclusive
export function getRandomNum() {
    return Math.floor(Math.random() * (9)) + 1;
  }
  
  //removes last elem from arr and returns the new arr
export function removeLastElem(arr) {
    let filtered = arr.filter( (num, index) => {
      return index !== arr.length - 1;
    })
    return filtered;
  }
  
export function getRemainingNum(winCombo, sharedNums) {
      //filters the winning combo out for used up nums to get remaining num that would complete the combo ex. [4, 5, 6] and [5, 6] ---> 4
      let filter = winCombo.filter(num => {
        return !sharedNums.includes(num)
    })
    let remainingNum = filter[0];
    return remainingNum;
  }
  
export function getSharedNums(arr1, arr2) {
    //Stores nums shared between the combo and X Moves ex. combo: [5, 4, 6] and xMoves: [2, 3, 4, 6] => [4,6]
    let sharedNums = [];
    //Compare the nums in winCombo with X's moves
    arr2.forEach(num => {
      if (arr1.includes(num)) {
        sharedNums.push(num);
      }
    })
    return sharedNums;
  }