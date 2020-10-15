    console.log(`----ПЕРВАЯ ЗАДАЧА----`);
    
    let arr = [`cat`,`dog`,`parrot`,`horse`];

    console.log(`Индекс нужного элемента через arr.indexOf: ${arr.indexOf(`parrot`)}`);
    arr.forEach((item,index,arr) => { if (item == `parrot`)  console.log(`Индекс нужного элемента через arr.forEach: ${index}`) });
    //console.log(`Индекс нужного элемента через map: ${arr.map((item,index,arr) => {if (item == `parrot`) return index })}`);
    for (let i = 0; i<arr.length;i++) {
        if ( arr[i] == `parrot`) {
            console.log(`Индекс нужного элемента через цикл for: ${i}`);
        } 
    };

    console.log(`----КОНЕЦ ПЕРВОЙ ЗАДАЧИ----`);


    console.log(`----ВТОРАЯ ЗАДАЧА----`);


   let massive = [`cat`,`dog`,`parrot`,`horse`,`fish`,`chicken`,`lion`];


   console.log(`С помощью метода мар можно создать массив с такой же длиной , но без 'fish' c undefined:
   ${massive.map((item,index,arr) => {if (item != `fish`) return item })}`);

   massive.splice(massive.indexOf(`fish`),1);
   console.log(`с помощью .splice и .indexOf  удялем 'fish': ${massive}`);
   console.log(`с помощью метода .shift можно удалить первый элемент : ${massive.shift()}`);
   massive.splice(massive.length-2,2);
   console.log(`с помощью метода  .splice  можно удалить два последних элемента ${massive}`);
   console.log(`Либо можно использовать два раза подряд метод  massive.pop()`);



    console.log(`----КОНЕЦ ВТОРОЙ ЗАДАЧИ----`);
    console.log(`----ТРЕТЬЯ ЗАДАЧА----`);

    let arrays = [31,10,`chicken`,9,`fish`,`10`];


    while (arrays.some((item,index,arr) => typeof(arr[index]) != `string`)) {
    arrays.forEach(function(item,index,arr) {
        if (typeof(item) != `string`) {
            arr.splice(index,1);
        }
    });
    }
    
    console.log(`Все строки: ${arrays}`);

    arrays = [31,10,`chicken`,9,`fish`,`10`];

    while (arrays.some((item,index,arr)=> item !=10)) {
        arrays.forEach((item,index,arr) => { if (item != 10) arr.splice(index,1) });
    }

    
    
    console.log(`Все элементы со значинем 10: ${arrays}`);

    console.log(`----КОНЕЦ ТРЕТЬЕЙ ЗАДАЧИ----`);
