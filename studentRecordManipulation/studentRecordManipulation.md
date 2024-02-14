Challenge Description

In this challenge, the task is to implement a function manipulateStudentRecord that:

    Takes 4 arguments: an object literal obj, a string operation that is either "delete" or "edit," a string prop, and a string newValue.
    Returns a value depending on the operation:
        If the operation is 'delete', then it returns a new object literal with the same properties and their values as obj has, except that if obj has the property prop, then this property must not be in the returned object literal. In this case, the parameter newValue would be undefined.
        If the operation is 'edit', then it returns a new object literal with the same properties and their values as obj has, except that if obj has the property prop, then this property value must be updated to the newValue parameter.

Your implementation of the function will be tested by a provided code stub on several input files. Each input file contains parameters for the function call. The function will be called with those parameters, and the result of its execution will be printed to the standard output by the provided code. The provided code prints the properties of the returned object ordered by their names.
Input Format For Custom Testing

The first line contains an integer, n, denoting the number of properties obj has. Each line i of the n subsequent lines (where 0 ≤ i < n) contains two space-separated values. The first of them is a string denoting the property of obj, and the second one is the value of that property. The last line contains string values for modification for obj in the format {operation} {prop} {newValue}.
Sample Case 0
Sample Input For Custom Testing

3 
name John 
lastName Bliss 
city Florida 
edit city Seattle

Sample Output

city Seattle 
lastName Bliss 
name John

Explanation

In this test, obj has 3 properties: name, lastName, and city. The property to edit is city, so the returned object literal contains the value 'Seattle' for the property city, while the other two properties are the same as in obj.
Sample Case 1
Sample Input For Custom Testing

arduino

3 
name John 
lastName Bliss 
city Florida 
delete city

Sample Output

lastName Bliss 
name John

Explanation

In this test, obj has 3 properties: name, lastName, and city. The property to delete is city, so the returned object literal contains properties name and lastName but does not contain city as that has been deleted.
Sample Case 2
Sample Input For Custom Testing

3 
name John 
lastName Bliss 
city Florida 
edit abc Tor

Sample Output

city Florida 
lastName Bliss 
name John

Explanation

In this test, obj has 3 properties: name, lastName, and city. The property to edit is 'abc', which does not exist, so the returned object literal is the same as the input.