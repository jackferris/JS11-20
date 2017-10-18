/**
 * Created by h205p2 on 9/29/17.
 */

function tester() {

    document.getElementById("output").innerHTML = firstLast6([1,3,6]);
    document.getElementById("output").innerHTML = firstLast6([1,3,4]);
    document.getElementById("output1").innerHTML = countYZ('fez day');
    document.getElementById("output1").innerHTML = countYZ('day fez');
    document.getElementById("output2").innerHTML = starOut("abc");
    document.getElementById("output2").innerHTML = starOut("ab*cd");
    document.getElementById("output3").innerHTML = getSandwich("xxbreadyy");
    document.getElementById("output4").innerHTML = canBalance([2,3,4,1,2]);
    document.getElementById("output5").innerHTML = countClumps([1,1,1,1,1]);
    document.getElementById("output6").innerHTML = evenlySpaced(4,6,2);
    //test third method, etc
}

//Jack Ferris, this code returns true if the first value or last value of an array is 6, otherwise it returns false.
function firstLast6(ints){
    if(ints[ints.length - 1] == 6 || ints[0] == 6){
        return true;
    }else{
        return false;
    }

}

//Jack Ferris, this code returns true if an array has either the value 2 or 3 in it, otherwise it returns false.
function has23(ints){

    if(ints[0] == 2 || ints[1] == 2){
        return true;
    }
    if(ints[0] == 3 || ints[1] == 3){
        return true;
    }else{
        return false;
    }
}

//Jack Ferris, if 2,3 appears in the array, this code changes the 3 to a 0.
function fix23(ints){
    if(ints[0] == 2 && ints[1] == 3){
        ints[1] = 0;
        return ints;
    }
    if(ints[1] == 2 && ints[2] == 3){
        ints[2] = 0;
        return ints;
    }else{
        return ints;
    }
}

//Jack Ferris, this code counts how many times z or y are at the end of a word (if there is a space after y or z) in a
// string.
function countYZ(word) {
   word = word.toLowerCase();
    var count = 0;
    //console.log(word[word.length - 1]);
    if (word[word.length - 1] == "y" || word[word.length - 1] == "z") {
        count += 1;
    }
    for (var i = 0; i < word.length; i++) {
        if(word[i] == " ") {

            if(word[i-1] == "y") {
                count += 1;
            }else if(word[i-1] == "z"){
                count += 1;
            }
        }
    }
    return count;
}

//Jack Ferris, this code returns true if the first string appears at the end of the second string, otherwise it returns
// false.
function endOther(word, otherWord){
    word = word.toLowerCase();
    otherWord = otherWord.toLowerCase();

    if(otherWord.endsWith(word)) {
        return true;
    }
    if(word.endsWith(otherWord)){
        return true;
    }
    return false;

}

//Jack Ferris, this code looks for *'s in a string and whenever it finds a * it removes the characters to the left and
// right of the *, and returns the new string.
function starOut(word){
    var answer = "";
    for(var i = 0; i < word.length; i++){
        if(word[i] != "*" && word[i-1] != "*" && word[i+1] != "*"){
            answer += word[i];
        }

    }
    return answer;
}

//Jack Ferris, this code returns whatever is in between the first and last appearance of the word bread.
function getSandwich(sandwich){
    var bread = sandwich.indexOf("bread");
    var last = sandwich.lastIndexOf("bread");
    if(bread == last){
        return "";
    }
    return sandwich.substring(bread + 5, last);
}

//Jack Ferris, this code returns true if there is a way to split the array so that the sum of the values on the left
// equal the sum of the values on the left.
function canBalance(ints){
    var sum1 = 0;
    var sum2 = 0;
    for(var i = 0; i < ints.length; i++){
        sum1 +=  ints[i];
        for(var j=i+1; j < ints.length; j++){
            sum2 += ints[j];
            }
        if(sum1 == sum2){
            return true;
            }
        sum2 = 0;
        }
    return false;
}

//Jack Ferris, this code searches an array for values that are equal and next to each other a "clump" and returns how
// many clumps there are.
function countClumps(ints){
    var count = 0;
    for(var i = 0; i < ints.length ; i++){
        if(ints[i] == ints[i+1]){
            for(var j = i +1; j < ints.length ; j++){
                if(ints[i] != ints[j]){
                    count++;
                    i = j;
                }
            }
            if(count == 0){
                return 1;
            }
        }
    }
    return count;
}

//Jack Ferris, this code returns true if the three values in an array are all the same distance apart or evenly spaced.
function evenlySpaced(a,b,c){
    if(a-b == b-c){
        return true;
    }else if(b-a == a-c){
        return true;
    }else if(a-c == c-b){
        return true;
    }else if(b-c == c-a){
        return true;
    }else if(c-a == a-b){
        return true;
    }else if(c-b == b-a){
        return true;
    }
        return false;

}

