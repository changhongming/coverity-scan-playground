
function doSomething(data) {
    const age1 = data.child[0].age
    const age2 = data.child[1].age

    return age1 + age2;
}

function doSomething2(data) {
    const age1 = data.child?.[0]?.age
    const age2 = data.child?.[1]?.age

    return age1 + age2;
}
