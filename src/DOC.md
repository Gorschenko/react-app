# Полезная информация

## PropTypes links

https://ru.reactjs.org/docs/typechecking-with-proptypes.html

## Css module - изолированные стили

Смотри компонент FormApp:
1) Создать Css файл: MyStyle.module.scss.
2) Импортировать его как объект (classes).
3) Аттрибуту className присвоить значение (selectStyle) этого объект, выбрав класс: classes.selectStyle.

## Управляемый компонент

<Input
    value={title}
    onChange={e => this.state.query(e.target.value)}
/>