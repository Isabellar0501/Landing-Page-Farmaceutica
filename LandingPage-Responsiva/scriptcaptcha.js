document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('captcha');
    var ctx = canvas.getContext('2d');
    var captchaStatus = document.getElementById('captcha-status');

    function initCaptcha() {
        var captchaText = generateCaptchaText(6);
        drawCaptcha(captchaText);

        
        document.getElementById('reload-captcha').addEventListener('click', function () {
            refreshCaptcha();
        });

        
        document.getElementById('check-captcha').addEventListener('click', function () {
            verifyCaptcha(captchaText);
        });
    }

    function refreshCaptcha() {
        var captchaText = generateCaptchaText(6);
        drawCaptcha(captchaText);
        document.getElementById('captcha-input').value = '';
        captchaStatus.textContent = 'Aguardando...';
    }

    function verifyCaptcha(captchaText) {
        var inputText = document.getElementById('captcha-input').value.toLowerCase();

        if (inputText === captchaText.toLowerCase()) {
            captchaStatus.textContent = 'Captcha verificado corretamente!';
            captchaStatus.style.color = 'green';
        } else if (inputText.length < 6) {
            captchaStatus.textContent = 'Digite todos os caracteres!';
            captchaStatus.style.color = 'red';
        } else {
            captchaStatus.textContent = 'Incorreto, tente novamente!';
            captchaStatus.style.color = 'red';
        }
        setTimeout(function () {
            captchaStatus.textContent = 'Aguardando...';
            captchaStatus.style.color = 'black';
            document.getElementById('captcha-input').value = '';
        refreshCaptcha();
        }, 3000);
    }

    function generateCaptchaText(length) {
        var result = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charsLength = chars.length;
        for (var i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * charsLength));
        }
        return result;
    }

    function drawCaptcha(text) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#f3f3f3';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        addNoise(ctx);
        ctx.fillStyle = '#000000';
        ctx.font = '20px Arial';

        
        var textWidth = ctx.measureText(text).width;
        var startX = (canvas.width - textWidth) / 3;

        
        for (var i = 0; i < text.length; i++) {
            ctx.save();
            ctx.translate(startX + i * 20, 30);
            ctx.rotate((Math.random() - 0.5) * 0.4);
            ctx.fillText(text[i], 0, 0);
            ctx.restore();
        }
    }

    function addNoise(ctx) {
        var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var pixels = imageData.data;
        for (var i = 0; i < pixels.length; i += 1) {
            var color = Math.random() > 0.5 ? 255 : 0;
            pixels[i] = pixels[i + 1] = pixels[i + 2] = color;
        }
        ctx.putImageData(imageData, 0, 0);
    }

    initCaptcha();
});