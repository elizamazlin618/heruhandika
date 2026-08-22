document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       LOADER
    ========================================================= */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader?.classList.add("hide");
        }, 700);
    });


    /* =========================================================
       START BUTTON
    ========================================================= */

    const startButton = document.getElementById("startButton");

    startButton?.addEventListener("click", () => {
        const messageSection = document.getElementById("message");

        if (messageSection) {
            messageSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });


    /* =========================================================
       SCROLL REVEAL
    ========================================================= */

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add("active");
        });

    }


    /* =========================================================
       CURSOR GLOW — DESKTOP ONLY
    ========================================================= */

    const cursorGlow = document.querySelector(".cursor-glow");

    const desktopPointer =
        window.matchMedia("(hover:hover) and (pointer:fine)");

    if (cursorGlow && desktopPointer.matches) {

        let mouseX = 0;
        let mouseY = 0;

        let currentX = 0;
        let currentY = 0;

        window.addEventListener(
            "mousemove",
            (event) => {
                mouseX = event.clientX;
                mouseY = event.clientY;
            },
            { passive: true }
        );

        function animateCursor() {

            currentX += (mouseX - currentX) * 0.08;
            currentY += (mouseY - currentY) * 0.08;

            cursorGlow.style.left = `${currentX}px`;
            cursorGlow.style.top = `${currentY}px`;

            requestAnimationFrame(animateCursor);
        }

        animateCursor();

    } else if (cursorGlow) {

        cursorGlow.remove();

    }


    /* =========================================================
       INTERACTIVE MESSAGE
    ========================================================= */

    const messageButton = document.getElementById("messageButton");
    const messageText = document.getElementById("messageText");
    const messageCount = document.getElementById("messageCount");

    const messages = [
    "Heru Handika, sayangku.",

    "Manisku, cowokku, kesayanganku.",

    "Kamu adalah orang ketiga yang paling aku sayang.",

    "Setelah ayah dan kakekku, kamu salah satu yang paling aku cinta,.",

    "Sayangkuuu... aku kangen banget sama kamu.",

    "Aku pengen banget ketemu sama kamu, sayang.",

    "Aku pengen peluk kamu, pengen cium kamu, pengen rasain kamu ada di dekat aku.",

    "Andai sayang tahu seberapa sering aku nungguin kamu.",

    "Tiap hari aku masih menghitung hari di kalender, sambil berharap hari kita ketemu semakin dekat.",

    "Kadang aku lihat kalender lama banget, sampai tanpa sadar air mata aku jatuh.",

    "Aku juga sering tiba-tiba nangis waktu lagi salat, karena kepikiran kamu.",

    "Lagi kerja di kantor pun kadang aku tiba-tiba nangis karena kangen kamu.",

    "Padahal aku lagi berusaha fokus kerja, tapi tiba-tiba pikiran aku pergi ke kamu.",

    "Kadang aku cuma diam sambil lihat HP, berharap tiba-tiba nama kamu muncul.",

    "Berharap tiba-tiba kamu kasih kabar.",

    "Berharap tiba-tiba kamu bilang kalau kamu juga kangen.",

    "Aku sering bertanya-tanya, kapan ya kita bisa ketemu lagi?",

    "Aku masih nungguin kamu, sayang.",

    "Walaupun aku nggak tahu kapan kamu akan datang.",

    "Walaupun aku nggak tahu kapan kita bisa ketemu lagi.",

    "Aku tetap berharap suatu hari nanti kamu tiba-tiba muncul.",

    "Tiba-tiba bilang kalau kamu kangen aku juga.",

    "Tiba-tiba bilang kalau kamu pengen ketemu aku.",

    "Karena sejujurnya, aku cuma pengen satu hal.",

    "Aku pengen ketemu kamu dan peluk kamu lama banget.",

    "Aku kangen kamu setiap hari.",

    "Kangen kamu setiap malam.",

    "Kangen kamu bahkan di saat-saat yang nggak terduga.",

    "Dan sampai sekarang...",

    "aku masih nunggu kamu.",

    "Masih menghitung hari sampai kita ketemu.",

    "Masih berharap kamu datang.",

    "Masih berharap kamu kasih kabar.",

    "Masih berharap kita bisa ketemu lagi.",

    "Heru Handika, sayangku...",

    "Kalau kamu tahu aku sekangen ini sama kamu.",

    "Aku cuma pengen kamu tahu satu hal.",

    "Aku masih di sini.",

    "Masih kangen.",

    "Masih nunggu kamu.",

    "Dan masih sayang kamu."
];

    let currentMessage = 0;
    let isChangingMessage = false;

    function showMessage(index) {

        if (!messageText || !messageCount) return;

        const newText = messages[index];

        messageText.style.opacity = "0";
        messageText.style.transform = "translateY(12px)";

        setTimeout(() => {

            messageText.textContent = newText;

            messageCount.textContent =
                String(index + 1).padStart(2, "0");

            messageText.style.opacity = "1";
            messageText.style.transform = "translateY(0)";

        }, 220);
    }

    messageButton?.addEventListener("click", () => {

        if (isChangingMessage) return;

        isChangingMessage = true;

        currentMessage++;

        if (currentMessage >= messages.length) {
            currentMessage = 0;
        }

        showMessage(currentMessage);

        setTimeout(() => {
            isChangingMessage = false;
        }, 450);

    });


    /* =========================================================
       VIDEO
       Pastikan hanya video yang sedang dimainkan
       yang aktif.
    ========================================================= */

    const videos = document.querySelectorAll(".our-video");

    videos.forEach((video) => {

        video.addEventListener("play", () => {

            videos.forEach((otherVideo) => {

                if (otherVideo !== video) {
                    otherVideo.pause();
                }

            });

        });

    });


    /* =========================================================
       PAUSE VIDEO SAAT KELUAR VIEW
       Supaya HP lebih ringan.
    ========================================================= */

    if ("IntersectionObserver" in window && videos.length) {

        const videoObserver = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    const video = entry.target;

                    if (!entry.isIntersecting && !video.paused) {
                        video.pause();
                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        videos.forEach((video) => {
            videoObserver.observe(video);
        });

    }


    /* =========================================================
       IMAGE LOAD ERROR
       Kalau foto tidak ditemukan, tetap tampil rapi.
    ========================================================= */

    const images = document.querySelectorAll(".memory-card img");

    images.forEach((image) => {

        image.addEventListener("error", () => {

            image.style.opacity = "0";

            image.parentElement.classList.add("image-error");

        });

    });


    /* =========================================================
       ESCAPE KEY
    ========================================================= */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            videos.forEach((video) => {
                video.pause();
            });

        }

    });


    /* =========================================================
       MOBILE VIDEO OPTIMIZATION
    ========================================================= */

    function optimizeMobileVideos() {

        const isMobile = window.matchMedia(
            "(max-width:700px)"
        ).matches;

        videos.forEach((video) => {

            if (isMobile) {

                video.setAttribute(
                    "playsinline",
                    ""
                );

                video.setAttribute(
                    "preload",
                    "metadata"
                );

            }

        });

    }

    optimizeMobileVideos();

    window.addEventListener(
        "resize",
        optimizeMobileVideos,
        { passive: true }
    );


    /* =========================================================
       PREVENT ACCIDENTAL DOUBLE TAP ZOOM ON BUTTONS
    ========================================================= */

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {

        button.addEventListener(
            "touchstart",
            () => {},
            { passive: true }
        );

    });


    /* =========================================================
       YEAR / PAGE READY
    ========================================================= */

    document.documentElement.classList.add("page-ready");

});