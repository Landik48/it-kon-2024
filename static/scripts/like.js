async function sendLike(type, id, loggin, likeobj, likecounterobj, author, user_id) {
    if (loggin === "True") {
        if(author === user_id) return alert('Вы не можете поставить лайк своей же публикации!');
        if (likeobj.css('color') == 'rgb(221, 79, 70)') isdelete = 1;
        else isdelete = 0;

        return await $.ajax({
            url: '/like',
            method: 'post',
            dataType: 'json',
            data: {id: id, type: type, delete: isdelete},
            success: function (data) {
                if (data.ok === true) {
                    const likecount = parseInt(likecounterobj.text());

                    if (isdelete === 1) {
                        likeobj.css('color', 'white');
                        likecounterobj.text(likecount - 1);
                    } else {
                        likeobj.css('color', 'var(--red-color)');
                        likecounterobj.text(likecount + 1);
                    }
                }
                else alert('Произошла ошибка!');
            },
            error: function () {
                alert('Произошла ошибка!');
            }
        });
    } else alert('Чтобы поставить лайк нужно авторизоваться!');
}