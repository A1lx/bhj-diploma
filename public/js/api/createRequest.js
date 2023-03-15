/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  const formData = new FormData();

  if (options.method !== 'GET') {
    formData.append(Object.keys(options.data)[0], options.data.mail);
    formData.append(Object.keys(options.data)[1], options.data.password);
  }

  // В случае успешного выполнения кода, необходимо вызвать функцию, заданную в callback и передать туда данные, либо выдать текст ошибки
  try {
    xhr.open(options.method, options.url);
    xhr.send(formData);
  } catch (err) {
    options.callback(err);
  }

  xhr.addEventListener('load', options.callback(null, xhr.response));
  xhr.addEventListener('error', options.callback(xhr.statusText, null));
};