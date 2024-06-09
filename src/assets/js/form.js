        document.addEventListener("DOMContentLoaded", function() {
            const form = document.getElementById("feedbackForm");
            $("#phone").mask("+7 (999) 999-99-99");//подключение маски: jquery.maskedinput.js
            form.addEventListener("submit", function(event) {
                event.preventDefault();
                // Остальной код обработки формы остается без изменений
                const name = document.getElementById("name").value;
                const address = document.getElementById("address").value;
                const phone = document.getElementById("phone").value;
                const message = document.getElementById("message").value;
                // Отправка данных на сервер
                const formData = new FormData(form);
                fetch("send_feedback.php", {
                    method: "POST",
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    if (data.status === "success") {
                        alert("Сообщение успешно отправлено!");
                    } else {
                        alert("Произошла ошибка при отправке сообщения.");
                    }
                })
                .catch(error => {
                    console.error("Ошибка при отправке запроса:", error);
                    alert("Произошла ошибка при отправке запроса.");
                });
            });
        });