"use strict";
Algorithm removeDuplicates(L)
    Input array L
    Output new List, M containing all distinct Items 
    
    M new list
    for i<-0 to L.size -1 do 
        if not M.contains(l[i]) then 
            M.add(L[i])

    return M