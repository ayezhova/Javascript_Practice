<h1>Javascript Practice</h1>
<h3>Check if Parentheses String Valid</h3>


We will be passed a string, containing on of three characters: `( * )`. Given this string, we need to check if it is a valid set of
parentheses. Now, we know a `()` are a pair and 'resolve' each other, which we conside to be two parentheses that have found their pair. 
So, '()' is resolved, and '()(' is not. The trouble comes with the wildcard : `*`. It can be considered as a `(`, thus resolving '\*)', as 
a `)`, thus resolving '\*)', or as just an empty string, as in the valid string '(\*)'.

<h4><i>Here is out approach:</i></h4>
We know that a closed parenthesis will resolve a preceading open parenthesis, even before we tap into our bank of spare '\*'. So, we are going to:

1. Walk through the string one time, resolving any of those quick fixes.
    + We'll need some place to store any unresolved parenthesis and the stars that we will use later, so anytime we come across a character without a quick fix, we'll push its index into a corresponding 'open', 'closed', or 'star' array.
2. Compare our unresolved parenthesis to our possible wildcards.
    + We know that `*` will only resolve `)` that come <b>before</b> it, so if we get to a `)` without a possible star to fix it in our bank of stars, the string is invalid and we will return <i>false</i>.
    + We know that `*` will only resolve `(` that come <b>after</b> it, so if we get to a `(`, we will remember that we found it in a variable that keeps track of the number of `(` still unresolved.
    + If we get to a `*`, we might use it to resolve a `(`, if we've come across one, thus decreasing the variable keeping track of `(` that are still unresolved. Or, we might use the `*` in the future, to resolve a `)`, so we'll remember we saw this `*`, and keep it in our bank of `*`'s.
3. Now we check! Do we still have any unresolved `(`? If so, we return <i>false</i> - the string is invalid. Otherwise, horray! We'll return <i>true</i> for the valid string.

<h4>Conclusion</h4>
This whole process is going to take O(n) time - we're walking through our string once, and then walking through the indexes a second time to check for unresolved parenthesis. We are also using O(n) space - in the event we have a string such as '((((((...' n times, we are going to need to store n indexes in our 'open' array.
