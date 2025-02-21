//Create sleep function which can stop for loop for given amount of time

function sleep(milisecond) {
  return new Promise((resolve) => setTimeout(resolve, milisecond));
}

async function running() {
  for (let i = 0; i < 10; i++) {
    console.log(i);

    await sleep(1000);
  }
}

running();
