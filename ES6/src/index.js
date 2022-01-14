const minhaPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("PRONTO");
        }, 2000);

    });
};

console.log("Start");
minhaPromise().then(res => {
    console.log("Exec1", res);
});


async function outraPromise() {
    const res1 = await minhaPromise();
    console.log("Exec2", res1);

}
outraPromise();

const algumaPromise = async () =>{
    const res = await minhaPromise();
    console.log("Exec3", res);
};
algumaPromise();

console.log("End");