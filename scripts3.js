function footwear() {
    /* Input: today's weather
    * Processing: find appropriate shoes for weather
    * Output: Display appropriate shoes for weather to the user
    */
    
    //Input: get user inputs and assign them to the variables
    let hot = document.getElementById('hot').value;
    let rain = document.getElementById('rain').value;
    let snow = document.getElementById('snow').value;
    let unknown = document.getElementById('unknown').value;
    
    //Processing: compare the value of the variable by using switch statsment
    let shoes;
    switch (weather) {
    case hot:
    shoes = 'sandals';
    break;
    case rain:
    shoes = 'galoshes';
    break;
    case snow:
    shoes = 'boots';
    break;
    case unknown:
    shoes = 'shoes';
    break;
    }
    //Output: Display the message to the user
    document.getElementById('output').innerHTML = 'Adequate footwear type is ' + shoes + '.';
}