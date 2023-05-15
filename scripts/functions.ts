async function* getIndex() {
    for (let idx = 0; idx < 10; idx++) {
        await new Promise(r => setTimeout(r, 2000));
        yield idx;
    }
}