(d => {

    let last = 0;

    let loop = time => {
        let dt = time - last;
        last = time;
        console.log("Total time:", time, "Time since last loop", dt);

        // animation code here

        requestAnimationFrame(loop);
    };

    loop(0);

})(document);