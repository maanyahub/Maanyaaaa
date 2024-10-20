document.addEventListener("DOMContentLoaded", function() {
    const typewriterText = "Dear Maanya, \n\nFrom the moment we met on Twitter, every moment with you has been filled with love, joy, and laughter. Thank you for always supporting me, forgiving me, and loving me. These past 10 months have been incredible, and I can't wait to share many more with you. You're my inspiration, my light, and my Snoopy! \n\nForever yours, \nShreyansh 💖";
    let i = 0;
    const speed = 100;
    const message = document.getElementById("typewriter");

    function typeWriter() {
        if (i < typewriterText.length) {
            message.innerHTML += typewriterText.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
