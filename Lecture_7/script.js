console.log(`Task 1`);
class Vec {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    plus (obj) {
        let someVec = new Vec();
        someVec.x = this.x + obj.x;
        someVec.y = this.y + obj.y;
        return someVec;
    }

    minus (obj) {
        let someVec = new Vec();
        someVec.x = this.x - obj.x;
        someVec.y = this.y - obj.y;
        return someVec;
    }

    get length () {
        return(Math.sqrt((this.x * this.x) + (this.y * this.y)));
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);

////////////////////////////////////////////////////////////////////////////////
console.log(`Task 2`);
class Group {
    constructor (value) {
        this.colection = value;
    }

    add (value) {
        if (this.colection.indexOf(value) === -1 ) this.colection.push(value);

    }

    delete  (value) {
        let position = this.colection.indexOf(value);
        if (position !== -1) this.colection.splice(position, 1);
    }


    has (value) {
        console.log(this.colection);
        return (this.colection.indexOf(value) !== -1);

    }

    static from (value) {

        return   new Group(value);
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
group.add(40);
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));


/////////////////////////////////////////////////////////////////////////////
console.log(`Task 3`);

Group.prototype[Symbol.iterator] = function () {
    let position = 0;
    let collection = this.colection;

    return {
        next() {
            if (position < collection.length) {
                position++;
                return {
                    done: false,
                    value: collection[position - 1]

                };
            } else {
                return {
                    done: true
                };
            }

        }

    }
};

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}