$(function(){
    // var data = [
    // 	{ "date": "2020-09-21 10:15:20", "title": "Событие 1", "description": "Lorem Ipsum dolor set", "url": "http://www.event3.com/" },
    // 	{ "date": "2020-09-21 10:15:20", "title": "Событие 2", "description": "Lorem Ipsum dolor set", "url": "" },
    // 	{ "date": "2020-09-01 10:15:20", "title": "Событие 3", "description": "Lorem Ipsum dolor set", "url": "http://www.event3.com/" },
    // 	{ "date": "2020-10-21 10:15:20", "title": "Событие 4", "description": "Lorem Ipsum dolor set", "url": "http://www.event3.com/" },
    // ];
    $('#eventCalendar').eventCalendar({
        // jsonData: data,
        eventsjson: 'data.json',
        jsonDateFormat: 'human',
        startWeekOnMonday: false,
        openEventInNewWindow: true,
        dateFormat: 'dddd DD-MM-YYYY',
        showDescription: false,
        locales: {
            locale: "ru",
            txt_noEvents: "Нет запланированных событий",
            txt_SpecificEvents_prev: "",
            txt_SpecificEvents_after: "события:",
            txt_NextEvents: "Следующие события:",
            txt_GoToEventUrl: "Смотреть",
            moment: {
                "months" : [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
                "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
                "monthsShort" : [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн",
                "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
                "weekdays" : [ "Воскресенье", "Понедельник","Вторник","Среда","Четверг",
                "Пятница","Суббота" ],
                "weekdaysShort" : [ "Вс","Пн","Вт","Ср","Чт",
                "Пт","Сб" ],
                "weekdaysMin" : [ "Вс","Пн","Вт","Ср","Чт",
                "Пт","Сб" ]
            }
        }
    });
});