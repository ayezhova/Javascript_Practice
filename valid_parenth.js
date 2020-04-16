var checkValidString = function(s) {
    //set up 3 arrays for 'unresolved' '(', ')', '*'
    let len = s.length;
    let open = new Array(0);
    let close = new Array(0);
    let star = new Array(0);
    
    //go through string. any 'unresolved' parentheses will be left in the arrays
    for (let i = 0; i < len; i++){
        if (s[i] == '(')
            open.push(i);
        else if (s[i] == ')'){
            if (open.length > 0)
                //remove last element of open
                open.pop(open.length - 1)
            else
                close.push(i);
        }
        else if (s[i] == '*')
            star.push(i);
    }

    //resolve any remaining parenth against the 'bank' of stars
    let bank = 0;
    let still_open = 0;
    if (open.length || close.length)
    {
        for (let i = 0; i < len; i++)
        {
            if(open.indexOf(i) > -1)
                still_open++;
            else if (star.indexOf(i) > -1){
                if (still_open > 0)
                    still_open--;
                else
                    bank++;
            }
            else if (close.indexOf(i) > -1){
                if (bank > 0)
                    bank--;
                else
                    return false;
            }
        }
    }
    //if still_open > 0, then we went into the loop, but werent able to resolve all open parenth - return false
    //if still_open == 0, then either was already even before loop, or were able to resolve all with *'s
    return !(still_open > 0);
};

console.log(checkValidString("()")); //true
console.log(checkValidString("(*))(((***)))")); //true
console.log(checkValidString(")(")); //false