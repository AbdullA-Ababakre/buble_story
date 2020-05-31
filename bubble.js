(function () {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const random = (min, max) => {
        return min + Math.random() * (max - min);
    };

    const bubbles = [
        {
            x: 50,
            y: windowHeight + 50,
            vx: 3,
            vy: -2.5,
            width: 90,
            height: 90,
            // animate: 'leaf',
            animate: "shuttle",
            bg: "leaf",
            title: "2018/10---   wechat signature",
            content: "All adversity carries a lesson and a blessing!",
            times: 0,
        },
        {
            x: 240,
            y: windowHeight + 50,
            vx: 3,
            vy: -2,
            width: 70,
            height: 70,
            animate: "shuttle",
            bg: "sky",
            title: "2017/03 Urumqi",
            content:
                "what will u do if u cannot go to Canada?.....I will take risk.",
            times: 0,
        },
        {
            x: 100,
            y: windowHeight + 50,
            vx: 1.5,
            vy: -1.8,
            width: 50,
            height: 50,
            // animate: 'station',
            animate: "shuttle",
            bg: "station",
            title: "2017/03 wechat profile",
            content: "one pic of u + stay good and be strong ",
            times: 0,
        },
    ];

    bubbles.forEach((item) => {
        if (item.manual) {
            item.initialX = item.x;
            item.initialY = item.y;
            item.minY = -item.height;
            item.maxY = windowHeight + item.height;

            return;
        }

        item.width = random(60, 110);
        item.height = item.width;
        item.x = random(10, windowWidth - item.width - 10);
        item.y = random(windowHeight, windowHeight * 1.5);
        item.minY = -item.height;
        item.maxY = windowHeight + item.height;
        item.vy = random(-2.5, -0.5);
        item.initialX = item.x;
        item.initialY = item.y;
    });

    window.bubbles = bubbles;
})();
