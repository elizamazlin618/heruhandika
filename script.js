/* =========================
   LOADING SCREEN
========================= */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {
        loader.classList.add("hide");
    }, 1800);

});


/* =========================
   CURSOR GLOW
========================= */

const cursorGlow =
    document.querySelector(".cursor-glow");

document.addEventListener("mousemove", function (e) {

    if (cursorGlow) {

        cursorGlow.style.left =
            e.clientX + "px";

        cursorGlow.style.top =
            e.clientY + "px";

    }

});


/* =========================
   SCROLL REVEAL
========================= */

const reveals =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },
        {
            threshold: 0.15
        }
    );

reveals.forEach(function (element) {

    observer.observe(element);

});


/* =========================
   HERO BUTTON
========================= */

const startButton =
    document.getElementById("startButton");

if (startButton) {

    startButton.addEventListener(
        "click",
        function () {

            document
                .getElementById("message")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

}

const openVideo = document.getElementById("openVideo");
const closeVideo = document.getElementById("closeVideo");
const videoPopup = document.getElementById("videoPopup");
const myVideo = document.getElementById("myVideo");

openVideo.addEventListener("click", () => {
    videoPopup.classList.add("active");

    myVideo.currentTime = 0;

    myVideo.play().catch(() => {
        console.log("Browser meminta user menekan tombol play.");
    });
});

closeVideo.addEventListener("click", () => {
    videoPopup.classList.remove("active");

    myVideo.pause();
    myVideo.currentTime = 0;
});

videoPopup.addEventListener("click", (e) => {
    if (e.target === videoPopup) {
        videoPopup.classList.remove("active");

        myVideo.pause();
        myVideo.currentTime = 0;
    }
});

/* =========================
   RANDOM MESSAGES
========================= */

const messages = [

    "Aku kangen kamu. Sesimpel itu.",

    "Heruhandika, yang aku pengen sekarang cuma satu: ketemu kamu.",

    "Jarak ini nyebelin. Karena aku nggak bisa tiba-tiba datang buat meluk kamu.",

    "Aku kangen suara kamu yang asli. Bukan cuma dari speaker.",

    "Kadang aku cuma pengen duduk sebelahan sama kamu. Nggak harus ngapa-ngapain.",

    "Kalau kamu lagi capek, inget ya... ada aku yang selalu dukung kamu dari jauh.",

    "Aku punya banyak cerita buat kamu. Jadi cepet ketemu, ya.",

    "Nanti kalau kita ketemu, jangan heran kalau aku nggak mau jauh-jauh.",

    "Dan pesan terakhirnya... aku kangen kamu banget, Heruhandika."

];


let currentMessage = 0;

const messageText =
    document.getElementById("messageText");

const messageButton =
    document.getElementById("messageButton");

const messageCount =
    document.getElementById("messageCount");


if (messageButton) {

    messageButton.addEventListener(
        "click",
        function () {

            currentMessage++;

            if (
                currentMessage >= messages.length
            ) {

                currentMessage = 0;

            }

            messageText.style.opacity = "0";

            messageText.style.transform =
                "translateY(20px)";

            setTimeout(function () {

                messageText.textContent =
                    messages[currentMessage];

                messageText.style.opacity = "1";

                messageText.style.transform =
                    "translateY(0)";

                messageCount.textContent =
                    String(
                        currentMessage + 1
                    ).padStart(2, "0");

            }, 300);

        }
    );

}


/* =========================
   PARALLAX SPOTLIGHT
========================= */

document.addEventListener(
    "scroll",
    function () {

        const scrollY =
            window.scrollY;

        const spotlight =
            document.querySelector(".spotlight");

        if (spotlight) {

            spotlight.style.transform =
                `translateY(${scrollY * 0.08}px)`;

        }

    }
);