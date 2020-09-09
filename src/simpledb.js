/*
** Class to work with an Array of objects
*/

class SimpleDB {

    constructor( listOfObjects ) {
        if (listOfObjects instanceof Array) {
            this.list = listOfObjects;
        } else {
            throw new TypeError("listOfObjects is not an array.");
        }
    }

    Count(){
        /*
        ** How many items are in the list?
        */

        return this.list.length;
    }

    Keys() {
        /*
        ** Assuming all the items in the list have the same keys
        ** what are the available keys?
        **
        ** if the list is empty, return the emtpy list.
        */

        return this.list.length && Object.keys(this.list[0]) || [];
    }

    Filter( predicate ) {
        /*
        ** which items in the DB return true for this predicate?
        */

        return this.list.filter( predicate );
    }

    Search (predicate) {
        /*
        ** Return the first element of this list matching the
        ** predicate or null if there is no match.
        */

        let result = this.list.findIndex(predicate);
        return (result != -1 && this.list[result]) || null;
    }

    Map( operation ) {
        /*
        ** Return a list consisting of the operation acting on each
        ** element of the current list.
        */
        return this.list.map( operation );
    
    }

    Add( anObject ) {
        /*
        ** Add an object to the DB.
        */
        this.list.push(anObject);
    }

    FindIndex( predicate ) {
        /*
        ** Return index of first element for which the predicate returns a truthy value.
        */        
        return this.list.findIndex(predicate);
    }

    Sort( comp ) {
        /*
        ** Sort the objects using the comparison function.
        */

        this.list.sort( comp )
    }

    Delete( predicate ) {
        /*
        ** Delete the first item in the list for which the predicate returns
        ** a truthy value.
        */

        let result = this.FindIndex(predicate);
        if (result != -1) {
            this.list.splice(result, 1)
        }
    }

    List() {
        /*
        ** Return a copy of the list.
        */

        return this.list.slice();
    }

    InsertAt(index, anObj) {
        /*
        ** Insert an object at the given index.
        */

        this.list.splice(index, 0, anObj);
    }

    ObjectAt( index ) {
        /*
        ** Return the object at the given index.
        */

        return this.list[index];
    }
}

export { SimpleDB }
