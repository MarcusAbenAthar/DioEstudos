async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida');
        }, 3000);
    });
    const resolved = await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou!')
        .catch((err) => console.log(err.message));
    return resolved;
}

// com try...catch

async function resolvePromiseTryCatch() {
    const myPromiseTryCatch = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvido Try Catch');
        }, 3000);
    });
    let resultTryCatch
    try {
        resultTryCatch = await myPromiseTryCatch
            .then((resultTryCatch) => resultTryCatch + 'passando pelo then trycatch')
            .then((resultTryCatch) => resultTryCatch + 'e agora acabou trycatch')
    } catch (e) {
        resultTryCatch = e.message;
    }
    return resultTryCatch;
}