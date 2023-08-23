interface DataType {
    name: string;
    id: number;
    value: string | number;
    child: Array<ChildType>;
}

interface ChildType {
    name: string;
    age: number;
}

function doSomething(data : DataType) {
    const age1 = data.child[0].age
    const age2 = data.child[1].age

    return age1 + age2;
}

function doSomething2(data : DataType) {
    const age1 = data.child?.[0]?.age
    const age2 = data.child?.[1]?.age

    return age1 + age2;
}
