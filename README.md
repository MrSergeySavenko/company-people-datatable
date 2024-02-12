## API

Спецификация метода API - [https://kode-frontend-team.stoplight.io/docs/koder-stoplight/e981f97438300-get-users-list](https://kode-frontend-team.stoplight.io/docs/koder-stoplight/e981f97438300-get-users-list)

### Получить всех пользователей

```javascript
const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
};
fetch('https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all', options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
```

### Получить пользователей определённого департамента

```javascript
const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
};
fetch(
    'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=frontend',
    options
)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
```

> Параметр `__example` может принимать одно из значений:
> `android` `ios` `design` `management` `qa` `back_office` `frontend` `hr` `pr` `backend` `support` `analytics`

### Пример запроса для тестирования на разных данных (генерируется автоматически при каждом запросе)

```javascript
const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
};

fetch('https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__dynamic=true', options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
```

### Запрос, который вернёт ошибку с http кодом 500

```javascript
const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
};
fetch(
    'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__code=500&__dynamic=true',
    options
)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
```

#### Соответствия названия вкладок с полем "department" из запроса API:

```
android -> Android
ios -> iOS
design -> Дизайн
management -> Менеджмент
qa -> QA
back_office -> Бэк-офис
frontend -> Frontend
hr -> HR
pr -> PR
backend -> Backend
support -> Техподдержка
analytics -> Аналитика
```

При нажатии на кнопку «Фильтр» открывается модальное окно с вариантами сортировки списка работников. Есть два варианта сортировки: «По алфавиту» (по умолчанию), «По дню рождения». При переключении варианта сортировки модальное окно должно закрываться, а список на главной странице должен обновиться.

Когда пользователь вводит текст в поисковое поле, необходимо фильтровать список на главном экране и отображать только работников, соответствующих параметрам поиска. Поиск может осуществляться по имени, фамилии или никнейму, состоящему из двух символов.

В случае отсутствия результатов поиска необходимо отобразить информацию о том, что ничего не было найдено. Экран "2.0.2Г Люди (Ошибка поиска)"
