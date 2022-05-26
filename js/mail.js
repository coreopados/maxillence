// проверяем, что заполнены все поля. Если да - отправляем форму
$('form').submit(function (event) {
	// отменяем отправку формы по событию submit
	event.preventDefault();

	// записываем конкретно эту форму в переменную
	var form = $(this);

	// убираем возможные предыдущие сообщения об успехе/ошибках
	// form.parent().find('.success').hide();
	// form.parent().find('.error').hide();

	// сначала ошибок нет
	var error = 0;

	// ищем инпуты, которые должны быть заполнены, в форме и перебираем их
	form.find('input[name="name"],  input[name="email"]').each(function () {
		// текущий инпут в цикле
		var input = $(this);
		input.removeClass('wrong-field');
		input.next().hide()
		if (input.val() == '') {
			input.addClass('wrong-field');
			input.next().show()
			// нашли ошибку
			error = 1;
		}
	});

	// есть ошибка
	if (error == 1) {


		// нет ошибок
	} else {
		$.ajax({
			type: 'POST',
			dataType: 'json',
			url: './js/mail.php', // путь к обработчику
			data: form.serialize(),
			success: function (message) {
				if (message == 'ok') {
					form.trigger('reset'); // очищаем поля формы

					// здесь делаем что-то на свое усмотрение

					$('.popup-form').removeClass('show')
					$('.thanks').addClass('show')

					// здесь делаем что-то на свое усмотрение

					// ошибка отправки формы
				} else if (message == 'err') {
					alert('Не отправилось сообщение!');
				}
			},
			// ошибка json
			error: function () {
				alert('Ошибка данных!');
			},
		});
	}
});