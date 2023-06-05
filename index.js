function main(...args) {
    const [arg0] = args;
    
    if (arg0?.a?.b) {
        console.log('arg0?.a?.b');
        return;
    }

    if (arg0?.a?.b !== undefined) {
        console.log('arg0?.a?.b !== undefined');
        return;
    }
}

main();
