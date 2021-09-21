const spinner = ['\r|','\r/','\r-','\r\\','\r|','\r/','\r-','\r\\']

const spinner2 = function() {
  let timer = 0;
  for (const spin of spinner) {
    timer += 100;
    setTimeout(() => {
      process.stdout.write(spin);
    }, timer);
  }
};

spinner2();
